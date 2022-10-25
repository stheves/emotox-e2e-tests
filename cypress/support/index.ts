import '@cypress-audit/pa11y/commands';
import '@cypress-audit/lighthouse/commands';
import { clickCookiesBtn } from './clickCookiesBtn';

Cypress.Commands.add('clickCookiesBtn', clickCookiesBtn);
