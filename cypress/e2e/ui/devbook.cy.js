import { api } from "../../../src/services/api"

describe('devbook application', () => {
    before(() => {
        return api.delete('books?_cleanup=true').catch((err) => err)
    })
    
    beforeEach(() => {
        const books = [
            {"name": "Refactoring", "id": 1},
            {"name": "Domain-driven design", "id": 2},
            {"name": "1984", "id": 3}
        ]
        return books.map(item => api.post('books', item, {
            headers: {'Content-Type': 'application/json'}
        }))
    })

    afterEach(() => {
        return api.delete('books?_cleanup=true').catch((err) => err)
    })
    

    it('Visits the devbook', ()=> {
        cy.visit('localhost:3000/')
        cy.get('h2[data-test="heading"]').contains('DevBook!')
    })
    it('Shows a book list', () =>{
        cy.visit('localhost:3000/')
        cy.get('div[data-test="book-list"]').should('exist')
        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(3);
            const titles = [ ...books].map(x => x.querySelector('h5').innerHTML)
            expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design', '1984'])
        })
    })
})