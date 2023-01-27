describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Home',
      });

      // Find a link containing 'About' text and click it
      cy.findByRole('link', { name: 'About' }).click();

      // The new url should include '/about'
      cy.url().should('include', '/about');

      // The new page should contain two 'lorem ipsum' paragraphs
      cy.findAllByText('What the application does', {
        exact: false,
      }).should('have.length', 1);
    });

    it('should take screenshot of the homepage', () => {
      cy.visit('/');

      // Wait until the page is displayed
      cy.findByRole('heading', {
        name: 'Home',
      });

      cy.percySnapshot('Homepage');
    });

    it('should take screenshot of the About page', () => {
      cy.visit('/about');

      // Wait until the page is displayed
      cy.findByRole('link', { name: 'About' });

      cy.percySnapshot('About');
    });
  });
});
