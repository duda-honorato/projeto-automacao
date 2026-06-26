class OverviewPage {
  constructor(page) {
    this.page = page;
    
    // Elementos da página de overview
    this.finishButton = 'data-testid=finish';
    this.cancelButton = 'data-testid=cancel';
    this.totalLabel = 'data-testid=total-label';
    this.cartItems = 'data-testid=inventory-item';
    this.subtotalLabel = 'data-testid=subtotal-label';
  }

  // Clicar no botão Finish para finalizar compra
  async clickFinish() {
    await this.page.locator(this.finishButton).click();
    // Aguardar página de sucesso carregar
    await this.page.waitForURL('**/checkout-complete.html');
  }

  // Obter valor total do pedido (opcional - para validação)
  async getTotalAmount() {
    return await this.page.locator(this.totalLabel).textContent();
  }

  // Verificar quantidade de itens no resumo
  async getCartItemsCount() {
    return await this.page.locator(this.cartItems).count();
  }
}

module.exports = { OverviewPage };
