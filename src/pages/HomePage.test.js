import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import '@testing-library/jest-dom/extend-expect';

test('renders welcome message', () => {
  const { getByText } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  const linkElement = getByText(/Welcome to the Reservation System/i);
  expect(linkElement).toBeInTheDocument();
});
