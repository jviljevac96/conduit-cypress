/// <reference types="cypress"/>

class SignUp {
    usernameField = '[formcontrolname=username]';
    emailField = '[formcontrolname=email]';
    passwordField = '[formcontrolname=password]';
    signUpButton = '[type=submit]';
    navBar = '[class="navbar navbar-light"]';

    insertUsername(username){
        cy.get(this.usernameField).clear().type(username);
    }
    clickSignUpHeader(){
        cy.contains('a', 'Sign up').click();
    }
    insertEmail(email){
        cy.get(this.emailField).clear().type(email);
    }
    insertPassword(password){
        cy.get(this.passwordField).clear().type(password);
    }
    clickSignUpButton(){
        cy.get(this.signUpButton).click();
    }
    loggedInUser(user){
        cy.contains(this.navBar, user).should('exist');
    }
    clickHaveAnAccount(){
        cy.contains('a', 'Have an account?').click();
    }
    signUpHeaderCheck(){
        cy.contains('h1','Sign up').should('be.visible');
    }
    disabledButtonCheck(){
        cy.get(this.signUpButton).should('be.disabled');
    }
    enabledButtonCheck(){
        cy.get(this.signUpButton).should('be.enabled');
    }
    clearEmail(){
        cy.get(this.emailField).clear();
    }
    clearPassword(){
        cy.get(this.passwordField).clear();
    }
    loggedOutUser(user){
        cy.contains(this.navBar, user).should('not.exist');
    }
}
const signUp = new SignUp();
export { signUp }