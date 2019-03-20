import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../index';

const buttonOnClickMock = jest.fn();

describe('component button', () => {
  it('should show the label received via props', () => {
    const { getByText } = render(<Button label="batman" />);

    expect(getByText('batman')).toBeTruthy();
  });

  it('should call the method received via props', () => {
    const { getByText } = render(<Button label="batman" click={buttonOnClickMock} />);

    const button = getByText(/batman/i);
    fireEvent.click(button);

    expect(buttonOnClickMock).toHaveBeenCalled();
  });

  it('should position the button in the center', () => {
    const { getByText } = render(<Button label="batman" click={buttonOnClickMock} position="center" />);
    const button = getByText(/batman/i);
    expect(button).toHaveStyle(`
      margin-left: auto;
      margin-right: auto;
    `);
  });

  it('should position the button in the right', () => {
    const { getByText } = render(<Button label="batman" click={buttonOnClickMock} position="right" />);
    const button = getByText(/batman/i);
    expect(button).toHaveStyle(`
    margin-left: auto;
    margin-right: 0;
  `);
  });
});
