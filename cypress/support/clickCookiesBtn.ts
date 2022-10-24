declare global {
    namespace Cypress {
        interface Chainable {
            clickCookiesBtn: typeof clickCookiesBtn;
        }
    }
}

export const clickCookiesBtn = (label: string) => {
    cy.get('#usercentrics-root', { timeout: 10000 })
        .shadow()
        .find('#uc-center-container')
        .find('button')
        .contains(label)
        .click();
};
