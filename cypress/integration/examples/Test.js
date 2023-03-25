///<reference types="Cypress"/>

describe('my8 test Suite', () => {

    it("My8 -Case", () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         // next page
         cy.get('#courses-iframe')

         cy.iframe().find("a[href='mentorship']")
    });
})

