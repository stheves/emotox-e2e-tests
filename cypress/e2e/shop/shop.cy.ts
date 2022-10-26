describe('Shop Page', () => {
    beforeEach(() => {
        cy.visit('https://www.e-moto-x.de/shop/');
        cy.clickCookiesBtn('Akzeptieren');
    });

    it('displays the shop page successfully', () => {
        cy.get('h1').should('have.text', 'Shop');
    });

    it('displays the product list successfully and navigates to the details', () => {
        cy.get('.product-inner')
            .contains('SUR-RON LIGHT BEE L1E X')
            .should('be.visible')
            .click();
        cy.location('pathname').should(
            'eq',
            '/produkt/sur-ron-light-bee-l1e-x/',
        );
    });

    it('adds a product to the cart successfully', () => {
        cy.get('li.product-type-simple a.ajax_add_to_cart').first().click();
    });
});
