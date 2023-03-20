///<reference types="Cypress"/>

describe('my second test Suite', () => {

    it("My secondTest Case", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator') /// change name for .products to 'productLocator

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg3 = $el.find('h4.product-name').text()
            if (textVeg3.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        }
        )
        cy.get('a.cart-icon').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.wait(2000)
        cy.get('button').contains("Place Order").click()
    
    

    });
})