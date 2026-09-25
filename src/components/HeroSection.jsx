import React from 'react';
import heroPoster from '../assets/anhchude.png';

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-poster">
          <img
            src={heroPoster}
            alt="Ảnh chủ đề bài học về đấu tranh giai cấp"
          />
        </div>

        <div className="hero-badge">
          <i className="fas fa-book-open"></i> Triết Học Mác - Lênin | Chương II: Giai Cấp & Dân Tộc
        </div>

        <h1 className="hero-title">
          LÝ LUẬN VỀ <span className="gradient-text-red">GIAI CẤP</span><br />
          VÀ <span className="gradient-text-gold">ĐẤU TRANH GIAI CẤP</span>
        </h1>

        <p className="hero-subtitle">
          Khám phá bản chất, nguồn gốc lịch sử, quy luật đấu tranh giai cấp và sứ mệnh lịch sử của giai cấp vô sản thông qua giao diện tương tác trực quan 3D, Mindmap và Thẻ lật kiến thức.
        </p>

        <div className="hero-actions">
          <a href="#mindmap-section" className="btn btn-primary">
            <i className="fas fa-project-diagram"></i> Khám phá Sơ đồ tư duy 3D
          </a>
          <a href="#quiz-section" className="btn btn-secondary">
            <i className="fas fa-graduation-cap"></i> Làm bài trắc nghiệm ngay
          </a>
        </div>

        {/* Quick Summary Stats Cards */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">03</div>
            <div className="stat-label">Đóng góp lịch sử kinh điển của C.Mác (1852)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">04</div>
            <div className="stat-label">Đặc trưng cơ bản của Giai cấp (V.I.Lênin)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">03</div>
            <div className="stat-label">Hình thức đấu tranh của Giai cấp vô sản</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">02</div>
            <div className="stat-label">Nhiệm vụ chiến lược ở Việt Nam hiện nay</div>
          </div>
        </div>
      </div>
    </section>
  );
};
