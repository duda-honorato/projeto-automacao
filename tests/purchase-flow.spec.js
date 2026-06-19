const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');

test('Compra Completa com sucesso', async ({ page }) => {
  // Instanciar as páginas
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  // ===== PASSO 1: LOGIN =====
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // ===== PASSO 2: CATÁLOGO =====
  // Adicionar dois produtos ao carrinho
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.addProductToCart('Sauce Labs Bike Light');

  // ===== PASSO 3: CARRINHO =====
  await inventoryPage.goToCart();
  
  // Validar se os itens estão presentes (deve ter 2 itens)
  const itemCount = await cartPage.getCartItemsCount();
  expect(itemCount).toBe(2);
  
  await cartPage.proceedToCheckout();

  // ===== PASSO 4: CHECKOUT =====
  await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();

  // ===== PASSO 5: FINALIZAÇÃO =====
  await checkoutPage.finishOrder();
  
  // Validar a mensagem de sucesso
  const successMessage = await checkoutCompletePage.getSuccessMessage();
  expect(successMessage).toBe('Thank you for your order!');
});
