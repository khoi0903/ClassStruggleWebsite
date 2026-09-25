import React, { useState } from 'react';
import { APP_DATA } from '../data/marxismData';
import proletarianStruggleImage from '../assets/dautranh.png';

export const ProletarianStruggleSection = () => {
  const [activeTab, setActiveTab] = useState('tab-forms');

  return (
    <section id="proletariat" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sứ mệnh lịch sử</span>
          <h2 className="section-title">1.3. Đấu Tranh Giai Cấp Của Giai Cấp Vô Sản</h2>
          <p className="section-desc">Cuộc đấu tranh giai cấp cuối cùng trong lịch sử hướng tới xã hội không giai cấp</p>
        </div>

        <div className="feature-visual feature-visual-wide">
          <img
            src={proletarianStruggleImage}
            alt="Giai cấp vô sản và phong trào công nhân"
          />
        </div>

        <div className="struggle-tabs">
          <button
            className={`tab-btn ${activeTab === 'tab-forms' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab-forms')}
          >
            3 Hình thức ĐTGC (Trước chính quyền)
          </button>
          <button
            className={`tab-btn ${activeTab === 'tab-transition' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab-transition')}
          >
            Thời kỳ Quá độ lên CNXH
          </button>
        </div>

        {activeTab === 'tab-forms' && (
          <div className="tab-pane active">
            <div className="forms-grid">
              {APP_DATA.proletarianStruggleForms.map((form, idx) => (
                <div key={idx} className={`glass-card form-card ${idx === 1 ? 'highest' : ''}`}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: idx === 1 ? '#ef4444' : '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {form.badge}
                  </span>
                  <h3 style={{ color: '#fff', fontSize: '1.25rem', margin: '0.5rem 0' }}>{form.name}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginBottom: '1rem' }}>{form.desc}</p>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '8px', borderLeft: `2px solid ${idx === 1 ? '#ef4444' : '#f59e0b'}`, fontSize: '0.85rem', color: '#94a3b8' }}>
                    <strong>Vai trò:</strong> {form.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tab-transition' && (
          <div className="tab-pane active">
            <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-emerald)' }}>
              <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                Đặc điểm Đấu tranh Giai cấp trong Thời kỳ Quá độ
              </h3>
              <p style={{ color: '#e2e8f0', lineHeight: 1.7, marginBottom: '1rem' }}>
                Sau khi giành được chính quyền, giai cấp vô sản trở thành giai cấp lãnh đạo xã hội. Mục tiêu lúc này là xây dựng thành công chủ nghĩa xã hội trên mọi lĩnh vực.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  <strong style={{ color: 'var(--accent-gold)' }}>Nhiệm vụ 1: Bảo vệ chính quyền</strong>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.3rem' }}>Bảo vệ vững chắc thành quả cách mạng, đập tan mọi âm mưu chống phá của các thế lực thù địch.</p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  <strong style={{ color: 'var(--accent-cyan)' }}>Nhiệm vụ 2: Cải tạo & Xây dựng</strong>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.3rem' }}>Cải tạo xã hội cũ, xây dựng lực lượng sản xuất hiện đại và phát triển kinh tế xã hội mới (Nhiệm vụ cơ bản, quyết định nhất).</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
