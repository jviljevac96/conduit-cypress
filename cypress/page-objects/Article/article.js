/// <reference types="cypress"/>

class Article {
    commentField = '[placeholder="Write a comment..."]';
    authorLink = '[class=author]';
    postedComment = '.card-text';
    deleteCommentButton = '.mod-options > .ion-trash-a';
    unfollowBtn = '[class="btn btn-sm action-btn btn-secondary"]';
    followBtn = '[class="btn btn-sm action-btn btn-outline-secondary"]';
    unfavoriteBtn = '[class="btn btn-sm btn-primary"]';
    favoriteBtn = '[class="btn btn-sm btn-outline-primary"]';

    deleteComment(){
        cy.get(this.deleteCommentButton).click();
    }
    deletedArticleCheck(article){
        cy.contains('h1', article).should('not.exist');
    }
    postedCommentCheck(comment){
        cy.contains(this.postedComment, comment);
    }
    deletedCommentCheck(comment){
        cy.contains(this.postedComment, comment).should('not.exist');
    }
    clickEditArticleButton1(){
        cy.contains('a', 'Edit Article').eq(0).click();
    }
    clickEditArticleButton2(){
        cy.contains('a', 'Edit Article').eq(1).click();
    }
    clickDeleteArticleButton1(){
        cy.contains('button', 'Delete Article').eq(0).click();
    }
    clickDeleteArticleButton2(){
        cy.contains('button', 'Delete Article').eq(1).click();
    }
    clickPostCommentButton(){
        cy.contains('button', 'Post Comment').click();
        cy.wait(800);
    }
    insertComment(comment){
        cy.get(this.commentField).clear().type(comment);
    }
    clearComment(){
        cy.get(this.commentField).clear();
    }
    clickOnAuthor1(){
        cy.get(this.authorLink).eq(0).click();
    }
    clickOnAuthor2(){
        cy.get(this.authorLink).eq(1).click();
    }
    clickFollowButton1(){
        cy.get(this.followBtn).eq(0).click();
    }
    clickFollowButton2(){
        cy.get(this.followBtn).eq(1).click();
    }
    clickUnfollowButton1(){
        cy.get(this.unfollowBtn).eq(0).click();
    }
    clickUnfollowButton2(){
        cy.get(this.unfollowBtn).eq(1).click();
    }
    clickFavoriteArticleButton1(){
        cy.get(this.favoriteBtn).eq(0).click();
        cy.wait(800);
    }
    clickFavoriteArticleButton2(){
        cy.get(this.favoriteBtn).eq(1).click();
        cy.wait(800);
    }
    clickUnfavoriteArticleButton1(){
        cy.get(this.unfavoriteBtn).eq(0).click();
        cy.wait(800);
    }
    clickUnfavoriteArticleButton2(){
        cy.get(this.unfavoriteBtn).eq(1).click();
        cy.wait(800);
    }
    followButtonsVisible(){
        cy.get(this.followBtn).eq(0).should('be.visible');
        cy.get(this.followBtn).eq(1).should('be.visible');
    }
    unfollowButtonsVisible(){
        cy.get(this.unfollowBtn).eq(0).should('be.visible');
        cy.get(this.unfollowBtn).eq(1).should('be.visible');
    }
    favoriteButtonsVisible(){
        cy.get(this.favoriteBtn).eq(0).should('be.visible');
        cy.get(this.favoriteBtn).eq(1).should('be.visible');
    }
    unfavoriteButtonsVisible(){
        cy.get(this.unfavoriteBtn).eq(0).should('be.visible');
        cy.get(this.unfavoriteBtn).eq(1).should('be.visible');
    }
    checkTitle(title){
        cy.contains('h1', title).should('be.visible');
    }
    checkArticleBody(body){
        cy.contains('p', body).should('be.visible');
    }
    openArticle(article){
        cy.contains('h1', article, {timeout:5000}).click();
    }
}
const article = new Article();
export { article }