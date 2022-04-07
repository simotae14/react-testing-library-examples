import React from 'react';
import ReactDOM from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';
import { FavoriteNumber } from './FavoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  // create a div to inject the Favorite Number component
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);
  // retrieve the Label with the text 'Favorite Number'
  const { getByLabelText } = getQueriesForElement(div);
  const input = getByLabelText(/favorite number/i);
  // check the input type
  expect(input).toHaveAttribute('type', 'number');
});
