"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

const client = webdriverio.remote(options);

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible('.register-page__username-input')
    .setValue('.register-page__username-input', Math.random().toString(36).substring(7))
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__email-input', Math.random().toString(36).substring(7) + "@gmail.com")
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__password-input', 'Brihana1.com')
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__confirm-password-input', 'Brihana1.com')
    .catch(function(err){
        console.log(err)
    })
    .addValue('.register-page__specialties-list', 'Physician')
    .catch(function(err){
        console.log(err) 
    })
    .addValue('.register-page__specialties-other-list', 'Cardiology')
    .catch(function(err){
        console.log(err) 
    })
    .click('.register-page__terms-checkbox')
    .catch(function(err){
        console.log(err) 
    })
    .click('.register-page__submit-button')
    .catch(function(err){
        console.log(err) 
    })
    .selectByVisibleText('')

    .catch(function(err){
        console.log(err)
    })
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .end();
