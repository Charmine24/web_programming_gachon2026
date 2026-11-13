// Topic 2: Functional Components
// A component is a JS function that returns JSX. Names must start with a capital letter.
// <greeting /> renders a plain HTML element; <Greeting /> calls your function.

// Minimal component: a plain JS function
function Greeting() {
  return <h2>Hello, World!</h2>;
}

// Arrow function syntax is also valid:
// const Greeting = () => <h2>Hello, World!</h2>;

// Returning multiple elements: use a Fragment <>...</> to avoid an extra wrapper div
function UserCard() {
  return (
    <>
      <h3>Zulfiya Karimova</h3>
      <p>Computer Engineering · Year 3</p>
    </>
  );
}

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <UserCard />
    </div>
  );
}

export default App;
