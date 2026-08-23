// src/components/lms/CreateCourse.jsx
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CreateCourse.css';  // ← CSS IMPORT

const CreateCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Technology',
    level: 'Beginner',
    price: 0,
    objectives: '',
    prerequisites: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Course created successfully! (Demo)');
    navigate('/teacher/courses');
  };

  return (
    <div className="cc-container">
      <div className="cc-content">
        <button onClick={() => navigate('/teacher/courses')} className="cc-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </button>

        <h1 className="cc-title">✏️ Create New Course</h1>

        <form onSubmit={handleSubmit} className="cc-form">
          <div className="cc-form-group">
            <label className="cc-form-label">Course Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter course title"
              className="cc-form-input"
              required
            />
          </div>

          <div className="cc-form-group">
            <label className="cc-form-label">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Write course description..."
              className="cc-form-input cc-form-textarea"
              required
            />
          </div>

          <div className="cc-form-group">
            <div className="cc-form-grid">
              <div>
                <label className="cc-form-label">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="cc-form-select"
                >
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Design</option>
                  <option>Language</option>
                  <option>Leadership</option>
                </select>
              </div>
              <div>
                <label className="cc-form-label">Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="cc-form-select"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="cc-form-group">
            <label className="cc-form-label">Price (0 = Free)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              className="cc-form-input cc-form-price"
            />
          </div>

          <div className="cc-form-group">
            <label className="cc-form-label">Learning Objectives</label>
            <textarea
              name="objectives"
              value={formData.objectives}
              onChange={handleChange}
              rows="3"
              placeholder="List learning objectives..."
              className="cc-form-input cc-form-textarea"
            />
          </div>

          <div className="cc-form-group">
            <label className="cc-form-label">Prerequisites</label>
            <textarea
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleChange}
              rows="2"
              placeholder="List prerequisites..."
              className="cc-form-input cc-form-textarea"
            />
          </div>

          <div className="cc-form-actions">
            <button type="button" onClick={() => navigate('/teacher/courses')} className="cc-btn-cancel">
              Cancel
            </button>
            <button type="button" className="cc-btn-draft">
              Save as Draft
            </button>
            <button type="submit" className="cc-btn-publish">
              Publish Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;