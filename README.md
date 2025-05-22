🚀 CI/CD Pipeline with Jenkins, Docker & Azure

This project demonstrates a complete CI/CD pipeline for a Node.js application using Jenkins, Docker, and Azure Virtual Machines.

🔧 Technologies Used
Jenkins – CI/CD automation

Docker – Containerize the application

Azure VM – Host and run the app in production

GitHub – Source code repository

Node.js / npm – App environment and testing

📦 Pipeline Stages
Clone Repo – Pulls the latest code from GitHub (main branch).

Install – Runs npm install to install dependencies.

Unit Test – Executes unit tests using npm test.

Integration Test – Executes integration tests via npm run test:integration.

Build Docker Image – Builds a Docker image named myapp-image.

Deploy to Azure VM:

Compresses the Docker image with bzip2.

Sends it to the Azure VM using sshpass.

Decompresses and loads it into Docker.

Runs the container on port 80.

🔐 Credentials Used in Jenkins
GitHub Token – For cloning the private repository.

Azure VM Credentials – Stored as "Username with Password" in Jenkins 

✅ Requirements
Jenkins installed and running

Jenkins agent with:

Docker

Node.js

sshpass

bzip2

Azure VM with:

Docker installed

bzip2 installed

node and npm installed

User added to docker group


📌 Notes
Make sure the Azure VM security group allows inbound traffic on port 80.

Avoid using StrictHostKeyChecking=no in production (use SSH key authentication instead).

Ensure the Jenkins user has permission to run Docker.