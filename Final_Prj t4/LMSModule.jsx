// src/components/lms/LMSModule.jsx
import React, { useState } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  PlayCircle,
  FileText,
  HelpCircle,
  Code,
  CheckCircle,
  Award,
  Clock,
  Search,
  ArrowLeft,
  Download,
  ChevronRight
} from 'lucide-react';
import './LMSModule.css';  // ← CSS IMPORT

export const LMSModule = () => {
  const navigate = useNavigate();

  const [courses] = useState([
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, and React from scratch. Build real-world projects.",
      category: "Technology",
      level: "Beginner",
      durationHours: 40,
      rating: 4.8,
      instructor: "Dr. Hassan",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      modules: [
        {
          id: 1,
          title: "Module 1: HTML & CSS Fundamentals",
          lessons: [
            { id: 1, title: "Introduction to HTML", type: "video", duration: 15, isCompleted: false },
            { id: 2, title: "CSS Styling Basics", type: "video", duration: 20, isCompleted: false },
            { id: 3, title: "Building Your First Page", type: "coding_lab", duration: 30, isCompleted: false }
          ]
        },
        {
          id: 2,
          title: "Module 2: JavaScript Essentials",
          lessons: [
            { id: 4, title: "JavaScript Variables & Functions", type: "video", duration: 25, isCompleted: false },
            { id: 5, title: "DOM Manipulation", type: "video", duration: 20, isCompleted: false },
            { id: 6, title: "JavaScript Quiz", type: "quiz", duration: 15, isCompleted: false }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Master data analysis, visualization, and machine learning with Python.",
      category: "Technology",
      level: "Intermediate",
      durationHours: 50,
      rating: 4.9,
      instructor: "Prof. Ahmed",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      modules: []
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn design principles, Figma, and create stunning user interfaces.",
      category: "Design",
      level: "Beginner",
      durationHours: 35,
      rating: 4.7,
      instructor: "Sana Malik",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      modules: []
    }
  ]);

  const [myEnrollments, setMyEnrollments] = useState([1]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState('');

  const categories = ['All', 'Technology', 'Leadership & Exam Prep', 'Design', 'Business'];

  const enrollCourse = (courseId) => {
    if (!myEnrollments.includes(courseId)) {
      setMyEnrollments([...myEnrollments, courseId]);
      alert('✅ Successfully enrolled in course!');
    }
  };

  const generateCertificateQR = async (courseTitle) => {
    try {
      const code = `IQ-CERT-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const verifyUrl = `https://inquisitors.uet.edu.pk/verify?code=${code}`;
      const url = await QRCode.toDataURL(verifyUrl, { width: 200, margin: 2 });
      setQrDataUrl(url);
      setShowCertificateModal(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      console.error(err);
    }
  };

  const user = { name: "Bisma" };

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  // ===== COURSE DETAILS VIEW =====
  if (selectedCourse) {
    const isEnrolled = myEnrollments.includes(selectedCourse.id);
    const totalLessons = selectedCourse.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const completedCount = selectedCourse.modules.reduce(
      (acc, m) => acc + m.lessons.filter((l) => l.isCompleted).length,
      0
    );
    const progressPercent = Math.round((completedCount / (totalLessons || 1)) * 100);

    return (
      <div className="lms-container">
        <div className="lms-content">
          <button
            onClick={() => { setSelectedCourse(null); setActiveLesson(null); }}
            className="lms-back-btn"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </button>

          <div className="lms-detail-header">
            <div className="lms-detail-flex">
              <div className="lms-detail-info">
                <span className="lms-detail-category">
                  {selectedCourse.category} • {selectedCourse.level}
                </span>
                <h1 className="lms-detail-title">{selectedCourse.title}</h1>
                <p className="lms-detail-desc">{selectedCourse.description}</p>
                <div className="lms-detail-meta">
                  <span>Instructor: <strong>{selectedCourse.instructor}</strong></span>
                  <span>Duration: <strong>{selectedCourse.durationHours} Hours</strong></span>
                  <span>Rating: <strong className="text-amber-400">★ {selectedCourse.rating}</strong></span>
                </div>
              </div>

              <div className="lms-detail-progress">
                <div className="lms-detail-progress-box">
                  <p className="lms-detail-progress-label">Progress</p>
                  <div className="lms-detail-progress-bar">
                    <div className="lms-detail-progress-fill" style={{ width: `${progressPercent}%` }} />
                  </div>
                  <p className="lms-detail-progress-text">{progressPercent}% Complete</p>

                  {!isEnrolled ? (
                    <button onClick={() => enrollCourse(selectedCourse.id)} className="lms-detail-enroll-btn">
                      Enroll Now
                    </button>
                  ) : progressPercent >= 100 ? (
                    <button onClick={() => generateCertificateQR(selectedCourse.title)} className="lms-detail-cert-btn">
                      🎓 Claim Certificate
                    </button>
                  ) : (
                    <p className="lms-detail-progress-message">Complete all lessons to get certificate</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lms-modules-grid">
            <div className="lms-modules-sidebar">
              <h3 className="lms-modules-title">Course Curriculum</h3>
              {selectedCourse.modules.map((mod) => (
                <div key={mod.id} className="lms-module-box">
                  <div className="lms-module-header">
                    <h4>{mod.title}</h4>
                  </div>
                  <div className="lms-module-lessons">
                    {mod.lessons.map((les) => (
                      <button
                        key={les.id}
                        onClick={() => setActiveLesson(les)}
                        className={`lms-module-lesson ${activeLesson?.id === les.id ? 'lms-module-lesson-active' : ''}`}
                      >
                        <div className="lms-module-lesson-left">
                          <span className="lms-module-lesson-icon">
                            {les.isCompleted ? (
                              <CheckCircle className="lms-module-lesson-check" />
                            ) : (
                              <PlayCircle className="lms-module-lesson-icon" />
                            )}
                          </span>
                          <span>{les.title}</span>
                        </div>
                        <span className="lms-module-lesson-duration">{les.duration}m</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="lms-lesson-content">
              {activeLesson ? (
                <div>
                  <div className="lms-lesson-header">
                    <div className="lms-lesson-header-left">
                      <span>Active Lesson</span>
                      <h3>{activeLesson.title}</h3>
                    </div>
                    <span className="lms-lesson-header-time">
                      <Clock className="w-3.5 h-3.5" /> {activeLesson.duration} Mins
                    </span>
                  </div>
                  <div className="lms-lesson-body">
                    {activeLesson.type === 'video' && (
                      <div className="lms-lesson-video">
                        <img src={selectedCourse.thumbnail} alt="Video poster" />
                        <button
                          onClick={() => alert(`Playing recorded HD lecture: ${activeLesson.title}`)}
                          className="lms-lesson-video-btn"
                        >
                          <PlayCircle className="fill-slate-950" />
                        </button>
                      </div>
                    )}

                    {activeLesson.type === 'quiz' && (
                      <div className="lms-lesson-quiz">
                        <h4>Quiz Assessment: JavaScript Fundamentals</h4>
                        <p>Question 1 of 5: What is the output of `typeof NaN` in JavaScript?</p>
                        <div className="lms-lesson-quiz-options">
                          {['A) "number"', 'B) "NaN"', 'C) "undefined"', 'D) "object"'].map((opt, idx) => (
                            <label key={idx}>
                              <input type="radio" name="quiz_opt" defaultChecked={idx === 0} />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                        <button
                          onClick={() => alert('Quiz answer submitted! Score: 100%')}
                          className="lms-lesson-quiz-btn"
                        >
                          Submit Quiz Answer
                        </button>
                      </div>
                    )}

                    {activeLesson.type === 'assignment' && (
                      <div className="lms-lesson-assignment">
                        <h4>Assignment Submission Portal</h4>
                        <p>Upload your GitHub repository link and PDF report for evaluation.</p>
                        <input type="text" placeholder="https://github.com/username/project-repo" />
                        <button
                          onClick={() => alert('Assignment successfully submitted to instructor for grading!')}
                          className="lms-lesson-assignment-btn"
                        >
                          Submit Assignment
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="lms-lesson-empty">
                  <PlayCircle className="lms-lesson-empty-icon" />
                  <p className="lms-lesson-empty-text">Select a lesson from the sidebar to begin learning.</p>
                </div>
              )}
            </div>
          </div>

          {/* Certificate Modal */}
          {showCertificateModal && (
            <div className="lms-modal-overlay">
              <div className="lms-modal">
                <div className="lms-modal-icon">
                  <Award />
                </div>
                <h3 className="lms-modal-title">Course Completion Certificate</h3>
                <p className="lms-modal-text">
                  This certifies that <strong>{user.name}</strong> has successfully completed all requirements for:
                </p>
                <p className="lms-modal-course">{selectedCourse.title}</p>
                <div className="lms-modal-qr">
                  {qrDataUrl && <img src={qrDataUrl} alt="Certificate QR Code" />}
                </div>
                <p className="lms-modal-qr-text">Scan QR Code to verify authenticity on Inquisitors Society Registry.</p>
                <div className="lms-modal-actions">
                  <button
                    onClick={() => alert('Certificate downloaded as PDF!')}
                    className="lms-modal-download-btn"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </button>
                  <button
                    onClick={() => setShowCertificateModal(false)}
                    className="lms-modal-close-btn"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ===== CATALOG VIEW =====
  return (
    <div className="lms-container">
      <div className="lms-content">
        <div className="lms-header">
          <div>
            <h1 className="lms-title">
              <GraduationCap className="lms-title-icon" />
              Learning Management System
            </h1>
            <p className="lms-subtitle">Explore courses and earn QR-verified certificates</p>
          </div>
          <div className="lms-search-wrapper">
            <Search className="lms-search-icon" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="lms-search-input"
            />
          </div>
        </div>

        <div className="lms-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`lms-category-btn ${selectedCategory === cat ? 'lms-category-btn-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="lms-grid">
          {filteredCourses.map((course) => {
            const isEnrolled = myEnrollments.includes(course.id);
            return (
              <div key={course.id} className="lms-card">
                <div className="lms-card-image">
                  <img src={course.thumbnail} alt={course.title} />
                </div>
                <div className="lms-card-body">
                  <span className="lms-card-category">{course.category}</span>
                  <h3 className="lms-card-title">{course.title}</h3>
                  <p className="lms-card-desc">{course.description}</p>
                  <div className="lms-card-footer">
                    <span>{course.durationHours}h • {course.level}</span>
                    <span className="lms-card-rating">★ {course.rating}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="lms-card-btn"
                  >
                    {isEnrolled ? '📖 Open Course' : 'View Details'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="lms-empty">
            <p>No courses found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LMSModule;