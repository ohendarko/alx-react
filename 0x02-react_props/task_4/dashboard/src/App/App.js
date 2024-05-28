import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />

      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
