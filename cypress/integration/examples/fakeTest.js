

///<reference types='Cypress' />

describe('', () => {
    it('My First Case', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode: 200,
            body: [{
                "book_name": "RobotFramework",
                "isbn": "984353",
                "aisle": "982053"}]
        }).as('bookretrievals')
        cy.get('.btn-primary').click()
        cy.wait('@bookretrievals')
        cy.get('p').should('have.text','Oops only 1 Book available')
    })
})