// src/components/lms/LessonPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, Download, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LessonPage.css';  // ← CSS IMPORT

const LessonPage = () => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="lp-container">
      <div className="lp-content">
        <div className="lp-nav">
          <button onClick={() => navigate('/courses/1')} className="lp-nav-back">
            <ArrowLeft className="w-4 h-4" /> Back to Course
          </button>
          <button onClick={() => navigate('/lessons/2')} className="lp-nav-next">
            Next Lesson →
          </button>
        </div>

        <div className="lp-card">
          <div className="lp-video">
            <div className="lp-video-content">
              <PlayCircle className="lp-video-icon" />
              <p className="lp-video-title">📺 Lesson Video Placeholder</p>
              <p className="lp-video-subtitle">(Real video will appear here)</p>
            </div>
          </div>

          <div className="lp-body">
            <h1 className="lp-lesson-title">Introduction to HTML</h1>
            <p className="lp-lesson-desc">
              In this lesson, you'll learn the basics of HTML, the building blocks of the web.
            </p>

            <div className="lp-resources">
              <h4 className="lp-resources-title">📎 Resources</h4>
              <button className="lp-resource-btn">
                <Download className="w-4 h-4" /> Download Slides (PDF)
              </button>
              <button className="lp-resource-btn">
                <Download className="w-4 h-4" /> Download Notes (PDF)
              </button>
            </div>

            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`lp-complete-btn ${isCompleted ? 'lp-complete-btn-completed' : 'lp-complete-btn-default'}`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle className="w-4 h-4" /> Lesson Completed
                </>
              ) : (
                '✅ Mark as Complete'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;