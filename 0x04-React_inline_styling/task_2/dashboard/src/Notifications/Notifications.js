import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleCloseClick() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    if (typeof (id) === 'number') {
      console.log(`Notification ${id} has been marked as read`);
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  className={css(
                    notification.type === 'urgent' ? styles.urgent : styles.default,
                    notification.id === 3 && styles.thirdItem
                  )}
                />
              ))}
            </ul>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={this.handleCloseClick}
            >
              <img src={closeIcon} alt="close icon" className={css(styles.closeIcon)} />
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string
      })
    })
  ).isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed red',
    padding: '5px',
    position: 'relative',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '16px',
    height: '16px',
    position: 'absolute',
    top: '-15px',
    right: '-15px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  thirdItem: {
    ':nth-child(3)': {
      color: 'red',
    },
  },
});

export default Notifications;
