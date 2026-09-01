import { render, screen } from '@testing-library/react';
import App from './App';

test('renders maintenance mode page by default', () => {
  render(<App />);
  expect(screen.getByText(/we'll be back soon/i)).toBeInTheDocument();
});
