pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                dir('my-app') {
                    bat 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir('my-app') {
                    bat 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('my-app') {
                    bat 'npx vercel --prod --token=%VERCEL_TOKEN%'
                }
            }
        }
    }
}
