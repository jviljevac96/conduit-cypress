/// <reference types="cypress"/>

class ArticleForm {
    titleField = '[formcontrolname=title]';
    descriptionField = '[formcontrolname=description]';
    bodyField = '[formcontrolname=body]';
    tagsField = '[placeholder="Enter tags"]';

    clickPublishArticleButton(){
        cy.contains('button', 'Publish Article').click();
        cy.wait(800);
    }
    publishArticleButtonVisible(){
        cy.contains('button', 'Publish Article').should('be.visible');
    }
    insertTitle(title){
        cy.get(this.titleField).should('be.enabled');
        cy.get(this.titleField).clear().type(title);
    }
    clearTitle(){
        cy.get(this.titleField).clear();
    }
    insertDescription(description){
        cy.get(this.descriptionField).should('be.enabled');
        cy.get(this.descriptionField).clear().type(description);
    }
    clearDescription(){
        cy.get(this.descriptionField).clear();
    }
    insertBody(body){
        cy.get(this.bodyField).should('be.enabled');
        cy.get(this.bodyField).clear().type(body);
    }
    clearBody(){
        cy.get(this.bodyField).clear();
    }
    insertTags(tags){
        cy.get(this.tagsField).should('be.enabled');
        cy.get(this.tagsField).clear().type(tags);
    }
    clearTags(){
        cy.get(this.tagsField).clear();
    }
}
const articleForm = new ArticleForm();
export { articleForm }