import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div className="directory">
      <h1>Student Directory</h1>

      {/* My card — check major, year and GPA are correct */}
      <StudentProfileCard
        name="Yang Kaijing Charmine"
        studentId="202699477"
        major="Computer Engineering"
        year={3}
        gpa={3.75}
      />

      {/* TODO: fill in two classmates' real names, IDs, majors, years and GPAs */}
      <StudentProfileCard name="TODO" studentId="TODO" major="TODO" year={2} gpa={3.5} />
      <StudentProfileCard name="TODO" studentId="TODO" major="TODO" year={4} gpa={3.9} />
    </div>
  );
}

export default App;
