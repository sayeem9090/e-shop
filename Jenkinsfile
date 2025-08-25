pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sayeem9090/e-shop.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t sayeem9090/eshop-frontend:latest ./frontend'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm sayeem9090/eshop-frontend:latest npm test || true'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push $DOCKER_USER/eshop-frontend:latest
                    '''
                }
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
