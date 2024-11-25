const { Given, When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')
const { HomePage } = require('../page-objects/home-page')
const { expect } = require('chai');

const loginPage = new LoginPage()
const homePage = new HomePage()

Given('I am on login page', async () => {
  await loginPage.navigateToLoginScreen()
})


Then('I login to application with {string} and {string}', async (username, password) => {
  await loginPage.login(username, password)
})

Then('I should see HomePage', async () => {
  await homePage.assertNoOpenBetsMessage()
})
