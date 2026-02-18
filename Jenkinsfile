pipeline {
    agent any

    tools {
        nodejs 'node' // Nome que você configurou no passo anterior
    }

    stages {
        stage('Instalar Dependências') {
            steps {
                // Instala o Cypress e as bibliotecas do projeto
                bat 'npm install'
            }
        }

        stage('Testes de API') {
            steps {
                // Executa especificamente os testes de cupom da US-0003
                bat 'npx cypress run --spec "cypress/e2e/API/cupons.cy.js"'
            }
        }

        stage('Testes de UI') {
            steps {
                // Executa os testes de carrinho da US-0001
                bat 'npx cypress run --spec "cypress/e2e/UI/carrinho.cy.js"'
            }
        }
    }

    post {
        always {
            // Garante que os relatórios sejam salvos mesmo se o teste falhar
            echo 'Finalizando a execução da pipeline de QA...'
        }
    }
}