# Use official Node.js image
FROM node:20-alpine
 
# Set working directory
WORKDIR /app
 
# Copy package files
COPY package*.json ./
 
# Install only production dependencies
RUN npm install --omit=dev
 
# Copy the rest of the application code
COPY . .
 
# Expose application port
EXPOSE 3000
 
# Start the application
CMD ["node", "index.js"]
