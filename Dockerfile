FROM nginx:alpine
COPY files/smeyatsky-labs.html /usr/share/nginx/html/index.html
COPY files/allan.jpeg /usr/share/nginx/html/allan.jpeg
EXPOSE 8080
CMD sed -i 's/listen\s*80;/listen 8080;/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
