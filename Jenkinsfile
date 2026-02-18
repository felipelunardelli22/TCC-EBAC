pipeline {
    agent any

    tools {
        // Verifique se no seu Jenkins o nome é 'node' ou 'Node'
        nodejs 'node' 
    }

    stages {
        stage('Preparar Ambiente') {
            steps {
                dir('TCC-EBAC-CYPRESS') {
                    echo 'Instalando dependencias...'
                    bat 'npm install'
                }
            }
        }

        stage('Testes de API') {
            steps {
                dir('TCC-EBAC-CYPRESS') {
                    echo 'Executando testes de API - US0003'
                    bat 'npx cypress run --spec "cypress/e2e/API/cupons.cy.js"'
                }
            }
        }

        stage('Testes de UI') {
            steps {
                dir('TCC-EBAC-CYPRESS') {
                    echo 'Executando testes de UI - US0001'
                    bat 'npx cypress run --spec "cypress/e2e/UI/carrinho.cy.js"'
                }
            }
        }
    }

    post {
        always {
            echo 'Finalizando a execucao da pipeline de QA...'
        }
    }
}