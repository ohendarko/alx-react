import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders Notifications component', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'Notification 1' },
    { id: 2, type: 'urgent', value: 'Notification 2' },
  ];
  const { getByText } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  const notification1 = getByText(/Notification 1/i);
  const notification2 = getByText(/Notification 2/i);
  expect(notification1).toBeInTheDocument();
  expect(notification2).toBeInTheDocument();
});
