// tests/purchase-flow.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OverviewPage } = require('../pages/OverviewPage'); // ✅ NOVO
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');

test('Compra Completa com sucesso', async ({ page }) => {
  // Instanciar as páginas
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page); // ✅ NOVO
  const checkoutCompletePage = new CheckoutCompletePage(page);

  // ===== PASSO 1: LOGIN =====
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Aguardar inventário carregar
  await page.waitForURL('**/inventory.html');

  // ===== PASSO 2: CATÁLOGO =====
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.addProductToCart('Sauce Labs Bike Light');

  // ===== PASSO 3: CARRINHO =====
  await inventoryPage.goToCart();
  await page.waitForURL('**/cart.html');
  
  const itemCount = await cartPage.getCartItemsCount();
  expect(itemCount).toBe(2);
  
  await cartPage.proceedToCheckout();
  await page.waitForURL('**/checkout-step-one.html');

  // ===== PASSO 4: CHECKOUT =====
  await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();
  await page.waitForURL('**/checkout-step-two.html'); // ✅ Overview

  // ===== PASSO 5: OVERVIEW (NOVO) =====
  // Validar resumo do pedido (opcional)
  const overviewItems = await overviewPage.getCartItemsCount();
  expect(overviewItems).toBe(2);
  
  await overviewPage.clickFinish();
  await page.waitForURL('**/checkout-complete.html');

  // ===== PASSO 6: FINALIZAÇÃO =====
  const successMessage = await checkoutCompletePage.getSuccessMessage();
  expect(successMessage).toBe('Thank you for your order!');
  
  // Validação extra - mensagem visível na página
  await expect(page.locator('data-testid=complete-header')).toBeVisible();
});
