import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Footer content/i);
  expect(linkElement).toBeInTheDocument();
});
