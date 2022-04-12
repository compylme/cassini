// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-wait-until';

Cypress.Commands.add("parseXlsx", (inputFile) => {
	return cy.task('parseXlsx', { filePath: inputFile })
});

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});

Cypress.Commands.add('username_enter', () => {
   cy.get('[id="login-signin"]').invoke('removeAttr', 'target').click()
});

Cypress.Commands.add('password_enter', () => {
   cy.get('[name="verifyPassword"]').invoke('removeAttr', 'target').click()
});

Cypress.Commands.add('finance', () => {
   cy.get('[class="_yb_5g3hz  rapid-noclick-resp"]')
    .contains('Finance').invoke('removeAttr', 'target')
    .click({force: true})
});

Cypress.Commands.add('date_picker', () => {
   cy.get('[class="M(0) O(n):f D(ib) Bd(0) datePickerBtn O(n):f Pos(r)"]')
   .click({force: true});
});

Cypress.Commands.add('april_11', (alias) => {
   cy.get('[class="Py(0) My(0) Mx(a) Whs(nw) W(90%) Bd Bdrs(2px) Bdc($seperatorColor) Bxsh($boxAreaShadow) Whs(n)--tab768 Bxsh(n)--tab768 Bd(0)--tab768 Whs(n)--mobxl Bxsh(n)--mobxl Bd(0)--mobxl Whs(n)--mobp Bxsh(n)--mobp Bd(0)--mobp  W(80%)--mobp"]')
		 .children().eq(1).as(alias)
});

Cypress.Commands.add('login', (alias) => {
  cy.get('[id="login-username-form"]').find('[id="username-country-code-field"]').as(alias)
});







