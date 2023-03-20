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

        cy.get ('.products').as('productLocator') /// change name for .products to 'productLocator
        cy.get('@productLocator').find('.product').should('have.length', 4)  // hier can see the change into de metod GET
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg3 = $el.find('h4.product-name').text()
            if (textVeg3.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        }
        )
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then((logo) => {
            cy.log(logo.text())
            cy.log(logo.contents('GREENKART'))
            console.log('this name is ok'  )
        })
    });
})