/// <reference types="cypress" />

import {signUp} from '../page-objects/SignUp';
import { headerFooter } from '../page-objects/HeaderFooter';

describe('Multiple users register', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
        headerFooter.clickSignUpHeader();
    })

    it('Register Josipa1', () => {
        signUp.insertUsername('Josipa1');
        signUp.insertEmail('josipa1@gmail.com');
        signUp.insertPassword('josipa123');
        signUp.clickSignUpButton();
        signUp.loggedInUser('Josipa1');
    })

    it('Register Josipa2', () => {
        signUp.insertUsername('Josipa2');
        signUp.insertEmail('josipa2@gmail.com');
        signUp.insertPassword('josipa123');
        signUp.clickSignUpButton();
        signUp.loggedInUser('Josipa2');
    })

    it('Register Josipa3', () => {
        signUp.insertUsername('Josipa3');
        signUp.insertEmail('josipa3@gmail.com');
        signUp.insertPassword('josipa123');
        signUp.clickSignUpButton();
        signUp.loggedInUser('Josipa3');
    })

    it('Register Matea', () => {
        signUp.insertUsername('Matea');
        signUp.insertEmail('matea@gmail.com');
        signUp.insertPassword('matea123');
        signUp.clickSignUpButton();
        signUp.loggedInUser('Matea');
    })
})