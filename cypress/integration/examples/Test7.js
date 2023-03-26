///<reference types="Cypress"/>

describe('my7 test Suite - MouseHover', () => {

    it("My7 -Case", () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         // next page
         cy.get('#opentab').invoke('removeAttr', 'target').click()
    });
})

