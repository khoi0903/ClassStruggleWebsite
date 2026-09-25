import React from 'react';
import { APP_DATA } from '../data/marxismData';
import classOriginImage from '../assets/lichsugiaicap.png';

export const ClassOriginSection = () => {
  return (
    <section id="class-origin" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tiến trình Lịch sử</span>
          <h2 className="section-title">Nguồn Gốc Lịch Sử Hình Thành Giai Cấp</h2>
          <p className="section-desc">Giai cấp không tồn tại vĩnh viễn mà là sản phẩm tất yếu của quá trình phát triển sản xuất vật chất</p>
        </div>

        <div className="timeline">
          {APP_DATA.originTimeline.map((step, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-step">{step.stage}</div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="feature-visual feature-visual-wide class-origin-visual">
          <img
            src={classOriginImage}
            alt="Lịch sử hình thành giai cấp"
          />
        </div>
      </div>
    </section>
  );
};
