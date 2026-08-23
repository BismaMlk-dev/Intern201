// src/components/lms/EditCourse.jsx
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EditCourse.css';  // ← CSS IMPORT

const EditCourse = () => {
  const navigate = useNavigate();
  const [formData] = useState({
    title: 'Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, and React from scratch.',
    category: 'Technology',
    level: 'Intermediate',
    price: 4999,
    objectives: 'Build full-stack applications, Master React',
    prerequisites: 'Basic JavaScript knowledge'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Course updated successfully! (Demo)');
    navigate('/teacher/courses');
  };

  return (
    <div className="ec-container">
      <div className="ec-content">
        <button onClick={() => navigate('/teacher/courses')} className="ec-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </button>

        <h1 className="ec-title">✏️ Edit Course</h1>

        <form onSubmit={handleSubmit} className="ec-form">
          <div className="ec-form-group">
            <label className="ec-form-label">Course Title *</label>
            <input type="text" defaultValue={formData.title} className="ec-form-input" />
          </div>

          <div className="ec-form-group">
            <label className="ec-form-label">Description *</label>
            <textarea rows="4" defaultValue={formData.description} className="ec-form-input ec-form-textarea" />
          </div>

          <div className="ec-form-group">
            <div className="ec-form-grid">
              <div>
                <label className="ec-form-label">Category</label>
                <select className="ec-form-select">
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Design</option>
                </select>
              </div>
              <div>
                <label className="ec-form-label">Level</label>
                <select className="ec-form-select">
                  <option>Beginner</option>
                  <option selected>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ec-form-group">
            <label className="ec-form-label">Price (0 = Free)</label>
            <input type="number" defaultValue={formData.price} className="ec-form-input ec-form-price" />
          </div>

          <div className="ec-form-group">
            <label className="ec-form-label">Learning Objectives</label>
            <textarea rows="3" defaultValue={formData.objectives} className="ec-form-input ec-form-textarea" />
          </div>

          <div className="ec-form-group">
            <label className="ec-form-label">Prerequisites</label>
            <textarea rows="2" defaultValue={formData.prerequisites} className="ec-form-input ec-form-textarea" />
          </div>

          <div className="ec-form-actions">
            <button type="button" onClick={() => navigate('/teacher/courses')} className="ec-btn-cancel">
              Cancel
            </button>
            <button type="submit" className="ec-btn-update">
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;