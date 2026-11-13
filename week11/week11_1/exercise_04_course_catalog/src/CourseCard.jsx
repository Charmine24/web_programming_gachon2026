function CourseCard({ title, instructor, credits, required }) {
  return (
    <div className="card">
      <h3>
        {title}{' '}
        <span className={required ? 'badge badge-required' : 'badge badge-elective'}>
          {required ? '필수' : '선택'}
        </span>
      </h3>
      <p>Instructor: {instructor}</p>
      <p>Credits: {credits}</p>
    </div>
  );
}

export default CourseCard;
