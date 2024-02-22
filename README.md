
# Pesquisa de Artigos Blog AGI
## Tecnologias

  - Cypress @ 13.6.5
  - NodeJS @ v19.7.0
  - NPM @ 9.6.0

## Setup

### Pré-requisitos:
- Instalar o NodeJS
- Instalar um editor de texto, como o Visual Studio Code
- Instalar o Git (caso queira trabalhar com projeto em sua máquina)

## Passos para executar o projeto

  - Clonar o repositório
  - Dentro da raiz do projeto, executar o comando [npm install]
  - Executar os comandos a seguir para rodar os testes em modo headless nos navegadores:
  
    
- xxxx: [npm run xxxx]
- xxxx: [npm run xxxx]
    
    - Electron: [npm run cy:run:electron]
    - Chrome: [npm run cy:run:chrome]
    - Firefox: [npm run cy:run:firefox]
    - Edge: [npm run cy:run:edge]

    Interface gráfica Cypress: 
    - No terminal rodar: npx cypress open
    - Irá abrir a tela do cypress
    - Seleciona a opção E2E Testing
    - Clica no botão Start E2E
    - Na tela com a aba já selecionada Specs, seleciona teste desejado e ele vai começar a rodar.

    Documentação dos testes em Gherkin:

    - Acessa pasta e2e/docs/
    - Acessa pasta e2e/scenarios/
    
    Rodar teste em modo headless e gerar relatório pelo allure:

    - npx cypress run nometeste.cy.js --config video=false --env allure=true
    - allure generate allure-results
    - allure open allure-report


- 



