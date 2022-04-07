import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FavoriteNumber } from './FavoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  const { debug, getByLabelText } = render(<FavoriteNumber />);
  debug();
  const input = getByLabelText(/favorite number/i);
  // check the input type
  expect(input).toHaveAttribute('type', 'number');
  debug(input);
});

test('entering an invalid value shows an error message', () => {
  const { getByLabelText, getByRole } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  // trigger the onChange event
  fireEvent.change(input, { target: { value: '10' } });
  // retrieve the error element
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i);
});
