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

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

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

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Set environment variable
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]
