import React from 'react';
import { render } from '@testing-library/react';
import { FavoriteNumber } from './FavoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  // check the input type
  expect(input).toHaveAttribute('type', 'number');
});
