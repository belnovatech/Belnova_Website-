# Use Nginx to serve React build
FROM nginx:alpine

# Copy React build output into Nginx HTML directory
COPY belnovainfotech/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
