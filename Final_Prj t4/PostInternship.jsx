// src/components/internship/PostInternship.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PostInternship.css';

const PostInternship = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: 'TechCorp Solutions',
    location: 'Lahore',
    duration: '3 months',
    stipend: '',
    positions: 1,
    deadline: '',
    type: 'Paid',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Internship posted successfully!');
    navigate('/company');
  };

  return (
    <div className="pi-container">
      <div className="pi-content">
        <button onClick={() => navigate('/company')} className="pi-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <h1 className="pi-title">✏️ Post New Internship</h1>

        <form onSubmit={handleSubmit} className="pi-form">
          <div className="pi-form-group">
            <label className="pi-form-label">Internship Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer Intern"
              className="pi-form-input"
              required
            />
          </div>

          <div className="pi-form-group">
            <label className="pi-form-label">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the internship role, responsibilities, and requirements..."
              className="pi-form-input pi-form-textarea"
              required
            />
          </div>

          <div className="pi-form-group">
            <div className="pi-form-grid">
              <div>
                <label className="pi-form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City"
                  className="pi-form-input"
                />
              </div>
              <div>
                <label className="pi-form-label">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g. 3 months"
                  className="pi-form-input"
                />
              </div>
            </div>
          </div>

          <div className="pi-form-group">
            <div className="pi-form-grid">
              <div>
                <label className="pi-form-label">Stipend</label>
                <input
                  type="text"
                  name="stipend"
                  value={formData.stipend}
                  onChange={handleChange}
                  placeholder="$500/month"
                  className="pi-form-input"
                />
              </div>
              <div>
                <label className="pi-form-label">Positions Available</label>
                <input
                  type="number"
                  name="positions"
                  value={formData.positions}
                  onChange={handleChange}
                  min="1"
                  className="pi-form-input"
                />
              </div>
            </div>
          </div>

          <div className="pi-form-group">
            <div className="pi-form-grid">
              <div>
                <label className="pi-form-label">Application Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="pi-form-input"
                />
              </div>
              <div>
                <label className="pi-form-label">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="pi-form-select"
                >
                  <option>Paid</option>
                  <option>Unpaid</option>
                  <option>Academic Credit</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pi-form-group">
            <label className="pi-form-label">Required Skills (comma separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. React, TypeScript, Tailwind CSS"
              className="pi-form-input"
            />
          </div>

          <div className="pi-form-actions">
            <button type="button" onClick={() => navigate('/company')} className="pi-btn-cancel">
              Cancel
            </button>
            <button type="button" className="pi-btn-draft">
              Save as Draft
            </button>
            <button type="submit" className="pi-btn-publish">
              Publish Internship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostInternship;