# Projeto de Testes Automatizados - SauceDemo com Cypress

Olá! Este é meu projeto de testes automatizados usando o Cypress no site de demonstração https://www.saucedemo.com.

### Sobre o projeto

Neste projeto, eu automatizei testes básicos para a página de login e também para a funcionalidade de adicionar um produto ao carrinho depois de logar. O objetivo foi aprender a usar o Cypress para testar funcionalidades importantes de um site.

---

### O que foi testado?

1. Testei se o login funciona com um usuário válido.
2. Testei se o sistema mostra mensagem de erro quando a senha está errada.
3. Testei se o sistema bloqueia usuário com conta bloqueada.
4. Testei se, após o login, consigo adicionar um produto ao carrinho.

---

### Como rodar os testes?

#### Pré-requisitos

- Ter o Node.js e npm instalados.
- Instalar o Cypress (já está no package.json).

#### Passos para rodar

1. Clone o projeto:
```
git clone https://github.com/YasmimKethelen/TestedeSoftware.git
```
2. Entre na pasta do projeto:
```
cd testedesoftware
```
3. Instale as dependências:
```
npm install
```
4. Para abrir a interface do Cypress (modo gráfico):
```
npx cypress open
```
5. Para rodar os testes no terminal (modo headless):
```
npx cypress run
```

---

### Estrutura dos arquivos

- `login.cy.js`: testes de login
- `cart.cy.js`: teste de adicionar ao carrinho
- `commands.js`: comandos extras para facilitar os testes

---

### Contato

GitHub: [YasmimKethelen]

---

### Licença

Licença disponibilizada pela FPFTech Escola de Tecnologia, para fins de aprendizado durante o curso de desenvolvimento de software.
