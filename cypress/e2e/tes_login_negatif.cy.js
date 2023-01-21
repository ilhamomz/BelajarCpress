describe('template spec', () => {
  it('passes', () => {
    cy.visit('the-internet.herokuapp.com/login')
    cy.get('#username')
    cy.get('#password')
    cy.get('.fa').click()
  })
})