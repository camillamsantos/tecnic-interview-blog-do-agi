Feature: Clientes

Scenario: CT001 - Cadastro de contato sócio no sistema
  Given que o usuário efetuou login no sistema
  When o usuário acessa a seção "Clientes"
  And o usuário seleciona um cliente
  And o usuário adiciona um contato sócio
  And o usuário preenche os demais dados solicitados
  And o usuário clica em "Salvar"
  Then o sistema deve criar o cadastro de contato sócio dentro do sistema

Scenario: CT002 - Edição de contato sócio no sistema
  Given que o usuário efetuou login no sistema
  When o usuário acessa a seção "Clientes"
  And o usuário seleciona um cliente
  And o usuário seleciona um contato sócio
  And o usuário clica em "Editar"
  And o usuário clica em "Salvar"
  Then o sistema deve editar o contato sócio dentro do sistema
