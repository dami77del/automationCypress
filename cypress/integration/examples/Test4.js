///<reference types="Cypress"/>

describe('my 4 test Suite', () => {

    it("My 4 -Case", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.get('#confirmbtn').click();

        //Moncha
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        // next page
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include','rahulshettyacademy' )
        // go to
        cy.go('back')


    });





})

