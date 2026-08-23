// src/components/lms/TeacherCourses.jsx
import React, { useState } from 'react';
import { Plus, Search, Eye, Edit, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TeacherCourses.css';  // ← CSS IMPORT

const TeacherCourses = () => {
  const navigate = useNavigate();
  const [courses] = useState([
    { id: 1, title: "Web Development Bootcamp", students: 30, lessons: 12, status: "Published" },
    { id: 2, title: "Data Science with Python", students: 20, lessons: 8, status: "Published" },
    { id: 3, title: "UI/UX Design Masterclass", students: 0, lessons: 5, status: "Draft" },
    { id: 4, title: "AI Fundamentals", students: 15, lessons: 10, status: "Published" }
  ]);

  return (
    <div className="tc-container">
      <div className="tc-content">
        <div className="tc-header">
          <div>
            <h1 className="tc-title">📚 My Courses</h1>
            <p className="tc-subtitle">Manage all your courses</p>
          </div>
          <button onClick={() => navigate('/teacher/courses/new')} className="tc-create-btn">
            <Plus className="w-4 h-4" /> Create New Course
          </button>
        </div>

        <div className="tc-search-wrapper">
          <Search className="tc-search-icon" />
          <input type="text" placeholder="Search courses..." className="tc-search-input" />
        </div>

        <div className="tc-table-wrapper">
          <div className="tc-table-scroll">
            <table className="tc-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Students</th>
                  <th>Lessons</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.id} className={`tc-table-row ${index % 2 === 0 ? 'tc-table-row-alt' : ''}`}>
                    <td className="tc-table-cell">{course.title}</td>
                    <td className="tc-table-cell">{course.students}</td>
                    <td className="tc-table-cell">{course.lessons}</td>
                    <td>
                      <span className={`tc-status-badge ${course.status === 'Published' ? 'tc-status-published' : course.status === 'Draft' ? 'tc-status-draft' : 'tc-status-archived'}`}>
                        {course.status}
                      </span>
                    </td>
                    <td>
                      <div className="tc-actions">
                        <button onClick={() => navigate(`/courses/${course.id}`)} className="tc-action-btn">
                          <Eye />
                        </button>
                        <button onClick={() => navigate(`/teacher/courses/${course.id}/edit`)} className="tc-action-btn">
                          <Edit />
                        </button>
                        <button className="tc-action-btn">
                          <Users />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCourses;