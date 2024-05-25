pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/tathagat07/usermanagement.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
