class CheckoutPage {
  constructor(page) {
    this.page = page;
    
    // Mapeamento dos elementos
    this.firstNameInput = 'data-testid=firstName';
    this.lastNameInput = 'data-testid=lastName';
    this.postalCodeInput = 'data-testid=postalCode';
    this.continueButton = 'data-testid=continue';
    this.finishButton = 'data-testid=finish';
  }

  // Preencher o formulário de checkout
  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
  }

  // Continuar para a próxima etapa
  async continueCheckout() {
    await this.page.locator(this.continueButton).click();
  }

  // Finalizar o pedido
  async finishOrder() {
    await this.page.locator(this.finishButton).click();
  }
}

module.exports = { CheckoutPage };
