import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import FormInput from '../index';

const onChangeInputMock = jest.fn();

describe('FormInput component', () => {
  it('should have the value received via props', () => {
    const { getByLabelText } = render(
      <FormInput label="Kvothe" value="Kvothe" change={onChangeInputMock} idHtmlFor="Kvothe" />,
    );

    expect(getByLabelText(/kvothe/i)).toBeTruthy();
  });
});
