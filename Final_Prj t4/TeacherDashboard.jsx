// src/components/lms/TeacherDashboard.jsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TeacherDashboard.css';  // ← CSS IMPORT

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [stats] = useState([
    { label: "📚 Total Courses", value: "12", change: "+2 new" },
    { label: "👨‍🎓 Total Students", value: "42", change: "+15%" },
    { label: "📝 Pending Assignments", value: "5", change: "⚠️ New!" },
    { label: "✅ Completion Rate", value: "87%", change: "Good!" }
  ]);

  const [recentCourses] = useState([
    { id: 1, title: "Web Development Bootcamp", students: 30, progress: 75 },
    { id: 2, title: "Data Science with Python", students: 20, progress: 50 },
    { id: 3, title: "UI/UX Design Masterclass", students: 0, progress: 0 }
  ]);

  return (
    <div className="td-container">
      <div className="td-content">
        <div className="td-header">
          <h1 className="td-title">👩‍🏫 Teacher Dashboard</h1>
          <p className="td-subtitle">Welcome back, Dr. Hassan!</p>
        </div>

        <div className="td-stats">
          {stats.map((stat, index) => (
            <div key={index} className="td-stat-card">
              <p className="td-stat-label">{stat.label}</p>
              <p className="td-stat-value">{stat.value}</p>
              <p className={`td-stat-change ${stat.change.includes('+') ? 'td-stat-change-green' : 'td-stat-change-yellow'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="td-section-header">
          <h2 className="td-section-title">Recent Courses</h2>
          <button onClick={() => navigate('/teacher/courses/new')} className="td-create-btn">
            <Plus className="w-4 h-4" /> Create New Course
          </button>
        </div>

        <div className="td-courses-grid">
          {recentCourses.map((course) => (
            <div key={course.id} className="td-course-card">
              <h3 className="td-course-title">{course.title}</h3>
              <p className="td-course-students">{course.students} students</p>
              <div className="td-course-progress">
                <div className="td-course-progress-header">
                  <span className="td-course-progress-label">Progress</span>
                  <span className="td-course-progress-value">{course.progress}%</span>
                </div>
                <div className="td-course-progress-bar">
                  <div className="td-course-progress-fill" style={{ width: `${course.progress}%` }} />
                </div>
              </div>
              <div className="td-course-actions">
                <button onClick={() => navigate(`/courses/${course.id}`)} className="td-course-btn">
                  View
                </button>
                <button className="td-course-btn">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;