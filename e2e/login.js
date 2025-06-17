import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pageObjects/LoginPage';

Given('I open the login page', () => {
  cy.visit('/login');
});

When('I enter valid credentials', () => {
  LoginPage.login(Cypress.env('adminUser'), Cypress.env('adminPassword'));
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});
