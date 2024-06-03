import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

const NotificationItem = ({ type, value, html, markAsRead, className }) => {
  return (
    <li
      className={css(className)}
      data-priority={type}
      onClick={() => markAsRead()}
    >
      {html ? <span dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
  className: PropTypes.string,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
  className: '',
};

export default NotificationItem;
