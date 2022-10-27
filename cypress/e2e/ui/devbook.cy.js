describe('devbook application', () => {
    it('Visits the devbook', ()=> {
        cy.visit('localhost:3000/')
        cy.get('h2[data-test="heading"]').contains('DevBook!')
    })
})