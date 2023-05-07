import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <section className={css.wrapper}>
      <h1 className={css.message}>{message}</h1>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
