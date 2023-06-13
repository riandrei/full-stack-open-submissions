import '../styles/notification.css';

const Notification = ({ notification }) => {
  const { notificationMessage, type } = notification || 'type';
  const notificationType = type ? type : '';

  return !notificationMessage ? null : <div className={`notification ${notificationType}`}>{notificationMessage}</div>;
};

export default Notification;
