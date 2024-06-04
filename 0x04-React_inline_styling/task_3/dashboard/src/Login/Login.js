import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.body)}>
        <div>
          <p>Login to access the full dashboard</p>
        </div>
        <div className={css(styles.inputSection)}>
          <div className={css(styles.entry)}>
            <label htmlFor="e-mail">Email: </label>
            <input type="email" name="email" id="e-mail" className={css(styles.input)} />
          </div>

          <div className={css(styles.entry)}>
            <label htmlFor="pass-word">Password: </label>
            <input type="password" id="pass-word" className={css(styles.input)} />
          </div>

          <button className={css(styles.buton)}>OK</button>
        </div>
      </div>
    </>
  );
};

const screenSize = {
  nineHundredPixel: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  body: {
    padding: '45px',
    minHeight: '250px',
  },
  input: {
    marginRight: '10px',
  },

  inputSection: {
    display: 'flex',
    flexDirection: 'row',
    [screenSize.nineHundredPixel]: {
      flexDirection: 'column',
    }
  },
  entry: {
    [screenSize.nineHundredPixel]: {
      marginBottom: '5px',
    },
  },
  buton: {
    [screenSize.nineHundredPixel]: {
      maxWidth: '50px',
    },
  }
  // [screenSize.nineHundredPixel]: {
  //   inputSection: {
  //     flexDirection: 'column',
  //   },
  //   entry: {
  //     marginBottom: '5px',
  //   },
  //   buton: {
  //     maxWidth: '50px',
  //   }
  // }
});
export default Login;