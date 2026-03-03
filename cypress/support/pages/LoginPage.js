export class loginPage {
    constructor() {
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }
    doLogin(){
        cy.get(this.usernameInput).type('standard_user');
        cy.get(this.passwordInput).type('secret_sauce');
        cy.get(this.loginButton).click();
    }

    doLoginError() {
        cy.get(this.usernameInput).type('invalid123user');
        cy.get(this.passwordInput).type('dwd123s');
        cy.get(this.loginButton).click();
    }

    validarLoginExitoso() {
        cy.url().should('include', '/inventory.html');
    }
    verificarMensajeError() {
        cy.get(this.errorMessage).should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

    doLoginCompleto() {
        cy.visit('https://www.saucedemo.com/');
        cy.get(this.usernameInput).type('standard_user');
        cy.get(this.passwordInput).type('secret_sauce');
        cy.get(this.loginButton).click();
    }
}