import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

test('renders learn react link', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
