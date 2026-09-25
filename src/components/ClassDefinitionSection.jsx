import React, { useState } from 'react';
import { APP_DATA } from '../data/marxismData';

export const ClassDefinitionSection = () => {
  const [selectedId, setSelectedId] = useState(APP_DATA.leninCharacteristics[0].id);

  const selectedChar = APP_DATA.leninCharacteristics.find(c => c.id === selectedId);

  return (
    <section id="class-definition" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Khái niệm trung tâm</span>
          <h2 className="section-title">1.1. Giai Cấp & Định Nghĩa Kinh Điển</h2>
          <p className="section-desc">Định nghĩa khoa học của V.I.Lênin trong tác phẩm <em>"Sáng kiến vĩ đại"</em></p>
        </div>

        <div className="quote-box">
          <p>
            "Người ta gọi là giai cấp, những tập đoàn người to lớn, khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, về quan hệ của họ đối với những tư liệu sản xuất, về vai trò của họ trong tổ chức lao động xã hội, và do đó khác nhau về cách thức hưởng thụ và phần đại nhỏ hay nhiều mà họ được hưởng..."
          </p>
          <div className="quote-author">
            <i className="fas fa-quote-left"></i> V.I. LÊNIN — Tác phẩm "Sáng kiến vĩ đại" (Toàn tập, t.39)
          </div>
        </div>

        <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          4 Đặc Trưng Cơ Bản của Giai Cấp
        </h3>

        <div className="char-grid">
          {APP_DATA.leninCharacteristics.map((char) => (
            <div
              key={char.id}
              className={`glass-card char-card ${selectedId === char.id ? 'active' : ''}`}
              onClick={() => setSelectedId(char.id)}
            >
              <div className="char-icon"><i className={char.icon}></i></div>
              <div className="char-title">{char.title}</div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>{char.short}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Viewer */}
        {selectedChar && (
          <div className="glass-card" style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--accent-gold)' }}>
            <h4 style={{ color: '#f59e0b', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
              {selectedChar.title}
            </h4>
            <p style={{ color: '#f1f5f9', fontSize: '1rem', lineHeight: 1.7 }}>
              {selectedChar.full}
            </p>
          </div>
        )}

        {/* 3 Economic Relations visual breakdown */}
        <div className="relations-wrapper">
          <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '0.5rem', textAlign: 'center' }}>
            <i className="fas fa-network-wired"></i> 3 Mối Quan Hệ Kinh Tế - Vật Chất Quy Định Địa Vị Giai Cấp
          </h3>
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.95rem' }}>
            Trong đó Quan hệ Sở hữu giữ vai trò chi phối và quyết định nhất
          </p>

          <div className="relations-grid">
            <div className="relation-card primary">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                <i className="fas fa-key"></i> 1. Quan hệ Sở hữu TLSX
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
                Quyết định tập đoàn nào nắm quyền sở hữu các tư liệu sản xuất chủ yếu của xã hội. Đây là yếu tố cốt lõi quyết định địa vị thống trị hay bị trị.
              </p>
            </div>
            <div className="relation-card">
              <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                <i className="fas fa-tasks"></i> 2. Quan hệ Tổ chức Quản lý
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
                Quy định tập đoàn nào giữ quyền điều hành, phân công lao động và tổ chức quá trình sản xuất xã hội.
              </p>
            </div>
            <div className="relation-card">
              <h4 style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                <i className="fas fa-coins"></i> 3. Quan hệ Phân phối của cải
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
                Quy định cách thức và phần của cải xã hội mà mỗi tập đoàn được hưởng thụ (thặng dư hay tiền công tối thiểu).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // End of ClassDefinitionSection component
};
