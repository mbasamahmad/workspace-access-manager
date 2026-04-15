# Use official Node.js image.
FROM node:16

# Set working directory.
WORKDIR /usr/src/app

# Copy project files.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy all files.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Start the app.
CMD [ "npm", "run", "dev" ]