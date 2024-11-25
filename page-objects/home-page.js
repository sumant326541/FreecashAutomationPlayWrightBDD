const { expect } = require('@playwright/test');
const config = require('../config/config');

class HomePage {
  constructor() {
    this.userAvtar = `[alt='Avatar']`
  }
  

  async assertUserAvtar() {
    await page.waitForSelector(this.userAvtar)
  }

}

module.exports = { HomePage }
