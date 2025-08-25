# 🛒 E-Shop CI/CD Project

## 📌 Overview
A production-like CI/CD pipeline for a Node.js e-commerce app with MongoDB backend.
It uses Jenkins, Docker, Docker Hub, and Docker Compose.

## ⚙️ Tech Stack
- Node.js + Express (frontend)
- MongoDB (database)
- Jenkins (CI/CD)
- Docker & Docker Compose
- Docker Hub (registry)
- Slack/Webhook (optional notifications)

## 🚀 Pipeline Flow
1. Developer pushes code to GitHub
2. Jenkins pulls code & builds Docker image
3. Jenkins runs automated tests
4. Jenkins pushes image to Docker Hub
5. Jenkins deploys app to staging (Docker Compose)
6. Team gets notification

## 🐳 Run Locally
```bash
git clone https://github.com/YOUR-USERNAME/e-shop.git
cd e-shop
docker compose up -d
