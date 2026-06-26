// pages/CheckoutPage.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    
    this.firstNameInput = 'data-testid=firstName';
    this.lastNameInput = 'data-testid=lastName';
    this.postalCodeInput = 'data-testid=postalCode';
    this.continueButton = 'data-testid=continue';
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
  }

  async continueCheckout() {
    await this.page.locator(this.continueButton).click();
    // Aguardar página Overview carregar
    await this.page.waitForURL('**/checkout-step-two.html');
  }

}

module.exports = { CheckoutPage };
