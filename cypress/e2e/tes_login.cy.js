describe('template spec', () => {
  it('login positif', () => {
    cy.visit('the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword')
    cy.get('.fa').click()

    
  })
})