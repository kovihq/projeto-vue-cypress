describe('Testando Formulário', () => {
  it('Acessando rota de Formulário', () => {
    cy.visit('/form')
  })

  it('Botão Visível', () => {
    cy.get('button').should('be.visible')
  })

  it('Clicando no botão', () => {
    cy.get('button').click()
  })

  it('Mensagem de erro', () => {
    cy.get('h1')
      .contains('Preencha os campos')
      .should('have.class', 'validation-error')
  })

  it('Preenche campo nome', () => {
    cy.get('input[data-test="nome"]')
      .type('Patrick Monteiro')
  })

  it('Preenche campo email', () => {
    cy.get('input[data-test="email"]')
      .type('patrick@kovi.com')
  })

  it('Clica no Botão Cadastrar', () => {
    cy.get('button').click()
  })

  it('Mensagem de Sucesso', () => {
    cy.get('h1')
      .contains('Sucesso!')
  })

  
})