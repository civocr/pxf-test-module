# Use an official Node.js runtime as a parent image
FROM node:21

# Set the working directory in the container
WORKDIR /moduled-node

RUN npm i -g nodemon


# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package.json ./
COPY package-lock.json ./

# Install any dependencies
RUN npm install

#COPY ../user/ /usr/src/user-module

# Link the local package to your project
#RUN npm link /usr/src/user-module

# Copy the rest of the application code
COPY . .

USER node

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app (change "app.js" to your application's entry point if different)
CMD ["node", "server.js"]
