import '../styles/notification.css';

const Notification = ({ notificationMessage }) => {
  return !notificationMessage ? null : <div className="notification">{notificationMessage}</div>;
};

export default Notification;
