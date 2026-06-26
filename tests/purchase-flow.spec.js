// tests/purchase-flow.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OverviewPage } = require('../pages/OverviewPage'); // NOVA
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');

test('Compra Completa com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page); // NOVA
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.addProductToCart('Sauce Labs Bike Light');
  
  await inventoryPage.goToCart();
  
  const itemCount = await cartPage.getCartItemsCount();
  expect(itemCount).toBe(2);
  
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();

  // NOVA ETAPA: Overview
  await overviewPage.clickFinish();
  
  const successMessage = await checkoutCompletePage.getSuccessMessage();
  expect(successMessage).toBe('Thank you for your order!');
});
