const { expect } = require('@playwright/test');
const config = require('../config/config');

class LoginPage {
  constructor() {

    this.signInTab = `//div[contains(text(),'Sign In')]`
    this.usernameInput = `(//*[@id='email'])[2]`
    this.passwordInput = `input#password`
    this.signInButton = `//button[contains(text(),'Sign In')]`
    this.checkbox = `(//*[@class='chakra-checkbox__input'])[3]`
   
  }
  async navigateToLoginScreen() {
    await page.goto(config.baseURL)
  }

  async login(username, password) {
    await page.click(this.signInTab)
    await page.fill(this.usernameInput, username)
    await page.fill(this.passwordInput, password)
    await page.click(this.signInButton)
    await page.click(this.checkbox)
    await page.click(this.signInButton)
  }
}

module.exports = { LoginPage }
