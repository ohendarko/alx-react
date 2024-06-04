import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders App component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Your notifications/i);
  expect(linkElement).toBeInTheDocument();
});
