FROM nginx:alpine
WORKDIR /app
RUN mkdir /NodeJS-Project
COPY app.js .
COPY nginx.conf /etc/nginx

