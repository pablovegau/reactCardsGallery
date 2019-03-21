describe('React Cards Gallery', () => {
  const title = 'Batman';
  const description = 'Batman again';
  it('', () => {
    cy.visit('/')
      .getByTestId('circleButton')
      .click()
      .getByLabelText('Title')
      .type(title)
      .getByLabelText('Description')
      .type(description)
      .getByText('ADD')
      .click();

    cy.getByText('Batman').should('exist');
    cy.getByText('Batman again').should('exist');

    cy.get('.sc-htoDjs')
      .trigger('mouseover')
      .get('[data-testid=veil] > :nth-child(1)')
      .click()
      .getByLabelText('Title')
      .type('Edited')
      .getByLabelText('Description')
      .type(' and again...')
      .getByText(/edit/i)
      .click();

    cy.getByText('BatmanEdited').should('exist');
    cy.getByText('Batman again and again...').should('exist');

    cy.get('.sc-htoDjs')
      .get('[data-testid=veil] > :nth-child(2)')
      .click();
  });
});
