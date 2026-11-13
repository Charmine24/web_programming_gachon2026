// Exercise 3: reusable Card that wraps any children
function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #bae6fd', borderRadius: 10, padding: '16px 20px', marginBottom: 16 }}>
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
