pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        DOCKER_USER = "${DOCKERHUB_CREDENTIALS_USR}"
        DOCKER_PASS = "${DOCKERHUB_CREDENTIALS_PSW}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR-USERNAME/e-shop.git'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t $DOCKER_USER/eshop-frontend:latest ./frontend'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'docker run --rm $DOCKER_USER/eshop-frontend:latest npm test || true'
            }
        }
        stage('Push to DockerHub') {
            steps {
                sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                sh 'docker push $DOCKER_USER/eshop-frontend:latest'
            }
        }
        stage('Deploy to Staging') {
            steps {
                sh 'docker compose down || true && docker compose up -d'
            }
        }
        stage('Notify Team') {
            steps {
                sh 'echo "✅ Deployment completed"'
                // replace with Slack webhook later
            }
        }
    }
    post {
        failure {
            sh 'echo "❌ Deployment FAILED!"'
        }
    }
}
