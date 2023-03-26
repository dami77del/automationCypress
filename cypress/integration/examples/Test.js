/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'

describe('my8 test Suite', () => {

    it("My8 -Case", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // next page
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']").eq(0).click()
       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    });
})

