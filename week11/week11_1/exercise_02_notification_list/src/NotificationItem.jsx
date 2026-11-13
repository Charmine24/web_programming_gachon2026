// Exercise 2: one notification, icon chosen by type
function NotificationItem({ type, message }) {
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
  return (
    <li>
      {icon} {message}
    </li>
  );
}

export default NotificationItem;
