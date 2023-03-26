/// <reference types="Cypress"/>

describe('my firt test Framework', () => {

    before(function() {
        cy.fixture('example').then(function(data) 
        {
            this.data = data
        })
    })
    it('My firstTest framework', function(){

        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('.ng-valid').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('li[class*="nav-item"]:nth-child(2)').contains('Shop').click()

     cy.selectProductToCard('Blackberry')
    })

})