/// <reference types="Cypress" />
import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../pageObjects/HomePage'
import ProductPage from '../../../pageObjects/ProductPage'
import CheckOutPage from '../../../pageObjects/CheckOutPage'

import dataExample from '../../../../fixtures/example.json'
const homePage = new HomePage()
const productPage = new ProductPage()
const chekOutPage = new CheckOutPage()

Given('I open Ecommerce Page', () => {
  cy.visit(Cypress.env('URL') + "angularpractice/")
})
When("I add items to Cart", () => {
  homePage.getShopTab().contains('Shop').click()
  //selected element to array productName into example.json
  dataExample.productName.forEach(element => {
    cy.selectProductToCard(element)
  });
  productPage.getCheckout().click()
});

//And Validate the total prices
Then('Validate the total prices',()=>
{
  cy.wait(2000)
    var sum=0
    cy.get('tr td:nth-child(4) strong').each((el, index, list) => {
      const amount = el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum) + Number(res)
    }).then(() => {
      cy.log('Total Price:', sum)
    })
       cy.get('h3 strong').then((element) =>
       {
           const amount=element.text()
           var res= amount.split(" ")
          var total= res[1].trim()
          expect(Number(total)).to.equal(sum)
       
       }) 
    })

Then('select the country submit and verify thank you', () => {
  productPage.getCheckout().click()
  chekOutPage.getCountry().type('India')
  cy.wait(2000)
  chekOutPage.selectLocation().click()
  chekOutPage.selectTermConditions().click({ force: true })
  chekOutPage.selectBtnPurchase().click()
  chekOutPage.validateTxtSuccess().then(function (element) {
    const actual = element.text()
    expect(actual.includes("Success")).to.be.true
  })
})
//When i fill the form details
When('I fill the form details', () =>
 {  cy.wait(2000)
  homePage.getEditBox().type(dataExample.name)
  homePage.getGender().select(dataExample.gender)
 

})

Then('Validate the forms behaviour', ()=>
{
  homePage.getTwoWayDataBinding().should('have.value', dataExample.name)
  homePage.getEditBox().should('have.attr', 'minlength', '2')
  homePage.getEntrepreneurDisabled().should('be.disabled')

})

Then('Select the Shop Page',()=>
{
  homePage.getShopTab().contains('Shop').click()

})



