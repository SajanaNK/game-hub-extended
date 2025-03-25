# Stage 1: Build the React app using Node.js
FROM node:16 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Add a check to ensure the build folder is generated
RUN ls -al /app/dist

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy build files from the first stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
