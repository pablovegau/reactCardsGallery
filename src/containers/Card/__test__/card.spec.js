import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Card from '../card';

const buttonDeleteCardPressedMock = jest.fn();
const buttonEditCardPressedMock = jest.fn();
const mouseOverCardMock = jest.fn();
const mouseOutCardMock = jest.fn();

describe('Card component', () => {
  it('should show title and its background and description', () => {
    const { getByText, getByTestId } = render(
      <Card
        id="1"
        title="Batman again"
        description="and again"
        date={2}
        url="www.somewhere.com"
        veil={false}
        buttonDeleteCardPressed={buttonDeleteCardPressedMock}
        buttonEditCardPressed={buttonEditCardPressedMock}
        mouseOverCard={mouseOverCardMock}
        mouseOutCard={mouseOutCardMock}
      />,
    );

    const title = getByText('Batman again');
    const description = getByText('and again');

    const veil = getByTestId(/veil/i);

    expect(title).toBeTruthy();
    expect(title).toHaveStyle(`
      background-image: url('www.somewhere.com';
    `);
    expect(description).toBeTruthy();
    expect(veil).toHaveStyle(`
      display: none;
    `);
  });

  it('should have the veil visible when we are on the card with the mouse', () => {
    const { getByTestId } = render(
      <Card
        id="1"
        title="Batman again"
        description="and again"
        date={2}
        url="www.somewhere.com"
        veil={true}
        buttonDeleteCardPressed={buttonDeleteCardPressedMock}
        buttonEditCardPressed={buttonEditCardPressedMock}
        mouseOverCard={mouseOverCardMock}
        mouseOutCard={mouseOutCardMock}
      />,
    );

    const veil = getByTestId(/veil/i);
    expect(veil).toHaveStyle(`
      display: flex;
    `);
  });

  it('should call method via props when we click on edit button', () => {
    const { getByTestId } = render(
      <Card
        id="1"
        title="Batman again"
        description="and again"
        date={2}
        url="www.somewhere.com"
        veil={true}
        buttonDeleteCardPressed={buttonDeleteCardPressedMock}
        buttonEditCardPressed={buttonEditCardPressedMock}
        mouseOverCard={mouseOverCardMock}
        mouseOutCard={mouseOutCardMock}
      />,
    );

    const editButton = getByTestId('circleButton');
    fireEvent.click(editButton);
    expect(buttonEditCardPressedMock).toHaveBeenCalled();
  });
});
