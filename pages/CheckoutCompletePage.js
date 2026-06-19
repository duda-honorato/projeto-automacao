class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    
    // Mapeamento dos elementos
    this.successMessage = 'data-testid=complete-header';
  }

  // Obter a mensagem de sucesso
  async getSuccessMessage() {
    return await this.page.locator(this.successMessage).textContent();
  }
}

module.exports = { CheckoutCompletePage };
