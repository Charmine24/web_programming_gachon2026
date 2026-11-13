// Topic 1: What is React & JSX?
//
// JSX (what you write):
//   const element = <h1 className="title">Hello, {name}!</h1>;
// What it compiles to (you never write this):
//   const element = React.createElement('h1', { className: 'title' }, 'Hello, ' + name + '!');
//
// JSX differences from HTML:
//   - className instead of class
//   - htmlFor instead of for
//   - self-close void elements: <img />, <input />, <br />

function App() {
  const user = 'Amir';
  return (
    // Must return ONE root element (or use <>...</> Fragment)
    <div className="app">
      <h1>Welcome, {user}!</h1>
      {/* JS expressions in {} */}
      <p>Today: {new Date().toDateString()}</p>
      <img src="photo.jpg" alt="Profile" /> {/* self-closed */}
    </div>
  );
}

export default App;
