/// <reference types="cypress" />

import { signUp } from '../page-objects/SignUp';
import { headerFooter } from '../page-objects/HeaderFooter';
import { home } from '../page-objects/Home';
import { signIn } from '../page-objects/SignIn';

describe('Sign up page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
      headerFooter.clickSignUpHeader();
    })

    it('Verify whether the navigation works properly from Sign up page', () => {
        headerFooter.clickSignUpHeader();
        signUp.signUpHeaderCheck();
        signUp.clickHaveAnAccount();
        signIn.signInHeaderCheck();

        headerFooter.clickSignUpHeader();
        signUp.signUpHeaderCheck();
        headerFooter.clickHomeHeader();
        home.homePageCheck();
  
        headerFooter.clickSignUpHeader();
        signUp.signUpHeaderCheck();
        headerFooter.clickSignInHeader();
        signIn.signInHeaderCheck();
  
        headerFooter.clickSignUpHeader();
        signUp.signUpHeaderCheck();
        headerFooter.clickConduitHeader();
        home.homePageCheck();
  
        headerFooter.clickSignUpHeader();
        signUp.signUpHeaderCheck();
        headerFooter.clickConduitFooter();
        home.homePageCheck();
  
        headerFooter.clickSignUpHeader();
        signUp.signUpHeaderCheck();
        headerFooter.clickThinkster();
        cy.title().should('eq', 'Thinkster')
        cy.go('back');
        signUp.signUpHeaderCheck();
    })

    it('Verify wheter new user can be registered', () => {
      signUp.insertUsername('Josipa');
      signUp.insertEmail('josipa@gmail.com');
      signUp.insertPassword('josipa123');
      signUp.clickSignUpButton();
      signUp.loggedInUser('Josipa');
    })

    it("Verify whether the user with the existing username can't be added", () => {
      signUp.insertUsername('Josipa');
      signUp.insertEmail('josipa123@gmail.com');
      signUp.insertPassword('josipa123');
      signUp.clickSignUpButton();
      signUp.signUpHeaderCheck();
    })

    it("Verify whether the user with the short password can't be created", () => {
      signUp.insertUsername('NewUser');
      signUp.insertEmail('newUser@gmail.com');
      signUp.insertPassword('12345');
      signUp.clickSignUpButton();
      signUp.signUpHeaderCheck();
    })

    it("Verify whether the user with the email that is already in use can't be added", () => {
      signUp.insertUsername('NewUser');
      signUp.insertEmail('josipa@gmail.com');
      signUp.insertPassword('123456');
      signUp.clickSignUpButton();
      signUp.signUpHeaderCheck();
    })

    it("Verify whether the user with the email and the username that are already in use can't be added", () => {
      signUp.insertUsername('Josipa');
      signUp.insertEmail('josipa@gmail.com');
      signUp.insertPassword('123456');
      signUp.clickSignUpButton();
      signUp.signUpHeaderCheck();
    })

    it('Verify whether Sign up button is disabled as long as not all fields are filled in', () => {
      signUp.insertUsername('Username');
      signUp.disabledButtonCheck();
      signUp.insertEmail('email@email.com');
      signUp.disabledButtonCheck();
      signUp.insertPassword('password123');
      signUp.enabledButtonCheck();
    })
  })