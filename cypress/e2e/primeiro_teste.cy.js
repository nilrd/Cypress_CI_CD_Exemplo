// cypress/e2e/primeiro_teste.cy.js
describe('Meu primeiro conjunto de testes', () => {

  it('Acessa o Google e verifica o título', () => {
    // cy.visit('/') usa baseUrl do cypress.config.js
    cy.visit('/')
    cy.title().should('include', 'Google')
  })

  it('Exemplo usando fixture (dados) e variáveis - comentado (para app real)', () => {
    // carrega cypress/fixtures/credentials.json
    cy.fixture('credentials').then((creds) => {
      const usuario = creds.user
      const senha = creds.pass

      // Comentei os comandos abaixo: descomente e ajuste os selectors quando tiver um app de teste
      /*
      cy.visit('/login') // isso faz baseUrl + '/login'
      cy.get('[data-cy=username]').type(usuario)
      cy.get('[data-cy=password]').type(senha, { log: false })
      cy.get('[data-cy=login-button]').click()
      cy.contains('Bem-vindo').should('be.visible')
      */
    })
  })

})
