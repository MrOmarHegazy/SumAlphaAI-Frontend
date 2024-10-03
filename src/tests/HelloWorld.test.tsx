import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/common/HelloWorld';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  const headingElement = screen.getByText(/Hello, World!/i);
  expect(headingElement).toBeInTheDocument();
});
