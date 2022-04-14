/** @format */

describe('edit Accommodation', function () {
    it('Display form', function () {
        cy.visit('http://localhost:3000/offer/host')

        cy.get('[data-testid="yesBox"]').click()

        cy.get('class=hidden')

        {/* cy.get('[data-testid="next"]').click() */}

        {/* cy.url().should('inlcude', '/profile') */}
    })
})
