///<reference types="Cypress"/>

describe('my first test Suite', () => {
    it("TestCase 1", () => {

    });
    it("TestCase 2", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg3 = $el.find('h4.product-name').text()
            if (textVeg3.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        }
        )

        cy.get('.brand').then((logo) => {
            cy.log(logo.text())
            cy.log(logo.contents('GREENKART'))
        })
    });
})