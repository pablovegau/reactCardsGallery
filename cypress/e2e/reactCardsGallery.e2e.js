describe('React Cards Gallery', () => {
  const title = 'Batman';
  const description = 'Batman again';
  it('', () => {
    cy.visit('/')
      .getByTestId('circleButton')
      .click()
      .getByLabelText('Title')
      .type(title)
      .get(':nth-child(3) > #genericInput')
      .type(description)
      .getByText('ADD')
      .click();

    cy.getByText('Batman').should('exist');
    cy.getByText('Batman again').should('exist');
  });
});
