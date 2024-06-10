# Step 1: Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Step 2: Set the working directory in the container
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Step 3: Copy the package.json and package-lock.json files to the working directory
ADD package*.json ./

COPY . .

# Step 4: Install the project dependencies
RUN npm install --no-optional && npm cache clean --force

