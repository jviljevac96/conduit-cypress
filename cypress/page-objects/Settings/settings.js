/// <reference types="cypress"/>

class Settings {
    urlField = '[placeholder="URL of profile picture"]';
    usernameField = '[formcontrolname=username]';
    bioField = '[formcontrolname=bio]';
    emailField = '[formcontrolname=email]';
    passwordField = '[formcontrolname=password]';
    updateSettingsButton = '[type=submit]';

    clickLogout(){
        cy.contains('button', 'Or click here to logout.').click();
    }
    clickUpdateSettings(){
        cy.get(this.updateSettingsButton).click();
        cy.wait(500);
    }
    insertUrl(url){
        cy.get(this.urlField).clear().type(url);
    }
    clearUrl(){
        cy.get(this.urlField).clear();
    }
    insertUsername(username){
        cy.get(this.usernameField).clear().type(username);
    }
    clearUsername(){
        cy.get(this.usernameField).clear();
    }
    insertBio(bio){
        cy.get(this.bioField).clear().type(bio);
    }
    clearBio(){
        cy.get(this.bioField).clear();
    }
    insertEmail(email){
        cy.get(this.emailField).clear().type(email);
    }
    clearEmail(){
        cy.get(this.emailField).clear();
    }
    insertPassword(password){
        cy.get(this.passwordField).clear().type(password);
    }
    clearPassword(){
        cy.get(this.passwordField).clear();
    }
    yourSettingsPageCheck(){
        cy.contains('h1','Your Settings').should('be.visible');
    }
}
const settings = new Settings();
export { settings }