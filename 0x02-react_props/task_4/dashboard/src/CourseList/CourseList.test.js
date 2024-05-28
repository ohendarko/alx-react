import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseList from './CourseList';

test('renders CourseList component without crashing', () => {
  render(<CourseList />);
});

test('renders the 5 different rows', () => {
  const { container } = render(<CourseList />);
  const rows = container.querySelectorAll('tr');
  expect(rows.length).toBe(5);

  expect(rows[0]).toHaveTextContent('Available courses');
  expect(rows[1]).toHaveTextContent('Course name');
  expect(rows[1]).toHaveTextContent('Credit');
  expect(rows[2]).toHaveTextContent('ES6');
  expect(rows[2]).toHaveTextContent('60');
  expect(rows[3]).toHaveTextContent('Webpack');
  expect(rows[3]).toHaveTextContent('20');
  expect(rows[4]).toHaveTextContent('React');
  expect(rows[4]).toHaveTextContent('40');
});
