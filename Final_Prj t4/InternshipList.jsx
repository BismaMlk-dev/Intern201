// src/components/internship/InternshipList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Eye, Edit, Users } from 'lucide-react';
import './InternshipList.css';

const InternshipList = () => {
  const navigate = useNavigate();

  const [internships] = useState([
    { id: 1, title: "Frontend Developer Intern", status: "Open", applicants: 24, positions: 5, deadline: "2026-09-15" },
    { id: 2, title: "Data Analyst Intern", status: "Open", applicants: 15, positions: 3, deadline: "2026-09-20" },
    { id: 3, title: "UI/UX Designer Intern", status: "Closed", applicants: 30, positions: 0, deadline: "2026-08-01" },
    { id: 4, title: "Backend Developer Intern", status: "Draft", applicants: 0, positions: 4, deadline: "2026-10-01" },
    { id: 5, title: "DevOps Engineer Intern", status: "Open", applicants: 8, positions: 2, deadline: "2026-09-30" }
  ]);

  const getStatusClass = (status) => {
    if (status === 'Open') return 'il-status-open';
    if (status === 'Closed') return 'il-status-closed';
    return 'il-status-draft';
  };

  return (
    <div className="il-container">
      <div className="il-content">
        <div className="il-header">
          <div>
            <h1 className="il-title">💼 My Internships</h1>
            <p className="il-subtitle">Manage all your internship listings</p>
          </div>
          <button onClick={() => navigate('/company/internships/new')} className="il-post-btn">
            <Plus className="w-4 h-4" /> Post New Internship
          </button>
        </div>

        <div className="il-search-wrapper">
          <Search className="il-search-icon" />
          <input type="text" placeholder="Search internships..." className="il-search-input" />
        </div>

        <div className="il-table-wrapper">
          <div className="il-table-scroll">
            <table className="il-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Applicants</th>
                  <th>Positions</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((internship, index) => (
                  <tr key={internship.id} className={`il-table-row ${index % 2 === 0 ? 'il-table-row-alt' : ''}`}>
                    <td className="il-table-cell">{internship.title}</td>
                    <td>
                      <span className={`il-status-badge ${getStatusClass(internship.status)}`}>
                        {internship.status}
                      </span>
                    </td>
                    <td className="il-table-cell">{internship.applicants}</td>
                    <td className="il-table-cell">{internship.positions}</td>
                    <td className="il-table-cell">{internship.deadline}</td>
                    <td>
                      <div className="il-actions">
                        <button className="il-action-btn"><Eye /></button>
                        <button className="il-action-btn"><Edit /></button>
                        <button className="il-action-btn il-action-btn-applications"><Users /></button>
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

export default InternshipList;