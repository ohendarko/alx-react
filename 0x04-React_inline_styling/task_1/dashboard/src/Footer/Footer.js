import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getFullYear } from '../utils/utils.js';

const Footer = () => {
  return (
    <footer className={css(styles.footer)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
};

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '5px 10px 15px 10px',
  },
  header: {
    display: 'flex',
    borderBottom: '2px solid red',
    color: 'red',
    alignItems: 'center',
    ' img': {
      height: '180px',
      margin: '5px',
    },
  },
  body: {
    padding: '45px',
    minHeight: '250px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '2px solid red',
    fontStyle: 'italic',
  },
  input: {
    marginRight: '10px',
  },
});

export default Footer;