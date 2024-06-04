import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders Header component', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Header content/i);
  expect(linkElement).toBeInTheDocument();
});
