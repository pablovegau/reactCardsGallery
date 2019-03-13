import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import App from '../App';

test('should whatever', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello World!')).toBeTruthy();
});
