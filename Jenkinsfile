pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Preparar Ambiente') {
            steps {
                dir('TCC-EBAC-CYPRESS') {
                    echo 'Instalando dependências do projeto...'
                    bat 'npm install'
                }
            }
        }

        stage('Testes de API') {
            steps {
                dir('TCC-EBAC-CYPRESS') {
                    echo 'Executando testes de API (US-0003)...' [cite: 167]
                    bat 'npx cypress run --spec "cypress/e2e/API/cupons.cy.js"'
                }
            }
        }

        stage('Testes de UI') {
            steps {
                dir('TCC-EBAC-CYPRESS') {
                    echo 'Executando testes de UI (US-0001)...' [cite: 164]
                    bat 'npx cypress run --spec "cypress/e2e/UI/carrinho.cy.js"'
                }
            }
        }
    }

    post {
        always {
            echo 'Finalizando a execução da pipeline de QA...'
        }
    }
}