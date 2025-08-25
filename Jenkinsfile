pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-creds', 
                    usernameVariable: 'DOCKER_USER', 
                    passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                }
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t sayeem9090/eshop-frontend:latest ./frontend'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Tests would run here'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push sayeem9090/eshop-frontend:latest'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
            }
        }

        stage('Notify Team') {
            steps {
                echo 'Sending notifications...'
            }
        }
    }

    post {
        failure {
            sh 'echo ❌ Deployment FAILED!'
        }
    }
}

