# Stage 1: Build
FROM node:22-bullseye AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY app/package.json app/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY app/ ./
RUN pnpm build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the static export from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html
# Custom Nginx config to handle Next.js routes and clean URLs
RUN echo "server { listen 8080; location / { root /usr/share/nginx/html; index index.html; try_files \$uri \$uri.html \$uri/ /404.html; } }" > /etc/nginx/conf.d/default.conf
# Cloud Run expects the container to listen on the port defined by the PORT env var (default 8080)
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
