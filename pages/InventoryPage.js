class InventoryPage {
  constructor(page) {
    this.page = page;
    
    // Mapeamento dos elementos
    this.cartIcon = 'data-testid=shopping-cart-badge';
    this.productName = (name) => `text=${name}`;
    this.addToCartButton = (name) => `data-testid=add-to-cart-${this.slugify(name)}`;
    this.removeButton = (name) => `data-testid=remove-${this.slugify(name)}`;
  }

  // Função auxiliar para transformar nome em slug
  slugify(name) {
    return name.toLowerCase().replace(/\s/g, '-');
  }

  // Adicionar um produto ao carrinho
  async addProductToCart(productName) {
    const selector = this.addToCartButton(productName);
    await this.page.locator(selector).click();
  }

  // Ir para o carrinho
  async goToCart() {
    await this.page.locator(this.cartIcon).click();
  }
}

module.exports = { InventoryPage };
