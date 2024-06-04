import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders Login component', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Login form/i);
  expect(linkElement).toBeInTheDocument();
});
