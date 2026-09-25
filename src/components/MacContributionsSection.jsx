import React from 'react';
import { APP_DATA } from '../data/marxismData';

export const MacContributionsSection = () => {
  return (
    <section id="mac-contributions" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nền tảng lý luận</span>
          <h2 className="section-title">3 Đóng góp Lịch sử của C.Mác (Thư gửi Weydemeyer 1852)</h2>
          <p className="section-desc">
            Mác đã chứng minh rằng sự xuất hiện và mất đi của các giai cấp gắn liền với những điều kiện kinh tế - sản xuất nhất định.
          </p>
        </div>

        <div className="feature-visual feature-visual-wide">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
            alt="Thời kỳ công nghiệp và hình thành giai cấp"
          />
        </div>

        <div className="mac-grid">
          {APP_DATA.macContributions.map(item => (
            <div key={item.id} className="glass-card mac-card">
              <div className="mac-badge">0{item.id}</div>
              <h3>{item.title}</h3>
              <p style={{ color: '#f1f5f9', fontWeight: 500, marginBottom: '0.8rem' }}>"{item.content}"</p>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
