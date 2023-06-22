describe('template spec', () => {
  it('passes', () => {
    const searchQuery = " Tom Cruise";
    cy.visit('https://www.youtube.com')
    cy.get('input[name="search_query"]').type(searchQuery);
    cy.get('button[id="search-icon-legacy"]').click();
    cy.url().should('include', `search_query=${encodeURIComponent(searchQuery)}`);
  })
})