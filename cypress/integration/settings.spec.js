/// <reference types="cypress" />

import { settings } from '../page-objects/Settings';
import { signIn } from '../page-objects/SignIn';
import { signUp } from '../page-objects/SignUp';
import { headerFooter } from '../page-objects/HeaderFooter';
import { profile } from '../page-objects/Profile';

describe('Settings page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
      signIn.josipaSignIn();
      headerFooter.clickSettings();
    })

    it('Verify whether the logout button works properly', () => {
        signUp.loggedInUser('Josipa');
        settings.clickLogout();
        signUp.loggedOutUser('Josipa');
    })

    it('Verify whether the password can be changed', () => {
        settings.insertPassword('changedPassword');
        settings.clickUpdateSettings();
        headerFooter.clickSettings();
        settings.clickLogout();
        headerFooter.clickSignInHeader();
        signIn.insertEmail('josipa@gmail.com');
        signIn.insertPassword('changedPassword');
        signIn.clickSignInButton();
        signUp.loggedInUser('Josipa');
    })

    it('Verify whether the user is unable to change username to an existing one', () => {
        settings.insertUsername('Matea');
        settings.clickUpdateSettings();
        settings.yourSettingsPageCheck();
    })
    
    it('Verify whether the user can change the username to the one that does not exist yet', () => {
        settings.insertUsername('Ana');
        settings.clickUpdateSettings();
        profile.profilePageCheck('Ana');
        signUp.loggedInUser('Ana');
    })

    it('Verify whether the user cannot change the email to the invalid format', () => {
        settings.insertEmail('email');
        settings.clickUpdateSettings();
        settings.yourSettingsPageCheck();
        settings.insertEmail('email@');
        settings.clickUpdateSettings();
        settings.yourSettingsPageCheck();
    })

    it('Verify whether the user can update his bio', () => {
        settings.insertBio('Short bio about me is here');
        settings.clickUpdateSettings();
        profile.profilePageCheck('Ana');
        headerFooter.clickSettings();
        cy.get('[formcontrolname=bio]').invoke('val').then((bio) => {
            expect(bio).to.eq('Short bio about me is here');
        })
    })
    
    it('Verify whether the user can change the email and login with that new email', () => {
        settings.insertEmail('changedEmail@gmail.com');
        settings.clickUpdateSettings();
        profile.profilePageCheck('Ana');
        headerFooter.clickSettings();
        cy.get('[formcontrolname=email]').invoke('val').then((changedEmail) => {
            expect(changedEmail).to.eq('changedEmail@gmail.com');
        })
        headerFooter.clickSettings();
        settings.clickLogout();
        headerFooter.clickSignInHeader();
        signIn.insertEmail('changedEmail@gmail.com');
        signIn.insertPassword('josipa123');
        signIn.clickSignInButton();
        signUp.loggedInUser('Ana');
    })
})