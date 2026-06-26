# 🧪 Playwright - Testes Automatizados Sauce Demo

Projeto de automação de testes para o site [Sauce Demo](https://www.saucedemo.com/) usando Playwright.

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- npm (v8 ou superior)

## ▶️ Execução
- OPÇÃO 1: Interface Visual: npx playwright test --ui

- OPÇÃO 2: Modo Headless: npx playwright test

- OPÇÃO 3: Executar com navegador visível: npx playwright test --headed

- OPÇÃO 4: Executar apenas um teste específico: npx playwright test purchase-flow.spec.js

- OPÇÃO 5: Executar em modo debug: npx playwright test --debug

## 🚀 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/playwright-saucedemo.git

# Abra o terminal do VS Code (Ctrl + `)
node --version
# Deve mostrar algo como: v18.x.x ou v20.x.x

npm --version
# Deve mostrar algo como: 9.x.x ou 10.x.x

# Inicializa o projeto Node.js
npm init -y
# Isso cria o arquivo package.json

# Instalar o Playwright
npm init playwright@latest

# Durante a instalação, responda:
# ✔ Do you want to use TypeScript or JavaScript? → JavaScript
# ✔ Where to put your end-to-end tests? → tests
# ✔ Add a GitHub Actions workflow? → No
# ✔ Install Playwright browsers? → Yes
