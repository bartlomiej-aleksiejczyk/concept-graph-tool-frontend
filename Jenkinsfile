pipeline {
    agent any

    environment {
        IMAGE_NAME = "${JOB_NAME}".toLowerCase().replaceAll(/[^a-z0-9._-]/, '-')
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo SPRING_DB_PROD_URL
                    sh "docker stop ${env.IMAGE_NAME} || true"
                    sh "docker rm ${env.IMAGE_NAME} || true"
                    script {
                        sh '''
                # Use environment variables directly without Groovy interpolation
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
                    }
                }
            }
        }

        stage('Get Host IP') {
            steps {
                script {
                    env.HOST_IP = sh(script: "hostname -I | awk '{print \$1}'", returnStdout: true).trim()
                }
            }
        }

        stage('Ensure Traefik is Running') {
            steps {
                script {
                    sh '''
                    RUNNING=$(docker ps --filter "name=^/traefik$" --format "{{.Names}}")
                    if [ "$RUNNING" != "traefik" ]; then
                    echo "Starting Traefik container..."
                    docker rm traefik || true
                    docker run -d --name traefik \
                        --restart=unless-stopped \
                        -p 80:80 \
                        -p 8085:8080 \
                        -v /var/run/docker.sock:/var/run/docker.sock \
                        traefik:v2.5 \
                        --api.insecure=true \
                        --providers.docker \
                        --entrypoints.web.address=:80
                    else
                    echo "Traefik container is already running."
                    fi
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                        sh '''
                        docker run -d --restart=unless-stopped --name $IMAGE_NAME \
                        -e IMAGE_NAME="$IMAGE_NAME"\
                        -l traefik.enable=true \
                        -l "traefik.http.routers.$IMAGE_NAME.rule=Host(\\`$HOST_IP\\`) && PathPrefix(\\`/$IMAGE_NAME\\`)" \
                        -l traefik.http.services.$IMAGE_NAME.loadbalancer.server.port=5173 \
                        $IMAGE_NAME:$IMAGE_TAG
                        '''
                }
            }
        }
    }
}
