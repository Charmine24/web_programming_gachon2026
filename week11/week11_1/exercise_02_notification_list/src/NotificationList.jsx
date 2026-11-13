import NotificationItem from './NotificationItem';

const notifications = [
  { id: 1, type: 'success', message: 'Profile updated successfully' },
  { id: 2, type: 'warning', message: 'Password expires in 3 days' },
  { id: 3, type: 'info', message: 'New lecture materials available' },
];

function NotificationList() {
  return (
    <ul>
      {notifications.map((n) => (
        <NotificationItem key={n.id} type={n.type} message={n.message} />
      ))}
    </ul>
  );
}

export default NotificationList;
