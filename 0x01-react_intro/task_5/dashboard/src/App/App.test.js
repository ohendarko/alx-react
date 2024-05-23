import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders a div with the class App-header', () => {
    render(<App />);
    const headerDiv = screen.getByRole('banner'); // Assuming that App-header div has a role of banner
    expect(headerDiv).toHaveClass('App-header');
  });

  it('renders a div with the class App-body', () => {
    render(<App />);
    const bodyDiv = screen.getByRole('main'); // Assuming that App-body div has a role of main
    expect(bodyDiv).toHaveClass('App-body');
  });

  it('renders a div with the class App-footer', () => {
    render(<App />);
    const footerDiv = screen.getByRole('contentinfo'); // Assuming that App-footer div has a role of contentinfo
    expect(footerDiv).toHaveClass('App-footer');
  });
});