//// Jenkinsfile
pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/YOUR_USERNAME/myapp.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Unit Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Integration Test') {
      steps {
        sh 'npm run test:integration'
      }
    }

    stage('UI Test') {
      steps {
        sh 'npx cypress run'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t myapp-image .'
      }
    }

    stage('Deploy to Azure VM') {
      steps {
        sshagent(['your-azure-vm-key']) {
          sh '''
            docker save myapp-image | bzip2 | ssh azureuser@<VM_PUBLIC_IP> 'bunzip2 | docker load && docker run -d -p 80:3000 myapp-image'
          '''
        }
      }
    }
  }
}