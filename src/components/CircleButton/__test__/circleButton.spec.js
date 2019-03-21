import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import CircleButton from '../index';

const circleButtonOnClickMock = jest.fn();

describe('circleButton component', () => {
  it('should have the path received via props', () => {
    const path = {
      d: 'IronMan',
    };
    const { getByTestId } = render(<CircleButton path={path} />);
    const svgIcon = getByTestId('circleButtonPath');

    expect(svgIcon).toHaveAttribute('d', 'IronMan');
  });

  it('should have the viewBox received via props', () => {
    const path = {
      viewBox: 'IronMan',
    };
    const { getByTestId } = render(<CircleButton path={path} />);
    const svgIcon = getByTestId('circleButtonSvg');

    expect(svgIcon).toHaveAttribute('viewBox', 'IronMan');
  });

  it('should call the method received via props', () => {
    const path = {
      d: 'IronMan',
      viewBox: 'IronMan',
    };
    const { getByTestId } = render(<CircleButton path={path} click={circleButtonOnClickMock} />);

    const circleButton = getByTestId('circleButton');
    fireEvent.click(circleButton);

    expect(circleButtonOnClickMock).toHaveBeenCalled();
  });

  it('should background-color secondary', () => {
    const path = {
      d: 'IronMan',
      viewBox: 'IronMan',
    };
    const { getByTestId } = render(<CircleButton path={path} secondary={true} />);
    const circleButton = getByTestId('circleButton');
    expect(circleButton).toHaveStyle(`
      background-color: #999;
    `);
  });
});
