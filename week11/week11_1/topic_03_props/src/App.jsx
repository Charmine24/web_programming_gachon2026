// Topic 3: Props — Passing Data
// Props pass data from parent to child. They are read-only inside the child.

// Child receives props as an object (first argument):
// function StudentCard(props) {
//   return (
//     <div className="card">
//       <h3>{props.name}</h3>
//       <p>Year {props.year}</p>
//     </div>
//   );
// }

// Destructured: cleaner style (preferred)
function StudentCard({ name, year }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Year {year}</p>
    </div>
  );
}

// Default props via destructuring default syntax
function Button({ label = 'Click me', color = 'blue', disabled = false }) {
  return (
    <button style={{ background: color }} disabled={disabled}>
      {label}
    </button>
  );
}

// props.children: anything between the opening and closing tags
function Panel({ title, children }) {
  return (
    <div className="panel">
      <h2>{title}</h2>
      <div className="panel-body">{children}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Parent passes props like HTML attributes */}
      <StudentCard name="Amir Tashkentov" year={2} />
      <StudentCard name="Gulnora Nazarova" year={3} />

      {/* All three are valid */}
      <Button />                            {/* label="Click me", color="blue" */}
      <Button label="Submit" />             {/* color still "blue" */}
      <Button label="Delete" color="red" /> {/* custom both */}

      {/* The <p> and <ul> are children */}
      <Panel title="Week 11">
        <p>React session today</p>
        <ul>
          <li>Components</li>
          <li>Props</li>
        </ul>
      </Panel>
    </div>
  );
}

export default App;
