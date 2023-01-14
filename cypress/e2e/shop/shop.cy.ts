describe('Shop Page', () => {
    beforeEach(() => {
        cy.visit('/shop');
        cy.clickCookiesBtn('Akzeptieren');
    });

    it('displays the shop page successfully', () => {
        cy.get('h1').should('have.text', 'Shop');
    });

    it('displays the product list successfully and navigates to the details', () => {
        cy.get('.products > .entry')
            .should('have.length.at.least', 1)
            .first()
            .should('be.visible')
            .click();
        cy.location('pathname').should('match', /produkt\/[^/]+/);
    });

    it('adds a product to the cart successfully', () => {
        cy.get('li.product-type-simple a.ajax_add_to_cart').first().click();
        cy.get('a.added_to_cart').should('be.visible');
        cy.get('.wcmenucart').realHover();

        cy.get('.widget_shopping_cart').should('be.visible');
        cy.get('.widget_shopping_cart .cart_item').should(
            'have.length',
            3, // one for mobile and one for desktop
        );
    });
});
