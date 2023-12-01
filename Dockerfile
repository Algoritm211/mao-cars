# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18

# Set ARG for build-time environment variables
ARG NEXT_PUBLIC_BACKEND_BASE_ARG
ARG CLOUDINARY_KEY_ARG

# Set ENV to the values passed during build
ENV NEXT_PUBLIC_BACKEND_BASE=$NEXT_PUBLIC_BACKEND_BASE_ARG
ENV CLOUDINARY_KEY=$CLOUDINARY_KEY_ARG

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build Next.js app
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
