// src/components/lms/TeacherAssignments.jsx
import React, { useState } from 'react';
import { Plus, Search, Eye, Edit, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TeacherAssignments.css';  // ← CSS IMPORT

const TeacherAssignments = () => {
  const navigate = useNavigate();
  const [assignments] = useState([
    { id: 1, title: "HTML Project", submissions: 28, total: 30, dueDate: "Aug 15", status: "Graded" },
    { id: 2, title: "CSS Challenge", submissions: 15, total: 30, dueDate: "Aug 20", status: "Pending" },
    { id: 3, title: "JavaScript Task", submissions: 20, total: 30, dueDate: "Aug 25", status: "Pending" },
    { id: 4, title: "React Assignment", submissions: 0, total: 30, dueDate: "Sep 1", status: "Draft" }
  ]);

  return (
    <div className="ta-container">
      <div className="ta-content">
        <div className="ta-header">
          <div>
            <h1 className="ta-title">📝 Assignments</h1>
            <p className="ta-subtitle">📖 Web Development Bootcamp</p>
          </div>
          <button className="ta-create-btn">
            <Plus className="w-4 h-4" /> Create Assignment
          </button>
        </div>

        <div className="ta-search-wrapper">
          <Search className="ta-search-icon" />
          <input type="text" placeholder="Search assignments..." className="ta-search-input" />
        </div>

        <div className="ta-table-wrapper">
          <div className="ta-table-scroll">
            <table className="ta-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Submissions</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment, index) => (
                  <tr key={assignment.id} className={`ta-table-row ${index % 2 === 0 ? 'ta-table-row-alt' : ''}`}>
                    <td className="ta-table-cell">{assignment.title}</td>
                    <td className="ta-table-cell">{assignment.submissions}/{assignment.total}</td>
                    <td className="ta-table-cell">{assignment.dueDate}</td>
                    <td>
                      <span className={`ta-status-badge ${assignment.status === 'Graded' ? 'ta-status-graded' : assignment.status === 'Pending' ? 'ta-status-pending' : 'ta-status-draft'}`}>
                        {assignment.status === 'Graded' && <CheckCircle className="ta-status-icon" />}
                        {assignment.status === 'Pending' && <Clock className="ta-status-icon" />}
                        {assignment.status}
                      </span>
                    </td>
                    <td>
                      <div className="ta-actions">
                        <button className="ta-action-btn ta-action-btn-primary"><Eye /></button>
                        <button className="ta-action-btn ta-action-btn-primary"><Edit /></button>
                        <button onClick={() => navigate('/teacher/assignments/grade')} className="ta-action-btn ta-action-btn-success">
                          <CheckCircle />
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

export default TeacherAssignments;