/// <reference types="cypress"/>

class HeaderFooter {
    headerConduit = '[class="navbar-brand"]';
    footerConduit = '[class="logo-font"]';

    clickConduitHeader(){
        cy.get(this.headerConduit).click();
    }
    clickConduitFooter(){
        cy.get(this.footerConduit).click();
    }
    clickHomeHeader(){
        cy.contains('a', 'Home').click();
    }
    clickSignInHeader(){
        cy.contains('a', 'Sign in').click();
    }
    clickSignUpHeader(){
        cy.contains('a', 'Sign up').click();
    }
    clickThinkster(){
        cy.contains('a', 'Thinkster').click();
    }
    clickNewArticle(){
        cy.contains('a', 'New Article').click();
    }
    clickSettings(){
        cy.contains('a', 'Settings').click();
    }
    clickUsername(){
        cy.get(':nth-child(4) > .nav-link').click();
    }
}
const headerFooter = new HeaderFooter();
export { headerFooter }