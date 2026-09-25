import React, { useState } from 'react';
import { APP_DATA } from '../data/marxismData';

export const FlashcardsSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="flashcards-section" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Ôn tập nhanh</span>
          <h2 className="section-title">Thẻ Lật Thuật Ngữ Thông Minh</h2>
          <p className="section-desc">Bấm vào mặt trước của thẻ để lật xem định nghĩa và kiểm tra trí nhớ</p>
        </div>

        <div className="flashcards-wrapper">
          {APP_DATA.flashcards.map(card => {
            const isFlipped = flippedCards[card.id];
            return (
              <div
                key={card.id}
                className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleFlip(card.id)}
              >
                <div className="flashcard-inner">
                  <div className="flashcard-front">
                    <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Thuật ngữ / Câu hỏi
                    </span>
                    <h4 style={{ fontSize: '1.1rem', lineHeight: 1.4 }}>{card.term}</h4>
                    <small style={{ marginTop: '1.5rem', color: '#64748b' }}>
                      <i className="fas fa-sync-alt"></i> Bấm để lật thẻ
                    </small>
                  </div>
                  <div className="flashcard-back">
                    <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Định nghĩa / Đáp án
                    </span>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>{card.definition}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
