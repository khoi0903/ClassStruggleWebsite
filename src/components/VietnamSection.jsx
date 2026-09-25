import React from 'react';
import { APP_DATA } from '../data/marxismData';
import vietnamImage from '../assets/giaicapvietnamhiennay.png';

export const VietnamSection = () => {
  return (
    <section id="vietnam" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag" style={{ color: 'var(--accent-red)' }}>
            <i className="fas fa-star"></i> Vận dụng tại Việt Nam
          </span>
          <h3 className="section-title">Đặc Điểm Đấu Tranh Giai Cấp Ở Việt Nam Hiện Nay</h3>
        </div>

        <div className="feature-visual feature-visual-wide">
          <img
            src={vietnamImage}
            alt="Đặc điểm đấu tranh giai cấp ở Việt Nam hiện nay"
          />
        </div>

        <div className="vn-highlight-grid">
          {APP_DATA.vietnamFeatures.map((item, idx) => (
            <div key={idx} className="vn-card">
              <div className="vn-card-title">
                <i className="fas fa-flag"></i> {item.title}
              </div>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
