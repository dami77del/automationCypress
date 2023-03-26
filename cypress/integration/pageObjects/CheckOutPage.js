class ProductPage {
    getCountry() {
        return cy.get('#country')
    }

    selectLocation() {
        return cy.get('.suggestions > ul > li > a')
    }
    selectTermConditions() {
        return cy.get('#checkbox2')
    }

    selectBtnPurchase() {
        return cy.get('input[type="submit"]')
    }

    validateTxtSuccess(){
        return cy.get('.alert')
    }






}

export default ProductPage