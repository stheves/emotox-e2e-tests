describe('Audit', () => {
    beforeEach(() => {
        cy.visit('https://www.e-moto-x.de/shop/');
        cy.clickCookiesBtn('Akzeptieren');
    });
    it('passes the audits', () => {
        cy.lighthouse();
        cy.pa11y({ threshold: 999 });
    });
});
