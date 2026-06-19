class LoginPage {
  constructor(page) {
    this.page = page;
    
    // Mapeamento dos elementos (selectors)
    this.usernameInput = 'data-testid=username';
    this.passwordInput = 'data-testid=password';
    this.loginButton = 'data-testid=login-button';
  }

  // Navegar para a página de login
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Realizar o login
  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}

module.exports = { LoginPage };
