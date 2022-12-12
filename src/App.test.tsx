import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Problem1 component', () => {
  render(<App />);
  const problemComponent = screen.getByTestId('problem1');
  expect(problemComponent).toBeInTheDocument();
  expect(screen.getByRole('combobox', { name: 'Person:' })).toBeInTheDocument();
  expect(screen.getByRole('combobox', { name: 'Relation:' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  screen.getByLabelText('Output:')
});
