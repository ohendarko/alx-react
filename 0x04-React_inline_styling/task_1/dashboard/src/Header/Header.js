import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.png';

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.img)} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    borderBottom: '2px solid red',
    color: 'red',
    alignItems: 'center',
  },
  img: {
    height: '180px',
    margin: '5px',
  },
});

export default Header;