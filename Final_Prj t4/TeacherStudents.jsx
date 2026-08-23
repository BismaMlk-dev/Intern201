// src/components/lms/TeacherStudents.jsx
import React, { useState } from 'react';
import { Search, Eye, Mail } from 'lucide-react';
import './TeacherStudents.css';  // ← CSS IMPORT

const TeacherStudents = () => {
  const [students] = useState([
    { id: 1, name: "Ahmed Khan", email: "ahmed@uet.edu.pk", progress: 75, status: "Active", enrolled: "2 months ago" },
    { id: 2, name: "Sara Ali", email: "sara@uet.edu.pk", progress: 90, status: "Active", enrolled: "1 month ago" },
    { id: 3, name: "Zara Lodhi", email: "zara@uet.edu.pk", progress: 45, status: "At Risk", enrolled: "3 months ago" },
    { id: 4, name: "Ali Raza", email: "ali@uet.edu.pk", progress: 60, status: "Active", enrolled: "2 weeks ago" },
    { id: 5, name: "Fatima Noor", email: "fatima@uet.edu.pk", progress: 30, status: "At Risk", enrolled: "1 month ago" }
  ]);

  return (
    <div className="ts-container">
      <div className="ts-content">
        <h1 className="ts-title">👨‍🎓 My Students</h1>
        <p className="ts-subtitle">📖 Web Development Bootcamp</p>

        <div className="ts-search-wrapper">
          <Search className="ts-search-icon" />
          <input type="text" placeholder="Search students..." className="ts-search-input" />
        </div>

        <div className="ts-table-wrapper">
          <div className="ts-table-scroll">
            <table className="ts-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Email</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Enrolled</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className={`ts-table-row ${index % 2 === 0 ? 'ts-table-row-alt' : ''}`}>
                    <td className="ts-student-name">{student.name}</td>
                    <td className="ts-student-email">{student.email}</td>
                    <td>
                      <div className="ts-progress-wrapper">
                        <div className="ts-progress-bar">
                          <div className="ts-progress-fill" style={{ width: `${student.progress}%` }} />
                        </div>
                        <span className="ts-progress-text">{student.progress}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`ts-status-badge ${student.status === 'Active' ? 'ts-status-active' : 'ts-status-risk'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="ts-enrolled">{student.enrolled}</td>
                    <td>
                      <div className="ts-actions">
                        <button className="ts-action-btn"><Eye /></button>
                        <button className="ts-action-btn"><Mail /></button>
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

export default TeacherStudents;