 class HomePage{

 getEditBox(){
  return   cy.get('input[name="name"]:nth-child(2)')
 }

 getTwoWayDataBinding(){
    return  cy.get('.ng-valid')
 } 
 getGender(){
    return  cy.get('select')
 }

 getEntrepreneurDisabled(){
  return  cy.get('#inlineRadio3')
 }

 getShopTab(){
   return  cy.get('li[class*="nav-item"]:nth-child(2)')
 }

 
getCartButton(){
    return cy.get('a.nav-link.btn.btn-primary')
}
}


export default HomePage;