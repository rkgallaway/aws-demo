#!/bin/bash

# Update package lists
sudo yum update -y

# Install necessary software
sudo yum install -y git nodejs npm

# Install pm2 to run server outside of an SSH connection
sudo npm install -g pm2

# Clone starter code
git clone <repository_url> demo-server

# Change directory to the cloned repository
cd demo-server

# Install dependencies
npm install

#run server
pm2 start index.js