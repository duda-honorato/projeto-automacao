class CartPage {
  constructor(page) {
    this.page = page;
    
    // Mapeamento dos elementos
    this.cartItems = 'data-testid=inventory-item';
    this.checkoutButton = 'data-testid=checkout';
  }

  // Verificar se os itens estão no carrinho
  async getCartItemsCount() {
    return await this.page.locator(this.cartItems).count();
  }

  // Prosseguir para o checkout
  async proceedToCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }
}

module.exports = { CartPage };
