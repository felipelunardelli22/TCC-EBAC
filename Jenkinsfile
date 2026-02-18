pipeline {
    agent any

    tools {
        nodejs 'node' // Certifique-se que este nome coincide com o configurado no Jenkins
    }

    stages {
        stage('Preparar Ambiente') {
            steps {
                // Entra na pasta onde o projeto realmente reside
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