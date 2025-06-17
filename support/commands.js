Cypress.Commands.add('loginAsAdmin', () => {
  cy.visit('/login');
  cy.get('#username').type(Cypress.env('adminUser'));
  cy.get('#password').type(Cypress.env('adminPassword'));
  cy.get('button[type="submit"]').click();
});
