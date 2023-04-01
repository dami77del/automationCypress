/// <reference types="Cypress"/>
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import CheckOutPage from '../pageObjects/CheckOutPage'

import dataExample from '../../fixtures/example.json'


describe('my firt test Framework', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Test1, HomePage ', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const chekOutPage = new CheckOutPage()

        cy.visit(Cypress.env('URL')+"angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneurDisabled().should('be.disabled')
        homePage.getShopTab().contains('Shop').click()
        //selected element to array productName into example.json
        dataExample.productName.forEach(element => {
            cy.selectProductToCard(element)
        });
        
        homePage.getCartButton().click()
       
        productPage.getCheckout().click()
        chekOutPage.getCountry().type('India')
        cy.wait(2000)
        chekOutPage.selectLocation().click()
        chekOutPage.selectTermConditions().click({ force: true })
        chekOutPage.selectBtnPurchase().click()
        chekOutPage.validateTxtSuccess().then(function(element) {
            const actual = element.text()
            expect(actual.includes("Success")).to.be.true

        })

    })



})