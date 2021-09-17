/// <reference types="cypress"/>

class Home {
    authorLink = '[class="author"]';
    heartButton = '[class="btn btn-sm btn-outline-primary"]';
    articlePreview = '[class="app-article-preview"]';

    homePageCheck(){
        cy.contains('p', 'A place to share your Angular knowledge').should('be.visible');
        cy.contains('a', 'Your Feed').should('be.visible');
        cy.contains('a', 'Global Feed').should('be.visible');
        cy.contains('p', 'Popular Tags').should('be.visible');
    }
    clickYourFeed(){
        cy.contains('a', 'Your Feed').click();
    }
    clickGlobalFeed(){
        cy.contains('a', 'Global Feed').click();
        cy.contains(this.articlePreview, 'Loading articles...', {timeout:5000}).should('not.be.visible');
    }
    clickFavoriteButton(n){
        cy.get(this.heartButton).eq(n).click();
        cy.wait(500);
    }
    clickOnAuthor(author){
        cy.contains(this.author, author).click();
    }
    authorNotVisibleCheck(author){
        cy.contains(this.authorLink, author).should('not.exist');
    }
    authorVisibleCheck(author){
        cy.contains(this.authorLink, author).should('not.exist');
    }
}
const home = new Home();
export { home }