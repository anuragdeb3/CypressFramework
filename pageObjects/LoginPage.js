class LoginPage {
  getUsername() {
    return cy.get('#username');
  }
  getPassword() {
    return cy.get('#password');
  }
  getLoginButton() {
    return cy.get('button[type="submit"]');
  }
  login(username, password) {
    this.getUsername().type(username);
    this.getPassword().type(password);
    this.getLoginButton().click();
  }
}

export default new LoginPage();
