// src/components/lms/QuizBuilder.jsx
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './QuizBuilder.css';  // ← CSS IMPORT

const QuizBuilder = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Which tag is used for links in HTML?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      id: 3,
      question: "What is the correct CSS syntax?",
      options: [
        "body {color: black;}",
        "{body: color=black;}",
        "body:color=black;",
        "{body; color: black;}"
      ],
      correct: 0
    }
  ];

  const handleSelect = (optionIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: optionIndex });
  };

  const handleSubmit = () => setShowResults(true);

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) correct++;
    });
    return { correct, total: questions.length };
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score.correct >= score.total * 0.6;

    return (
      <div className="qb-container">
        <div className="qb-content">
          <div className="qb-results">
            <h1 className="qb-results-title">📊 Quiz Results</h1>
            <div className={`qb-results-score ${passed ? 'qb-results-passed' : 'qb-results-failed'}`}>
              {score.correct}/{score.total}
            </div>
            <p className="qb-results-message">
              {passed ? '🎉 Congratulations! You passed!' : '😅 Keep practicing! Try again.'}
            </p>
            <div className="qb-results-actions">
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setSelectedAnswers({});
                }}
                className="qb-results-retry"
              >
                Retry Quiz
              </button>
              <button onClick={() => navigate('/courses/1')} className="qb-results-back">
                Back to Course
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="qb-container">
      <div className="qb-content">
        <button onClick={() => navigate('/courses/1')} className="qb-back-btn">
          <ArrowLeft className="w-4 h-4" /> Back to Course
        </button>

        <div className="qb-card">
          <div className="qb-header">
            <h1 className="qb-title">📝 Quiz</h1>
            <span className="qb-counter">Question {currentQuestion + 1} of {questions.length}</span>
          </div>

          <div className="qb-progress">
            <div className="qb-progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
          </div>

          <h2 className="qb-question">{question.question}</h2>

          <div className="qb-options">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`qb-option ${selectedAnswers[currentQuestion] === idx ? 'qb-option-selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="qb-nav">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              className="qb-nav-btn qb-nav-btn-prev"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button onClick={handleSubmit} className="qb-nav-btn qb-nav-btn-submit">
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                className="qb-nav-btn qb-nav-btn-next"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizBuilder;