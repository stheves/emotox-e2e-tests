describe('Shop Tests', () => {
    before(() => {
        cy.visit('https://www.e-moto-x.de/shop/');
        cy.clickCookiesBtn('Akzeptieren');
    });

    it('displays the shop page successfully', () => {
        cy.get('h1').should('have.text', 'Shop');
    });

    it('finds a product in the list successfully', () => {
        cy.get('.product-inner')
            .contains('SUR-RON LIGHT BEE L1E X')
            .should('be.visible');
    });

    it('passes the audits', () => {
        cy.lighthouse();
        cy.pa11y({ threshold: 999 });
    });
});
