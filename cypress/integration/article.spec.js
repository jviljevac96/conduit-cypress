/// <reference types="cypress" />

import { articleForm } from '../page-objects/ArticleForm';
import { signIn } from '../page-objects/SignIn';
import { signUp } from '../page-objects/SignUp';
import { headerFooter } from '../page-objects/HeaderFooter';
import { profile } from '../page-objects/Profile';
import { article } from '../page-objects/Article';
import { home } from '../page-objects/Home';

describe('New Article form and article page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
      signIn.josipaSignIn();
    })

    it('Verify whether the user can publish an article only if all required fields are filled in', () => {
      headerFooter.clickNewArticle();
      articleForm.clickPublishArticleButton();
      articleForm.publishArticleButtonVisible();
      articleForm.insertTitle('Title');
      articleForm.clickPublishArticleButton();
      articleForm.publishArticleButtonVisible();
      articleForm.insertDescription('Description');
      articleForm.clickPublishArticleButton();
      articleForm.publishArticleButtonVisible();
      articleForm.insertTags('tag1');
      articleForm.clickPublishArticleButton();
      articleForm.publishArticleButtonVisible();
      articleForm.insertBody('Body');
      articleForm.clickPublishArticleButton();
      article.checkTitle('Title');
      article.checkArticleBody('Body');
    })

    it('Verify whether the description of an article can be edited properly', () => {
      headerFooter.clickUsername();
      article.openArticle('Title');
      article.clickEditArticleButton1();
      articleForm.insertDescription('Description Changed');
      articleForm.clickPublishArticleButton();
      headerFooter.clickUsername();
      profile.articleDescriptionCheck('Description Changed');
    })

    it('Verify whether the body of an article can be edited properly', () => {
      headerFooter.clickUsername();
      article.openArticle('Title');
      article.clickEditArticleButton1();
      articleForm.insertBody('Body Changed');
      articleForm.clickPublishArticleButton();
      article.checkArticleBody('Body Changed');
    })

    it('Verify whether the title of an article can be edited properly', () => {
      headerFooter.clickUsername();
      article.openArticle('Title');
      article.clickEditArticleButton1();
      articleForm.insertTitle('Title Changed');
      articleForm.clickPublishArticleButton();
      article.checkTitle('Title Changed');
    })
    
    it('Verify whether the user can post a comment on an article', () => {
      headerFooter.clickUsername();
      article.openArticle('Title Changed');
      article.insertComment('Comment test');
      article.clickPostCommentButton();
      article.postedCommentCheck('Comment test');
    })

    it('Verify wheter the user can delete its comment', () => {
      headerFooter.clickUsername();
      article.openArticle('Title Changed');
      article.deleteComment();
      article.deletedCommentCheck()
    })

    it('Verify whether the user can delete an article', () => {
      headerFooter.clickUsername();
      article.openArticle('Title Changed');
      article.clickDeleteArticleButton1();
      headerFooter.clickUsername();
      article.deletedArticleCheck('Title Changed');
    })
})

describe('Tests with different users signed in', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  })

  it('Create new article', () => {
    signIn.josipaSignIn();
    headerFooter.clickNewArticle();
    articleForm.insertTitle('Title');
    articleForm.insertDescription('Description');
    articleForm.insertTags('tag1');
    articleForm.insertBody('Body');
    articleForm.clickPublishArticleButton();
    article.checkTitle('Title');
    article.checkArticleBody('Body');
  })

  it('Verify whether the follow user buttons get updated properly - 1/2', () => {
    headerFooter.clickSignInHeader();
    signIn.insertEmail('josipa1@gmail.com');
    signIn.insertPassword('josipa123');
    signIn.clickSignInButton();
    home.clickGlobalFeed();
    article.openArticle('Title');
    article.clickFollowButton1();
    article.unfollowButtonsVisible();
  })

  it('Verify whether the favorite article button gets updated properly - 1/2', () => {
    headerFooter.clickSignInHeader();
    signIn.insertEmail('josipa1@gmail.com');
    signIn.insertPassword('josipa123');
    signIn.clickSignInButton();
    home.clickGlobalFeed();
    article.openArticle('Title');
    article.checkArticleBody('Body');
    article.clickFavoriteArticleButton1();
    article.unfavoriteButtonsVisible();
  })

  it('Verify whether the number in favorite button gets incremented properly', () => {
    headerFooter.clickSignInHeader();
    signIn.insertEmail('josipa2@gmail.com');
    signIn.insertPassword('josipa123');
    signIn.clickSignInButton();
    home.clickGlobalFeed();
    cy.contains('button', '1');
    home.clickFavoriteButton(0);
    cy.contains('button', '2');
  })

  it('Verify whether the follow user buttons get updated properly - 2/2', () => {
    headerFooter.clickSignInHeader();
    signIn.insertEmail('josipa1@gmail.com');
    signIn.insertPassword('josipa123');
    signIn.clickSignInButton();
    home.clickGlobalFeed();
    article.openArticle('Title');
    article.clickUnfollowButton2();
    article.followButtonsVisible();
  })

  it('Verify whether the favorite article button gets updated properly - 2/2', () => {
    headerFooter.clickSignInHeader();
    signIn.insertEmail('josipa1@gmail.com');
    signIn.insertPassword('josipa123');
    signIn.clickSignInButton();
    home.clickGlobalFeed();
    article.openArticle('Title');
    article.checkArticleBody('Body');
    article.clickUnfavoriteArticleButton2();
    article.favoriteButtonsVisible();
  })

  it('Verify whether the user is navigated to sign in page when the follow and favorite buttons are clicked', () => {
    home.clickGlobalFeed();
    article.openArticle('Title');
    article.clickFollowButton1();
    signIn.signInHeaderCheck();
    headerFooter.clickHomeHeader();
    home.clickGlobalFeed();
    article.openArticle('Title');
    article.clickFavoriteArticleButton1();
    signIn.signInHeaderCheck();
  })
})