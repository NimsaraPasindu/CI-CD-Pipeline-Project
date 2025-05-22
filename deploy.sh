#!/bin/bash
set -e  # Exit on error

# Securely read secrets from Jenkins environment variables
VM_USER="$1"      # Passed as argument (or use Jenkins credentials)
VM_IP="$2"        # VM IP/hostname
APP_DIR="/var/www/myapp"

echo "⚡ Starting deployment to $VM_IP..."

# 1. Copy files to VM (using SSH + SCP)
echo "📦 Copying files to VM..."
scp -r ./dist/* $VM_USER@$VM_IP:$APP_DIR/

# 2. SSH into VM and run commands
echo "🚀 Setting up VM..."
ssh $VM_USER@$VM_IP << EOF
  set -e  # Exit on error

  # Navigate to app directory
  cd $APP_DIR

  # Install dependencies (example: Node.js/Python)
  npm install --production
  # pip install -r requirements.txt  # For Python

  # Restart service (e.g., systemd/Nginx)
  sudo systemctl restart myapp.service

  # Optional: Run database migrations
  # npm run migrate  # or `flask db upgrade`
EOF

echo "✅ Deployment complete!"
