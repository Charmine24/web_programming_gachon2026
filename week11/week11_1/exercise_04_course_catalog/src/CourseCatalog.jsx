import CourseCard from './CourseCard';

const courses = [
  { id: 1, title: 'Web Programming', instructor: 'Dr. Toshpulatov', credits: 3, required: true },
  { id: 2, title: 'Database Systems', instructor: 'Dr. Kim', credits: 3, required: true },
  { id: 3, title: 'Mobile App Dev', instructor: 'Dr. Lee', credits: 2, required: false },
];

function CourseCatalog() {
  return (
    <div>
      <h2>Course Catalog</h2>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          instructor={course.instructor}
          credits={course.credits}
          required={course.required}
        />
      ))}
    </div>
  );
}

export default CourseCatalog;
