///<reference types="Cypress"/>

describe('my 7 test Suite - MouseHover', () => {

    it("My 7 -Case", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //  cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')
    });
})

