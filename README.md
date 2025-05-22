
# 🚀 CI/CD Pipeline with Jenkins, Docker & Azure VM

This project demonstrates a complete CI/CD pipeline for a Node.js application using **Jenkins**, **Docker**, and an **Azure Virtual Machine**.

---

## 📸 Project Demo

| Jenkins Pipeline | Jenkins Job |
|------------------|-------------|
| ![Pipeline](images/pipeline.png) | ![Jenkins Job](images/jenkins-job.png) |

| Azure VM Terminal | App in Browser |
|-------------------|----------------|
| ![Azure VM](images/azure-vm.png) | ![App UI](images/app-ui.png) |

> Place your 4 screenshots inside a folder named `images/` in your project directory.

---

## 🔧 Technologies

- Jenkins
- Docker
- Azure VM
- Node.js
- GitHub
- sshpass & bzip2

---

## 📦 Pipeline Stages

1. ✅ Clone Repository from GitHub
2. ✅ Install Node.js Dependencies
3. ✅ Run Unit Tests
4. ✅ Run Integration Tests
5. ✅ Build Docker Image
6. ✅ Deploy to Azure VM

---

## 📂 Project Structure

```bash
CI-CD-Pipeline-Project/
├── Jenkinsfile
├── Dockerfile
├── src/
├── test/
├── images/
│   ├── pipeline.png
│   ├── jenkins-job.png
│   ├── azure-vm.png
│   └── app-ui.png
├── package.json
└── README.md
```

---

## 🛠️ Requirements

- Jenkins installed and configured
- Jenkins agent with:
  - Docker
  - Node.js
  - `sshpass`
  - `bzip2`
- Azure VM:
  - Docker installed
  - `bzip2` installed
  - Docker permissions granted (`sudo usermod -aG docker $USER`)
- Jenkins Credentials:
  - GitHub token (`github-token`)
  - Azure VM credentials (`azure-vm` as username+password pair)

---

## 📄 Jenkinsfile Sample

<details>
<summary>Click to expand</summary>

```groovy
pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/NimsaraPasindu/CI-CD-Pipeline-Project.git'
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
        withCredentials([usernamePassword(credentialsId: 'azure-vm', usernameVariable: 'AZURE_USER', passwordVariable: 'AZURE_PASS')]) {
          sh '''
            docker save myapp-image | bzip2 | sshpass -p "$AZURE_PASS" ssh -o StrictHostKeyChecking=no $AZURE_USER@20.42.106.121 'bunzip2 | docker load && docker run -d -p 80:3000 myapp-image'
          '''
        }
      }
    }
  }
}
```

</details>

---

## 🔐 Credentials Used in Jenkins

| Credential ID | Type | Usage |
|---------------|------|-------|
| `github-token` | GitHub Access Token | Clone private repo |
| `azure-vm`     | Username/Password   | SSH login to Azure VM |

---

## 🙌 Author

- **Pasindu Nimsara**
- GitHub: [@NimsaraPasindu](https://github.com/NimsaraPasindu)

---

## 🌐 Optional: Live App

> 🖥️ Visit your app at [http://<your-azure-ip>](http://<your-azure-ip>)

---

## 📝 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/NimsaraPasindu/CI-CD-Pipeline-Project.git
cd CI-CD-Pipeline-Project

# Install dependencies
npm install

# Run tests
npm test
```

---

## 💡 Tips

- Install `sshpass` and `bzip2` on Jenkins and Azure VM.
- Use `.dockerignore` to reduce Docker image size.
- Setup Azure firewall to allow traffic on port 80.

---

## 📬 Feedback

If you find bugs or want to contribute, feel free to open issues or pull requests!
