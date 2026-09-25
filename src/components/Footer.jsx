import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p style={{ fontWeight: 600, color: '#f1f5f9', marginBottom: '0.4rem' }}>
          SẢN PHẨM SÁNG TẠO GIÁO TRÌNH TRIẾT HỌC MÁC - LÊNIN
        </p>
        <p>
          Nội dung bài học: <strong>Chương II - Giai cấp và Đấu tranh giai cấp (Trang 179 - 198)</strong>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
          Giao diện Web tương tác sinh động với React 18, Vite, CSS3 Glassmorphism, Mindmap Engine & Quiz System.
        </p>
      </div>
    </footer>
  );
};
