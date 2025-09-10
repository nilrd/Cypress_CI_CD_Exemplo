const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js', // onde o Cypress procura os testes
    baseUrl: 'https://www.google.com',     // usado por cy.visit('/')
    supportFile: false
  }
})
