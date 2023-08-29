describe("Automation API", () => {
    it("Succesfully Validate HEADERS - List Product content-type", () => {
        cy.request('https://sistemtoko.com/public/demo/product').as('valprod')
        cy.get('@valprod').its('headers').its('content-type')
        .should('include', 'application/json')
    });
    it("Succesfully Validate STATUS Code - Categories Product", () => {
        cy.request('https://sistemtoko.com/public/demo/cat').as('cat')
        cy.get('@cat').its('status').should('equal', 200)
    });    
})