/// <reference types="cypress"/>

class SignIn {
    emailField = '[formcontrolname=email]';
    passwordField = '[formcontrolname=password]';
    signInButton = '[type=submit]';

    josipaSignIn(){
        cy.contains('a', 'Sign in').click();
        cy.get(this.emailField).clear().type('josipa@gmail.com');
        cy.get(this.passwordField).clear().type('josipa123');
        cy.get(this.signInButton).click();
    }
    signInHeaderCheck(){
        cy.contains('h1','Sign in').should('be.visible');
    }
    disabledButtonCheck(){
        cy.get(this.signInButton).should('be.disabled');
    }
    goToSignInPage(){
        cy.contains('a', 'Sign in').click();
    }
    insertEmail(email){
        cy.get(this.emailField).clear().type(email);
    }
    insertPassword(password){
        cy.get(this.passwordField).clear().type(password);
    }
    clearEmail(){
        cy.get(this.emailField).clear();
    }
    clearPassword(){
        cy.get(this.passwordField).clear();
    }
    clickNeedAnAccount(){
        cy.contains('a', 'Need an account?').click();
    }
    clickSignInButton(){
        cy.get(this.signInButton).click();
    }
}
const signIn = new SignIn();
export { signIn }