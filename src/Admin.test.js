import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo', () => {
  render(<App />);
  const logoElement = screen.getByTitle(/logo/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders left bar', () => {
  render(<App />);
  const leftBarElement = screen.getByTitle(/leftBar/i);
  expect (leftBarElement).toBeInTheDocument();
});

test('renders events', () => {
  render(<App />);
  const leftBarElement = screen.getByTitle(/events/i);
  expect (leftBarElement).toBeInTheDocument();
})
