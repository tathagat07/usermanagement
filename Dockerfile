# Start from the official Node.js LTS (Long Term Support) image
FROM node:lts

# Set the working directory in the Docker image
WORKDIR userManagement

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install dependencies in the image
RUN npm install

# Copy the rest of the application into the image
COPY . .

# Expose port 8080 (or whatever port your app uses)
EXPOSE 3000

CMD ["node", "server.js"]