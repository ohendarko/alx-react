import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import { shallow } from 'enzyme';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your notifications/i);
  expect(linkElement).toBeInTheDocument();
});

test('default state for displayDrawer is false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('displayDrawer')).toBe(false);
});

test('after calling handleDisplayDrawer, the state is true', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state('displayDrawer')).toBe(true);
});

test('after calling handleHideDrawer, the state is updated to false', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state('displayDrawer')).toBe(true);
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state('displayDrawer')).toBe(false);
});
