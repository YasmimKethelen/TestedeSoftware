describe('Funcionalidade de Adicionar ao Carrinho', () => {
    beforeEach(() => {
        cy.loginStandardUser();
    });

    it('COMPRA_001 - Adiciona um item ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    });
});
