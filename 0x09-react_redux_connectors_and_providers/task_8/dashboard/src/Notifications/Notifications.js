import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';

const Notifications = ({
  displayDrawer,
  handleDisplayDrawer,
  handleHideDrawer,
  markAsRead,
}) => {
  const dispatch = useDispatch();
  const listNotifications = useSelector(getUnreadNotificationsByType);

  useEffect(() => {
    handleDisplayDrawer();
  }, [handleDisplayDrawer]);

  const handleCloseClick = () => {
    console.log('Close button has been clicked');
    handleHideDrawer();
  };

  const handleSetFilter = (filterType) => {
    dispatch(setNotificationFilter(filterType));
  };

  return (
    <>
      <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)}>
          <p>Here is the list of notifications</p>
          <div className={css(styles.filterButtons)}>
            <button onClick={() => handleSetFilter('URGENT')} className={css(styles.filterButton)}>
              ‼️
            </button>
            <button onClick={() => handleSetFilter('DEFAULT')} className={css(styles.filterButton)}>
              💠
            </button>
          </div>
          <ul className={css(styles.notificationList)}>
            {listNotifications.map(notification => (
              <NotificationItem
                key={notification.get('id')}
                {...notification.toObject()} // Convert Immutable Map to regular object
                markAsRead={markAsRead}
              />
            ))}
          </ul>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={handleCloseClick}
          >
            <img src={closeIcon} alt="close icon" className={css(styles.closeIcon)} />
          </button>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed red',
    padding: '5px',
    position: 'relative',
  },
  notificationList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
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
    cursor: 'pointer',
  },
  filterButtons: {
    marginBottom: '10px',
  },
  filterButton: {
    fontSize: '1.5rem',
    margin: '0 5px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  },
});

export default Notifications;
