describe('Testes de Login - SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('LOGIN_001 - Login com sucesso', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');
    });

    it('LOGIN_002 - Senha incorreta', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('senha_errada');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });

    it('LOGIN_003 - Usuário bloqueado', () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'user has been locked out');
    });
});
