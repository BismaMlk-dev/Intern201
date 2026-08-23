// src/components/internship/InternshipModule.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Building,
  MapPin,
  Clock,
  DollarSign,
  Search,
  Filter,
  CheckCircle,
  FileText,
  UserCheck,
  Send,
  X,
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import './InternshipModule.css';

export const InternshipModule = () => {
  const navigate = useNavigate();

  // ===== DEMO DATA =====
  const user = { name: "Bisma", department: "Computer Science", email: "bisma@uet.edu.pk", role: "student" };

  const [internships] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      companyLogo: "https://ui-avatars.com/api/?name=TechCorp&background=3b82f6&color=fff&size=48",
      description: "Build responsive web applications using React, TypeScript, and Tailwind CSS. Work on real-world projects with senior developers.",
      location: "Lahore, Pakistan",
      duration: "3 months",
      stipend: "$300/month",
      type: "Paid",
      skills: ["React", "TypeScript", "Tailwind CSS", "Git"]
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataVision AI",
      companyLogo: "https://ui-avatars.com/api/?name=DataVision&background=8b5cf6&color=fff&size=48",
      description: "Analyze large datasets, build ML models, and create data visualizations using Python and TensorFlow.",
      location: "Remote",
      duration: "4 months",
      stipend: "$400/month",
      type: "Paid",
      skills: ["Python", "TensorFlow", "SQL", "Pandas"]
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "DesignPro",
      companyLogo: "https://ui-avatars.com/api/?name=DesignPro&background=ec4899&color=fff&size=48",
      description: "Create user-centered designs using Figma, conduct user research, and collaborate with product teams.",
      location: "Islamabad, Pakistan",
      duration: "2 months",
      stipend: "$250/month",
      type: "Unpaid",
      skills: ["Figma", "UI/UX", "User Research", "Prototyping"]
    }
  ]);

  const [myApplications, setMyApplications] = useState([
    {
      id: 1,
      internshipId: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      appliedDate: "2026-08-10",
      status: "Under Review",
      mentor: "Dr. Ali",
      mentorFeedback: "Strong technical skills. Good understanding of React.",
      score: 85
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [activeTab, setActiveTab] = useState('listings');
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [cvUrl, setCvUrl] = useState('');

  const types = ['All', 'Paid', 'Unpaid', 'Academic Credit'];

  const filteredInternships = internships.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || item.type === selectedType;
    return matchesQuery && matchesType;
  });

  const applyInternship = (internshipId, coverLetterText, cvLink) => {
    const internship = internships.find(i => i.id === internshipId);
    if (!internship) return;

    const newApplication = {
      id: myApplications.length + 1,
      internshipId: internship.id,
      title: internship.title,
      company: internship.company,
      appliedDate: new Date().toISOString().split('T')[0],
      status: "Under Review",
      mentor: "Dr. Ali",
      mentorFeedback: "Application received. Under review by mentor.",
      score: null
    };

    setMyApplications([...myApplications, newApplication]);
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!selectedInternship) return;
    applyInternship(selectedInternship.id, coverLetter, cvUrl || 'https://inquisitors.uet.edu.pk/cv/student.pdf');
    setSelectedInternship(null);
    setCoverLetter('');
    setCvUrl('');
    alert('✅ Application submitted successfully!');
  };

  return (
    <div className="im-container">
      <div className="im-content">
        {/* ===== HEADER ===== */}
        <div className="im-header">
          <div>
            <h1 className="im-title">
              <Briefcase className="im-title-icon" />
              Internship & Recruitment Management
            </h1>
            <p className="im-subtitle">
              Browse verified industry internships, apply with AI resume integration, and track application pipelines.
            </p>
          </div>

          <div className="im-tabs">
            <button
              onClick={() => setActiveTab('listings')}
              className={`im-tab-btn ${activeTab === 'listings' ? 'im-tab-btn-active' : ''}`}
            >
              Available ({internships.length})
            </button>
            <button
              onClick={() => setActiveTab('my_applications')}
              className={`im-tab-btn ${activeTab === 'my_applications' ? 'im-tab-btn-active' : ''}`}
            >
              My Applications ({myApplications.length})
            </button>
            {(user.role === 'mentor' || user.role === 'admin' || user.role === 'company') && (
              <button
                onClick={() => setActiveTab('mentor_eval')}
                className="im-tab-btn im-tab-btn-purple"
              >
                Mentor Eval
              </button>
            )}
          </div>
        </div>

        {/* ===== TAB 1: LISTINGS ===== */}
        {activeTab === 'listings' && (
          <>
            <div className="im-search-wrapper">
              <div className="im-search-input-wrapper">
                <Search className="im-search-icon" />
                <input
                  type="text"
                  placeholder="Search internships or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="im-search-input"
                />
              </div>

              <div className="im-filter-group">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`im-filter-btn ${selectedType === type ? 'im-filter-btn-active' : ''}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="im-grid">
              {filteredInternships.map((int) => {
                const hasApplied = myApplications.some((a) => a.internshipId === int.id);
                return (
                  <div key={int.id} className="im-card">
                    <div>
                      <div className="im-card-top">
                        <img src={int.companyLogo} alt={int.company} className="im-card-logo" />
                        <div>
                          <h3 className="im-card-title">{int.title}</h3>
                          <p className="im-card-company">{int.company}</p>
                        </div>
                      </div>

                      <p className="im-card-desc">{int.description}</p>

                      <div className="im-card-details">
                        <span>
                          <MapPin className="im-card-details-icon" /> {int.location}
                        </span>
                        <span>
                          <Clock className="im-card-details-icon" /> Duration: {int.duration}
                        </span>
                        <span className="im-card-stipend">
                          <DollarSign className="im-card-details-icon" /> Stipend: {int.stipend}
                        </span>
                      </div>

                      <div className="im-card-skills">
                        {int.skills.map((s) => (
                          <span key={s} className="im-card-skill">{s}</span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedInternship(int)}
                      disabled={hasApplied}
                      className={`im-card-btn ${hasApplied ? 'im-card-btn-applied' : ''}`}
                    >
                      {hasApplied ? (
                        <>
                          <CheckCircle className="w-4 h-4" /> Already Applied
                        </>
                      ) : (
                        <>
                          Apply Now <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ===== TAB 2: MY APPLICATIONS ===== */}
        {activeTab === 'my_applications' && (
          <div>
            <h3 className="im-applications-title">Application Pipeline & Status</h3>
            {myApplications.map((app) => {
              const statusClass = app.status === 'Shortlisted' ? 'im-app-status-shortlisted' :
                                  app.status === 'Under Review' ? 'im-app-status-review' :
                                  app.status === 'Rejected' ? 'im-app-status-rejected' :
                                  'im-app-status-pending';
              return (
                <div key={app.id} className="im-app-card">
                  <div className="im-app-header">
                    <div>
                      <h3 className="im-app-title">{app.title}</h3>
                      <p className="im-app-company">{app.company} • Applied on {app.appliedDate}</p>
                    </div>
                    <span className={`im-app-status ${statusClass}`}>
                      {app.status}
                    </span>
                  </div>

                  <div className="im-app-mentor-box">
                    <div className="im-app-mentor-header">
                      <span className="im-app-mentor-name">
                        <UserCheck className="w-4 h-4" /> Mentor: {app.mentor}
                      </span>
                      {app.score && (
                        <span className="im-app-mentor-score">Score: {app.score}/100</span>
                      )}
                    </div>
                    <p className="im-app-mentor-feedback">"{app.mentorFeedback}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ===== TAB 3: MENTOR EVALUATION ===== */}
        {activeTab === 'mentor_eval' && (
          <div className="im-eval-card">
            <h3 className="text-white font-bold mb-4">Candidate Evaluation Portal</h3>
            {myApplications.map((cand) => (
              <div key={cand.id} className="im-eval-card">
                <div className="im-eval-header">
                  <div>
                    <h4 className="im-eval-name">Student: {user.name}</h4>
                    <p className="im-eval-position">{cand.title} at {cand.company}</p>
                  </div>
                  <span className="im-eval-badge">GPA: 3.82 • 3rd Year CS</span>
                </div>

                <div className="im-eval-details">
                  <p><strong>Skills:</strong> React, Three.js, JavaScript, Python, ML</p>
                  <p><strong>Cover Note:</strong> "Eager to apply 3D WebGL skills to enterprise dashboards."</p>
                </div>

                <div className="im-eval-actions">
                  <button
                    onClick={() => alert(`✅ ${user.name} shortlisted for ${cand.company}!`)}
                    className="im-eval-btn-accept"
                  >
                    Accept & Shortlist
                  </button>
                  <button
                    onClick={() => alert(`📎 Requested updated resume from ${user.name}`)}
                    className="im-eval-btn-info"
                  >
                    Request More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== APPLICATION MODAL ===== */}
        {selectedInternship && (
          <div className="im-modal-overlay">
            <div className="im-modal">
              <button
                onClick={() => setSelectedInternship(null)}
                className="im-modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="im-modal-title">Apply for {selectedInternship.title}</h3>
              <p className="im-modal-company">{selectedInternship.company}</p>

              <form onSubmit={handleApply} className="im-modal-form">
                <div>
                  <label className="im-modal-label">Cover Letter / Statement of Purpose</label>
                  <textarea
                    required
                    rows={4}
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Explain why you are a great candidate..."
                    className="im-modal-textarea"
                  />
                </div>

                <div>
                  <label className="im-modal-label">CV / Portfolio Link</label>
                  <input
                    type="url"
                    value={cvUrl}
                    onChange={(e) => setCvUrl(e.target.value)}
                    placeholder="https://drive.google.com/file/d/your-resume.pdf"
                    className="im-modal-input"
                  />
                </div>

                <div className="im-modal-profile-box">
                  <p className="im-modal-profile-name">{user.name} ({user.department})</p>
                  <p>{user.email}</p>
                </div>

                <button type="submit" className="im-modal-submit">
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipModule;