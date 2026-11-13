// Exercise 1: ProfileCard with an optional avatarUrl (default placeholder image)
function ProfileCard({ name, role, email, avatarUrl = 'https://placehold.co/80x80' }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, maxWidth: 300 }}>
      <img src={avatarUrl} alt={name} style={{ borderRadius: '50%', width: 80 }} />
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default ProfileCard;
