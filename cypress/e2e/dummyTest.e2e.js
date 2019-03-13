describe('Kitten app', () => {
  it('should a cute kitten when you click the button', () => {
    cy.visit('/').getByText('Hello World!');
  });
});
