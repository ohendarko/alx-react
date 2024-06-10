import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <>
        <div className={css(styles.body)}>
          <div>
            <p>Login to access the full dashboard</p>
          </div>
          <form className={css(styles.inputSection)} onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.entry)}>
              <label htmlFor="e-mail">Email: </label>
              <input
                type="email"
                name="email"
                id="e-mail"
                className={css(styles.input)}
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className={css(styles.entry)}>
              <label htmlFor="pass-word">Password: </label>
              <input
                type="password"
                name="password"
                id="pass-word"
                className={css(styles.input)}
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <input type="submit" value="OK" className={css(styles.button)} />
          </form>
          {this.state.isLoggedIn && <p className={css(styles.successMessage)}>You are logged in!</p>}
        </div>
      </>
    );
  }
}

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
    },
  },
  entry: {
    [screenSize.nineHundredPixel]: {
      marginBottom: '5px',
    },
  },
  button: {
    [screenSize.nineHundredPixel]: {
      maxWidth: '50px',
    },
  },
  successMessage: {
    color: 'green',
    marginTop: '10px',
  },
});

export default Login;
