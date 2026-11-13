function StudentCard({ name, id, major }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
    </div>
  );
}

export default StudentCard;
