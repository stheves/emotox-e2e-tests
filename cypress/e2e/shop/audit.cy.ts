describe('Audit', () => {
    it('passes the audits', () => {
        cy.lighthouse();
        cy.pa11y({ threshold: 999 });
    });
});
