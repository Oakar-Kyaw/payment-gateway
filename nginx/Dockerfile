FROM nginx:alpine

# Copy the full main nginx.conf file (with events and http blocks)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

