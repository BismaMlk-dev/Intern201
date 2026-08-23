// src/components/internship/CompanyDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Users } from 'lucide-react';
import './CompanyDashboard.css';

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const [stats] = useState([
    { label: "💼 Total Internships", value: "12", change: "+3 this month" },
    { label: "📝 Open Positions", value: "8", change: "+2 new" },
    { label: "📋 Total Applicants", value: "45", change: "+15% from last month" },
    { label: "⭐ New Applicants", value: "12", change: "🟢 Today" }
  ]);

  const [internships] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      status: "Open",
      applicants: 24,
      positions: 5,
      deadline: "2026-09-15"
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      status: "Open",
      applicants: 15,
      positions: 3,
      deadline: "2026-09-20"
    },
    {
      id: 3,
      title: "UI/UX Designer Intern",
      status: "Closed",
      applicants: 30,
      positions: 0,
      deadline: "2026-08-01"
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      status: "Draft",
      applicants: 0,
      positions: 4,
      deadline: "2026-10-01"
    }
  ]);

  const getStatusClass = (status) => {
    if (status === 'Open') return 'cd-internship-status-open';
    if (status === 'Closed') return 'cd-internship-status-closed';
    return 'cd-internship-status-draft';
  };

  return (
    <div className="cd-container">
      <div className="cd-content">
        <div className="cd-header">
          <h1 className="cd-title">🏢 Company Dashboard</h1>
          <p className="cd-subtitle">Welcome back, TechCorp Solutions!</p>
        </div>

        <div className="cd-stats">
          {stats.map((stat, index) => (
            <div key={index} className="cd-stat-card">
              <p className="cd-stat-label">{stat.label}</p>
              <p className="cd-stat-value">{stat.value}</p>
              <p className={`cd-stat-change ${stat.change.includes('+') ? 'cd-stat-change-green' : 'cd-stat-change-yellow'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="cd-section-header">
          <h2 className="cd-section-title">Recent Internships</h2>
          <button onClick={() => navigate('/company/internships/new')} className="cd-post-btn">
            <Plus className="w-4 h-4" /> Post New Internship
          </button>
        </div>

        {internships.map((internship) => (
          <div key={internship.id} className="cd-internship-card">
            <div className="cd-internship-header">
              <h3 className="cd-internship-title">{internship.title}</h3>
              <span className={`cd-internship-status ${getStatusClass(internship.status)}`}>
                {internship.status}
              </span>
            </div>

            <div className="cd-internship-details">
              <span>📋 {internship.applicants} applicants</span>
              <span>📌 {internship.positions} positions</span>
              <span>⏰ Deadline: {internship.deadline}</span>
            </div>

            <div className="cd-internship-actions">
              <button className="cd-internship-btn cd-internship-btn-view">
                <Eye className="w-4 h-4 inline mr-1" /> View
              </button>
              <button className="cd-internship-btn cd-internship-btn-edit">
                <Edit className="w-4 h-4 inline mr-1" /> Edit
              </button>
              <button className="cd-internship-btn cd-internship-btn-applications">
                <Users className="w-4 h-4 inline mr-1" /> Applications
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboard;