# build stage
FROM --platform=linux/amd64 node:18.18-alpine as build
WORKDIR /tmp
COPY . .
RUN npm install && npm run build

# run stage
FROM --platform=linux/amd64 nginx:1.23-alpine
WORKDIR /app
COPY --from=build /tmp/dist ./
COPY nginx.conf /etc/nginx/nginx.conf