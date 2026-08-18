import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('calculates correct total price multiplier aggregations', () => {
  const mockItems = [
    { id: 1, name: 'Wireless Headphones', price: 50, quantity: 2 }
  ];

  render(<Cart cartItems={mockItems} />);

  const totalElement = screen.getByText(/\$100/);
  expect(totalElement).toBeInTheDocument();
});