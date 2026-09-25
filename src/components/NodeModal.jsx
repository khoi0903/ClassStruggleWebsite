import React from 'react';

export const NodeModal = ({ node, onClose }) => {
  if (!node) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <h3 style={{ color: 'var(--accent-gold)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem' }}>
          {node.label}
        </h3>
        <div style={{ marginTop: '1rem' }}>
          <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
            Phân mục: {node.category}
          </span>
          <p style={{ marginTop: '1.2rem', lineHeight: 1.7, color: '#cbd5e1', fontSize: '1rem' }}>
            Nội dung chi tiết cho nhánh <strong>"{node.label}"</strong> thuộc giáo trình Triết học Mác - Lênin (Trang 179-198).
          </p>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid #ef4444', padding: '1rem', marginTop: '1rem', borderRadius: '4px' }}>
            <small style={{ color: '#94a3b8' }}>Ghi chú giảng dạy:</small>
            <p style={{ fontSize: '0.92rem', color: '#f1f5f9', marginTop: '0.3rem' }}>
              Nội dung này nhấn mạnh tính quy luật tất yếu khách quan của lịch sử, từ sự thay đổi về phương thức sản xuất dẫn đến sự chuyển biến của các hình thái kinh tế - xã hội.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
