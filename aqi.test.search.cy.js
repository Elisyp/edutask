/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit('https://aqi.co.id/')
    })
    
    it("Should type into searchbox and submit", () => {
        cy.get('#search-dropdown').click()
        cy.get('#search-dropdown').type('kontak kami{enter}')

        cy.get('h1').should('contain.text', 'Search Result')
    });
})