import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => { },
  };

  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ]
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }



  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;

    return (
      <div className={css(styles.app)}>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
        <Header />
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex a arcu condimentum semper et vitae ipsum.</p>
        </BodySection>
        <Footer />
      </div>
    );
  }


}

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

export default App;
