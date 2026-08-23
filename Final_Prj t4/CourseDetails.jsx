// src/components/lms/CourseDetails.jsx
import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, CheckCircle, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './CourseDetails.css';  // ← CSS IMPORT

const CourseDetails = () => {
  const navigate = useNavigate();
  const [course] = useState({
    id: 1,
    title: "Web Development Bootcamp",
    teacher: "Dr. Hassan",
    level: "Intermediate",
    students: 30,
    progress: 75,
    rating: 4.8,
    reviews: 120,
    description: "Learn HTML, CSS, JavaScript, and React from scratch.",
    modules: [
      {
        id: 1,
        title: "Module 1: HTML & CSS Fundamentals",
        lessons: [
          { id: 1, title: "Introduction to HTML", completed: true, duration: "15m" },
          { id: 2, title: "CSS Styling Basics", completed: true, duration: "20m" },
          { id: 3, title: "Building Your First Page", completed: false, duration: "30m" }
        ]
      },
      {
        id: 2,
        title: "Module 2: JavaScript Essentials",
        lessons: [
          { id: 4, title: "JavaScript Variables & Functions", completed: false, duration: "25m" },
          { id: 5, title: "DOM Manipulation", completed: false, duration: "20m" },
          { id: 6, title: "JavaScript Quiz", completed: false, duration: "15m", locked: true }
        ]
      }
    ]
  });

  return (
    <div className="cd-container">
      <div className="cd-content">
        <button onClick={() => navigate('/lms')} className="cd-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </button>

        <div className="cd-header">
          <h1 className="cd-title">{course.title}</h1>
          <div className="cd-meta-grid">
            <div>
              <p className="cd-meta-label">Teacher</p>
              <p className="cd-meta-value">{course.teacher}</p>
            </div>
            <div>
              <p className="cd-meta-label">Level</p>
              <p className="cd-meta-value">{course.level}</p>
            </div>
            <div>
              <p className="cd-meta-label">Students</p>
              <p className="cd-meta-value">{course.students}</p>
            </div>
            <div>
              <p className="cd-meta-label">Rating</p>
              <p className="cd-meta-value cd-rating">⭐ {course.rating} ({course.reviews} reviews)</p>
            </div>
          </div>
          <p className="cd-description">{course.description}</p>
          <div className="cd-progress">
            <ProgressBar value={course.progress} label="Course Progress" />
          </div>
        </div>

        <h2 className="cd-curriculum-title">Course Curriculum</h2>
        {course.modules.map((module) => (
          <div key={module.id} className="cd-module">
            <h3 className="cd-module-title">{module.title}</h3>
            <div className="cd-lesson-list">
              {module.lessons.map((lesson) => (
                <div key={lesson.id} className="cd-lesson-item">
                  <div className="cd-lesson-left">
                    {lesson.completed ? (
                      <CheckCircle className="cd-lesson-icon cd-lesson-icon-completed" />
                    ) : lesson.locked ? (
                      <Lock className="cd-lesson-icon cd-lesson-icon-locked" />
                    ) : (
                      <PlayCircle className="cd-lesson-icon cd-lesson-icon-unlocked" />
                    )}
                    <span className={`cd-lesson-title ${lesson.locked ? 'cd-lesson-title-locked' : ''}`}>
                      {lesson.title}
                    </span>
                  </div>
                  <div className="cd-lesson-right">
                    <span className="cd-lesson-duration">{lesson.duration}</span>
                    {!lesson.locked && (
                      <button onClick={() => navigate(`/lessons/${lesson.id}`)} className="cd-lesson-start-btn">
                        {lesson.completed ? 'Review' : 'Start'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;