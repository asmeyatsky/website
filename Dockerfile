# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for better caching
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci --frozen-lockfile

# Copy the rest of the application
COPY . .

# Set build-time environment variables for NEXT_PUBLIC_ variables
# Contentful secrets will be mounted at runtime, not build time
ARG NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY
ARG NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY
ARG NEXT_PUBLIC_GCS_NEWS_JSON_URL
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

ENV NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY
ENV NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY
ENV NEXT_PUBLIC_GCS_NEWS_JSON_URL=$NEXT_PUBLIC_GCS_NEWS_JSON_URL
ENV CONTENTFUL_SPACE_ID=$CONTENTFUL_SPACE_ID
ENV CONTENTFUL_ACCESS_TOKEN=$CONTENTFUL_ACCESS_TOKEN

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Create a non-root user with limited permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy necessary files from builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package*.json ./

# Ensure public directory exists and copy files
RUN mkdir -p ./public
COPY --from=builder /app/public/ ./public/

# Copy built application with proper permissions
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Install only production dependencies
RUN npm ci --frozen-lockfile --production && npm cache clean --force

# Limit resources and create a more restricted environment
RUN echo "ulimit -u 32" >> /etc/profile

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Set environment variable
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Use dumb-init as the entrypoint to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "server.js"]
