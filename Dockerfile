FROM node

# Use app directory
WORKDIR /src

# Install app dependencies
COPY package.json /src/package.json
RUN npm install --production

# Bundle app source
COPY . /src

# Run the app
CMD [ "npm", "start" ]
