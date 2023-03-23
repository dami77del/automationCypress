///<reference types="Cypress"/>

describe('my 3 test Suite', () => {

    it("My 3 -Case", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').uncheck().should("not.be.checked")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        cy.get('#checkBoxOption1').uncheck().should("not.be.checked")
        /// select option - Static Dropdown
        //cy.get('select').select('option1').should('have.value','option2')
        // Dynamic dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

            if ($el.text() === "India") {

                cy.wrap($el).click()

            }
        })
        //cy autocomplete
        cy.get('#autocomplete').should('have.value', 'India')
        // visible - invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')


        //radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio1"]').should("not.be.checked")
        cy.get('[value="radio3"]').should("not.be.checked")
        
      
    });






})

