import React from 'react';
import classStruggleImage from '../assets/dautranhgiaicapvosan.png';

export const ClassStruggleSection = () => {
  return (
    <section id="class-struggle" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Động lực phát triển</span>
          <h2 className="section-title">1.2. Đấu Tranh Giai Cấp & Động Lực Lịch Sử</h2>
          <p className="section-desc">Giải quyết mâu thuẫn không thể điều hòa giữa các giai cấp đối kháng</p>
        </div>

        <div className="feature-visual feature-visual-wide">
          <img
            src={classStruggleImage}
            alt="Đấu tranh giai cấp và các cuộc cách mạng"
          />
        </div>

        <div className="quote-box" style={{ borderLeftColor: 'var(--accent-gold)' }}>
          <p>
            "Lịch sử tất cả các xã hội cho đến ngày nay chỉ là lịch sử đấu tranh giai cấp. Người tự do và người nô lệ, quý tộc và bình dân, chúa đất và nông nô, thợ cả và thợ bạn, nói tóm lại là những kẻ áp bức và những người bị áp bức, luôn luôn đối kháng với nhau..."
          </p>
          <div className="quote-author">
            <i className="fas fa-quote-left"></i> C.MÁC & Ph.ĂNGGHEN — <em>Tuyên ngôn của Đảng Cộng sản (1848)</em>
          </div>
        </div>

        <div className="mac-grid">
          <div className="glass-card">
            <h3 style={{ color: 'var(--accent-red)', marginBottom: '0.5rem' }}>
              <i className="fas fa-balance-scale"></i> Tính Tất Yếu
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
              Xuất phát từ mâu thuẫn kinh tế sâu sắc giữa Lực lượng sản xuất phát triển với Quan hệ sản xuất lỗi thời. Mẫu thuẫn này biểu hiện về mặt xã hội thành cuộc đấu tranh giữa giai cấp bị trị và giai cấp thống trị.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
              <i className="fas fa-rocket"></i> Đòn Bẩy Cách Mạng
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
              Đấu tranh giai cấp đạt tới đỉnh cao dẫn đến Cách mạng xã hội, xóa bỏ quan hệ sản xuất cũ, mở đường cho lực lượng sản xuất mới phát triển, thúc đẩy xã hội bước lên hình thái kinh tế - xã hội cao hơn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
