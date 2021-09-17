/// <reference types="cypress" />

import { articleForm } from '../page-objects/ArticleForm';
import { signIn } from '../page-objects/SignIn';
import { signUp } from '../page-objects/SignUp';
import { headerFooter } from '../page-objects/HeaderFooter';
import { profile } from '../page-objects/Profile';
import { article } from '../page-objects/Article';
import { home } from '../page-objects/Home';
import { settings } from '../page-objects/Settings';

describe('New Article form and article page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    })

    it('Verify whether the "Edit Profile Settings" button navigates the user to "Your Settings page"', () => {
      headerFooter.clickSignInHeader();
      signIn.insertEmail('josipa1@gmail.com');
      signIn.insertPassword('josipa123');
      signIn.clickSignInButton();
      headerFooter.clickUsername();
      profile.clickEditProfileSettings();
      settings.yourSettingsPageCheck();
    })

    it('Create two articles and verify whether those articles are visible on the profile page', () => {
      headerFooter.clickSignInHeader();
      signIn.insertEmail('josipa1@gmail.com');
      signIn.insertPassword('josipa123');
      signIn.clickSignInButton();
      headerFooter.clickNewArticle();
      articleForm.publishArticleButtonVisible();
      articleForm.insertTitle('Article created by user Josipa1');
      articleForm.insertDescription('Description written by user Josipa1');
      articleForm.insertBody('This is an article that was created by user Josipa1');
      articleForm.clickPublishArticleButton();
      article.checkTitle('Article created by user Josipa1');
      article.checkArticleBody('This is an article that was created by user Josipa1');

      headerFooter.clickNewArticle();
      articleForm.publishArticleButtonVisible();
      articleForm.insertTitle('Another article created by user Josipa1');
      articleForm.insertDescription('Another description written by user Josipa1');
      articleForm.insertBody('This is an article that was created by user Josipa1, slightly different, but the same');
      articleForm.clickPublishArticleButton();
      article.checkTitle('Another article created by user Josipa1');
      article.checkArticleBody('This is an article that was created by user Josipa1, slightly different, but the same');

      headerFooter.clickUsername();
      profile.myPostsActive();
      profile.articleTitleCheck('Article created by user Josipa1');
      profile.articleDescriptionCheck('Description written by user Josipa1');
      profile.articleTitleCheck('Another article created by user Josipa1');
      profile.articleDescriptionCheck('Another description written by user Josipa1');
    })

    it('Verify whether the correct Favorited Posts are displayed on the users profile', () => {
      headerFooter.clickSignInHeader();
      signIn.insertEmail('josipa2@gmail.com');
      signIn.insertPassword('josipa123');
      signIn.clickSignInButton();
      headerFooter.clickNewArticle();
      articleForm.publishArticleButtonVisible();
      articleForm.insertTitle('Favorite article');
      articleForm.insertDescription('Test atricle to show under favorite posts');
      articleForm.insertBody('Test atricle to show under favorite posts');
      articleForm.clickPublishArticleButton();
      article.checkTitle('Favorite article');
      article.checkArticleBody('Test atricle to show under favorite posts');

      headerFooter.clickNewArticle();
      articleForm.publishArticleButtonVisible();
      articleForm.insertTitle('Another favorite article');
      articleForm.insertDescription('One more test atricle to show under favorite posts');
      articleForm.insertBody('One more test atricle to show under favorite posts');
      articleForm.clickPublishArticleButton();
      article.checkTitle('Another favorite article');
      article.checkArticleBody('One more test atricle to show under favorite posts');
      headerFooter.clickSettings();
      settings.clickLogout();

      headerFooter.clickSignInHeader();
      signIn.insertEmail('josipa@gmail.com');
      signIn.insertPassword('josipa123');
      signIn.clickSignInButton();
      home.clickGlobalFeed()
      home.clickFavoriteButton(0);
      home.clickFavoriteButton(0);

      headerFooter.clickUsername();
      profile.clickFavoritedPosts();
      profile.favoritePostsActive();
      profile.articleTitleCheck('Favorite article');
      profile.articleDescriptionCheck('Test atricle to show under favorite posts');
      profile.articleTitleCheck('Another favorite article');
      profile.articleDescriptionCheck('One more test atricle to show under favorite posts');
    })

    it('Verify whether the user can follow/unfollow someone and if articles by the followed user appear in "Your Feed" section', () => {
      headerFooter.clickSignInHeader();
      signIn.insertEmail('josipa@gmail.com');
      signIn.insertPassword('josipa123');
      signIn.clickSignInButton();
      home.authorNotVisibleCheck('Josipa1');
      home.clickGlobalFeed();
      home.clickOnAuthor('Josipa1');
      profile.followUser();
      headerFooter.clickHomeHeader();
      home.authorVisibleCheck('Josipa1');

      home.clickOnAuthor('Josipa1');
      profile.unfollowUser();
      headerFooter.clickHomeHeader();
      home.authorNotVisibleCheck('Josipa1');
    })
})