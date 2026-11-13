// Topic 4: Lists & Conditional Rendering

// --- Rendering lists with .map() ---
const courses = [
  { id: 1, name: 'Web Programming', credits: 3 },
  { id: 2, name: 'Databases', credits: 3 },
  { id: 3, name: 'Algorithms', credits: 4 },
];

function CourseList() {
  return (
    <ul>
      {courses.map((course) => (
        // key must be unique and stable: use the id, not the index
        <li key={course.id}>
          {course.name} — {course.credits} credits
        </li>
      ))}
    </ul>
  );
}

// --- Conditional rendering ---
function UserGreeting({ isLoggedIn, username }) {
  return (
    <div>
      {/* 1. Ternary: renders one of two options */}
      {isLoggedIn ? <h1>Welcome back, {username}!</h1> : <h1>Please log in</h1>}

      {/* 2. &&: renders only when condition is truthy */}
      {isLoggedIn && <button>Log out</button>}
    </div>
  );
}

// 3. Early return: cleanest for big branches
function AdminPanel() {
  return <p>Admin panel</p>;
}

function Dashboard({ isAdmin }) {
  if (!isAdmin) return <p>Access denied</p>;
  return <AdminPanel />;
}

function App() {
  return (
    <div>
      <CourseList />
      <UserGreeting isLoggedIn={true} username="Charmine" />
      <UserGreeting isLoggedIn={false} />
      <Dashboard isAdmin={true} />
      <Dashboard isAdmin={false} />
    </div>
  );
}

export default App;
