/// <reference types="cypress" />

import {signIn} from '../page-objects/SignIn';
import { signUp } from '../page-objects/SignUp';
import { headerFooter } from '../page-objects/HeaderFooter';
import { home } from '../page-objects/Home';

describe('Sign in page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })
  
    it('Sign in with incorrect credentials', () => {
      signIn.goToSignInPage();
      signIn.insertEmail('wrong@gmail.com');
      signIn.insertPassword('wrongpass');
      signIn.signInHeaderCheck();

      signIn.insertEmail('josipa@gmail.com');
      signIn.insertPassword('wrong123');
      signIn.signInHeaderCheck();

      signIn.insertEmail('wrong@gmail.com');
      signIn.insertPassword('josipa123');
      signIn.signInHeaderCheck();
    })

    it('Sign in with some empty fields should not be possible', () => {
      signIn.goToSignInPage();
      signIn.insertEmail('email@gmail.com');
      signIn.clearPassword();
      signIn.disabledButtonCheck();

      signIn.clearEmail();
      signIn.insertPassword('password123');
      signIn.disabledButtonCheck();
    })

    it('Verify whether the navigation works properly from Sign in page', () => {
      signIn.goToSignInPage();
      signIn.clickNeedAnAccount();
      signUp.signUpHeaderCheck();

      signIn.goToSignInPage();
      signIn.signInHeaderCheck();
      headerFooter.clickHomeHeader();
      home.homePageCheck();

      signIn.goToSignInPage();
      signIn.signInHeaderCheck();
      headerFooter.clickSignUpHeader();
      signUp.signUpHeaderCheck();

      signIn.goToSignInPage();
      signIn.signInHeaderCheck();
      headerFooter.clickConduitHeader();
      home.homePageCheck();

      signIn.goToSignInPage();
      signIn.signInHeaderCheck();
      headerFooter.clickConduitFooter();
      home.homePageCheck();

      signIn.goToSignInPage();
      signIn.signInHeaderCheck();
      headerFooter.clickThinkster();
      cy.title().should('eq', 'Thinkster')
      cy.go('back');
      signIn.signInHeaderCheck(); 
    })
  })