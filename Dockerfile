

# Use an official Node.js runtime as a base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# This allows Docker to cache the npm install step if dependencies haven't changed
COPY package*.json ./

# Install application dependencies
RUN npm ci --only=production

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Define the command to run when the container starts
CMD [ "npm", "run", "dev" ]