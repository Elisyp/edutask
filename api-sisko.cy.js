/// <reference types = "cypress" />

describe ('Get Product Detail', () => {
    it('Verify the WEB INFO will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://sistemtoko.com/public/demo/website',
        }).as('webinfo')
        cy.get('@webinfo').its('status').should('equal', 200)
    });
    it('Verify LIST PRODUCT will displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://sistemtoko.com/public/demo/product',
        }).as('listproduct')
        cy.get('@listproduct').its('status').should('equal', 200)
    });
    it('Verify DETAIL PRODUCT will displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://sistemtoko.com/public/demo/single/25138',
        }).as('detailproduct')
        cy.get('@detailproduct').its('status').should('equal', 200)
    });

    it('Verify PRODUCT VARIAN will displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://sistemtoko.com/public/demo/varian/25138',
        }).as('varianproduct')
        cy.get('@varianproduct').its('status').should('equal', 200)
    });
    
    it('Verify CATEGORIES PRODUCT will displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://sistemtoko.com/public/demo/cat',
        }).as('catproduct')
        cy.get('@catproduct').its('status').should('equal', 200)
    })
    it('Verify KEYWORD PRODUCT will displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://sistemtoko.com/public/demo/categories',
        }).as('keyproduct')
        cy.get('@keyproduct').its('status').should('equal', 200)
    })    
})