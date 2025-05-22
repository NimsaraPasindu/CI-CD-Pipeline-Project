
# 🚀 CI/CD Pipeline with Jenkins, Docker & Azure VM

This project demonstrates a complete CI/CD pipeline for a Node.js application using **Jenkins**, **Docker**, and an **Azure Virtual Machine**.



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



## 🔐 Credentials Used in Jenkins

| Type                | Usage                 |
|---------------------|-----------------------|
| GitHub Access Token | Clone private repo    |
| Username/Password   | SSH login to Azure VM |

---

## 🙌 Author

- **Pasindu Nimsara**
- GitHub: [@NimsaraPasindu](https://github.com/NimsaraPasindu)


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

---

## 💡 Tips

- Install `sshpass` and `bzip2` on Jenkins and Azure VM.
- Use `.dockerignore` to reduce Docker image size.
- Setup Azure firewall to allow traffic on port 80.

---

## 📬 Feedback

If you find bugs or want to contribute, feel free to open issues or pull requests!
