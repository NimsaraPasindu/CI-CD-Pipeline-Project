//// Jenkinsfile
pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main',credentialsId: 'your-git-token', url: 'https://github.com/NimsaraPasindu/CI-CD-Pipeline-Project.git'
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

    

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t myapp-image .'
      }
    }

    stage('Deploy to Azure VM') {
        steps {
            withCredentials([usernamePassword(credentialsId: 'your-credential-id', usernameVariable: 'AZURE_USER', passwordVariable: 'AZURE_PASS')]) {
                sh '''
                 docker save myapp-image | bzip2 | sshpass -p "$AZURE_PASS" ssh -o StrictHostKeyChecking=no $AZURE_USER@20.42.106.121 'bunzip2 | docker load && docker run -d -p 80:3000 myapp-image'
                '''
        }
    }
  }
}
}
