# Documento de Cenários de Teste - SauceDemo

Este documento explica os testes que automatizei para o site SauceDemo.

---

## Cenário 1: Login com sucesso

- **Pré-condições:** Estar na página de login do site.
- **Passos:**
    1. Digitar usuário: `standard_user`
    2. Digitar senha: `secret_sauce`
    3. Clicar no botão "Login"
- **Resultado esperado:** Entrar na página de produtos.

---

## Cenário 2: Login com senha errada

- **Pré-condições:** Estar na página de login.
- **Passos:**
    1. Digitar usuário: `standard_user`
    2. Digitar senha errada: `senha_errada`
    3. Clicar em "Login"
- **Resultado esperado:** Mostrar mensagem de erro informando que usuário ou senha estão incorretos.

---

## Cenário 3: Login com usuário bloqueado

- **Pré-condições:** Estar na página de login.
- **Passos:**
    1. Digitar usuário: `locked_out_user`
    2. Digitar senha: `secret_sauce`
    3. Clicar em "Login"
- **Resultado esperado:** Mostrar mensagem que o usuário está bloqueado.

---

## Cenário 4: Adicionar item ao carrinho após login

- **Pré-condições:** Estar logada com `standard_user`.
- **Passos:**
    1. Clicar em "Add to cart" no primeiro produto da lista.
    2. Verificar se o carrinho mostra o número "1".
- **Resultado esperado:** O carrinho mostra o item adicionado.