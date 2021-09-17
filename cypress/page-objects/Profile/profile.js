/// <reference types="cypress"/>

class Profile {
    titleField = '[formcontrolname=title]';
    whiteButton = '[class="btn btn-sm btn-outline-primary"]';
    greenButton = '[class="btn btn-sm btn-primary"]';
    posts = '[class="nav-link active"]';

    clickEditProfileSettings(){
        cy.contains('a', 'Edit Profile Settings').click();
    }
    clickMyPosts(){
        cy.contains('a', 'My Posts').click();
    }
    clickFavoritedPosts(){
        cy.contains('a', 'Favorited Posts').click();
    }
    profilePageCheck(user){
        cy.contains('h4', user).should('be.visible');
    }
    articleDescriptionCheck(desc){
        cy.contains('p', desc).should('be.visible');
    }
    articleTitleCheck(title){
        cy.contains('h1', title).should('be.visible');
    }
    myPostsActive(){
        cy.contains(this.posts, 'My Posts').should('be.visible');
    }
    favoritePostsActive(){
        cy.contains(this.posts,'Favorited Posts').should('be.visible');
    }
    followUser(){
        cy.contains('button', 'Follow').click();
        cy.contains('button', 'Unfollow').should('be.visible');
    }
    unfollowUser(){
        cy.contains('button', 'Unfollow').click();
        cy.contains('button', 'Follow').should('be.visible');
    }
}
const profile = new Profile();
export { profile }