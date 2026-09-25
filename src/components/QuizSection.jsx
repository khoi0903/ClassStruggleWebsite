import React, { useState } from 'react';
import { APP_DATA } from '../data/marxismData';

export const QuizSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const playBeepSound = (freq, duration) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restrictions catch
    }
  };

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const qData = APP_DATA.quizQuestions[currentIndex];
    if (idx === qData.answer) {
      setUserScore(prev => prev + 10);
      playBeepSound(600, 0.15);
    } else {
      playBeepSound(250, 0.25);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < APP_DATA.quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setUserScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  const qData = APP_DATA.quizQuestions[currentIndex];
  const maxScore = APP_DATA.quizQuestions.length * 10;
  const percentage = Math.round((userScore / maxScore) * 100);

  return (
    <section id="quiz-section" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Củng cố kiến thức</span>
          <h2 className="section-title">Trắc Nghiệm Tương Tác Tính Điểm</h2>
          <p className="section-desc">10 câu hỏi trắc nghiệm bám sát nội dung bài học trang 179 - 198</p>
        </div>

        <div className="quiz-card">
          {!isCompleted ? (
            <>
              <div className="quiz-header">
                <div className="quiz-question-num">
                  Câu {currentIndex + 1} / {APP_DATA.quizQuestions.length}
                </div>
                <div className="quiz-score-badge">Điểm: {userScore}</div>
              </div>

              <div className="quiz-question-text">{qData.question}</div>

              <div className="quiz-options">
                {qData.options.map((opt, idx) => {
                  let statusClass = '';
                  if (isAnswered) {
                    if (idx === qData.answer) statusClass = 'correct';
                    else if (idx === selectedOption) statusClass = 'incorrect';
                  }

                  return (
                    <button
                      key={idx}
                      className={`quiz-option-btn ${statusClass}`}
                      onClick={() => handleSelectOption(idx)}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: '1px solid rgba(255,255,255,0.2)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 700
                        }}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="quiz-explanation">
                  <strong>Giải thích:</strong> {qData.explanation}
                </div>
              )}

              {isAnswered && (
                <div style={{ textAlign: 'right' }}>
                  <button className="btn btn-primary" onClick={handleNextQuestion}>
                    {currentIndex < APP_DATA.quizQuestions.length - 1
                      ? 'Câu kế tiếp →'
                      : 'Xem kết quả chung cuộc 🎉'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>
                Hoàn thành Bài Trắc Nghiệm!
              </h3>
              <p style={{ color: '#94a3b8', margin: '0.5rem 0 1.5rem' }}>
                Bạn đã nắm vững lý luận Giai cấp & Đấu tranh giai cấp
              </p>

              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#f59e0b', fontFamily: "'Space Grotesk', sans-serif" }}>
                {userScore} / {maxScore} <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>({percentage}%)</span>
              </div>

              <p style={{ color: '#e2e8f0', maxWidth: '500px', margin: '1.5rem auto', lineHeight: 1.6 }}>
                {percentage >= 80
                  ? '🌟 Tuyệt vời! Bạn có hiểu biết xuất sắc về kiến thức Triết học Mác - Lênin.'
                  : '👍 Khá tốt! Bạn có thể xem lại sơ đồ tư duy và các thẻ lật để đạt điểm tuyệt đối.'}
              </p>

              <button className="btn btn-primary" onClick={handleResetQuiz} style={{ marginTop: '1rem' }}>
                <i className="fas fa-redo"></i> Làm lại bài trắc nghiệm
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
