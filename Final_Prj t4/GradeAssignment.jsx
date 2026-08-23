// src/components/lms/GradeAssignment.jsx
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './GradeAssignment.css';  // ← CSS IMPORT

const GradeAssignment = () => {
  const navigate = useNavigate();
  const [submissions] = useState([
    { id: 1, name: "Ahmed Khan", submittedAt: "2 days ago" },
    { id: 2, name: "Sara Ali", submittedAt: "1 day ago" },
    { id: 3, name: "Zara Lodhi", submittedAt: "3 days ago" },
    { id: 4, name: "Ali Raza", submittedAt: "12 hours ago" }
  ]);

  return (
    <div className="ga-container">
      <div className="ga-content">
        <button onClick={() => navigate('/teacher/assignments')} className="ga-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Assignments
        </button>

        <h1 className="ga-title">📝 Grade Assignment: CSS Challenge</h1>
        <p className="ga-subtitle">📖 Web Development Bootcamp</p>

        {submissions.map((student) => (
          <div key={student.id} className="ga-submission-card">
            <div className="ga-submission-header">
              <div>
                <h3 className="ga-student-name">{student.name}</h3>
                <p className="ga-student-time">Submitted: {student.submittedAt}</p>
              </div>
              <button onClick={() => alert(`📎 Viewing submission for ${student.name}`)} className="ga-view-btn">
                📎 View Submission
              </button>
            </div>

            <div className="ga-form-grid">
              <div>
                <label className="ga-form-label">Grade (out of 100)</label>
                <input type="number" min="0" max="100" placeholder="Score" className="ga-form-input" />
              </div>
              <div>
                <label className="ga-form-label">Feedback</label>
                <textarea rows="2" placeholder="Provide feedback..." className="ga-form-input ga-form-textarea" />
              </div>
            </div>

            <button onClick={() => alert('✅ Grade submitted successfully!')} className="ga-submit-btn">
              Submit Grade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeAssignment;