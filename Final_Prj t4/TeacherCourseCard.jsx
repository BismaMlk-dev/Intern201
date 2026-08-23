// src/components/lms/TeacherCourseCard.jsx
import ProgressBar from './ProgressBar';
import './TeacherCourseCard.css';  // ← CSS IMPORT

const TeacherCourseCard = ({ course }) => {
  return (
    <div className="tcc-card">
      <div className="tcc-header">
        <div>
          <h3 className="tcc-title">{course.title}</h3>
          <p className="tcc-subtitle">
            {course.students} students • {course.lessons} lessons
          </p>
        </div>
        <span className={`tcc-status ${
          course.status === 'Published' ? 'tcc-status-published' : 
          course.status === 'Draft' ? 'tcc-status-draft' : 
          'tcc-status-archived'
        }`}>
          {course.status}
        </span>
      </div>
      <div className="tcc-progress">
        <ProgressBar value={course.progress} label="Course Progress" />
      </div>
      <div className="tcc-actions">
        <button className="tcc-btn">View</button>
        <button className="tcc-btn">Edit</button>
        <button className="tcc-btn">Manage Students</button>
      </div>
    </div>
  );
};

export default TeacherCourseCard;