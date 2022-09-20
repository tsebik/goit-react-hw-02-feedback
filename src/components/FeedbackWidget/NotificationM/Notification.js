import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackWidget/NotificationM/Notification.module.css';

const Notification = ({ message }) => <p className={css.p}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
