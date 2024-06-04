import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="e-mail">Email: </label>
        <input type="email" name="email" id="e-mail" className={css(styles.input)} />

        <label htmlFor="pass-word">Password: </label>
        <input type="password" id="pass-word" className={css(styles.input)} />

        <button>OK</button>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: '45px',
    minHeight: '250px',
  },
  input: {
    marginRight: '10px',
  },
});
export default Login;