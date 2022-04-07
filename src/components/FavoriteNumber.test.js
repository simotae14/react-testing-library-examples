import React from 'react';
import ReactDOM from 'react-dom';
import { FavoriteNumber } from './FavoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  // create a div to inject the Favorite Number component
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);
  // check the input type
  expect(div.querySelector('input').type).toBe('number');
  // check the label text content
  expect(div.querySelector('label').textContent).toBe('Favorite Number');
});
