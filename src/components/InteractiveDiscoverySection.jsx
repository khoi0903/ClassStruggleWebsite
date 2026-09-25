import React, { useState } from 'react';

const discoveryItems = [
  {
    id: 'origin',
    badge: 'Bước 1',
    title: 'Xã hội nguyên thủy',
    icon: '🏛️',
    accent: 'red',
    summary: 'Sản xuất còn thấp, công hữu về tư liệu sản xuất, chưa có giai cấp rõ rệt.',
    stats: ['Lực lượng sản xuất thấp', 'Công hữu nguyên thủy', 'Chưa có tư hữu'],
    detail: 'Khi năng suất lao động còn thấp, mọi người cùng sản xuất và cùng chia sẻ tài nguyên. Sự chênh lệch về giàu nghèo chưa hình thành nên giai cấp chưa xuất hiện.'
  },
  {
    id: 'surplus',
    badge: 'Bước 2',
    title: 'Của dư và tư hữu',
    icon: '⚙️',
    accent: 'gold',
    summary: 'Khi công cụ sản xuất phát triển, xã hội sản sinh ra của cải dư thừa và tư hữu.',
    stats: ['Công cụ kim loại', 'Năng suất tăng', 'Ra đời tư hữu'],
    detail: 'Từ sự phát triển của lực lượng sản xuất, xã hội xuất hiện của dư. Người có quyền kiểm soát tư liệu sản xuất bắt đầu chiếm đoạt phần thặng dư, dẫn tới phân hóa xã hội.'
  },
  {
    id: 'class',
    badge: 'Bước 3',
    title: 'Giai cấp xuất hiện',
    icon: '👥',
    accent: 'cyan',
    summary: 'Sự phân hóa giàu nghèo hình thành hai phía đối kháng: bóc lột và bị bóc lột.',
    stats: ['Chủ nô - nô lệ', 'Địa chủ - nông dân', 'Tư sản - vô sản'],
    detail: 'Đó là thời điểm xã hội bắt đầu có giai cấp. Những người nắm tư liệu sản xuất và quyền lực chính trị trở thành giai cấp thống trị, còn những người mất quyền sở hữu trở thành giai cấp bị trị.'
  },
  {
    id: 'struggle',
    badge: 'Bước 4',
    title: 'Đấu tranh giai cấp',
    icon: '⚔️',
    accent: 'purple',
    summary: 'Mâu thuẫn lợi ích giữa các giai cấp là động lực thúc đẩy lịch sử phát triển.',
    stats: ['Đấu tranh kinh tế', 'Đấu tranh chính trị', 'Đấu tranh tư tưởng'],
    detail: 'Đấu tranh giai cấp không chỉ là xung đột căng thẳng mà còn là cơ chế làm thay đổi quan hệ sản xuất và hình thành xã hội mới khi mâu thuẫn đạt tới độ cao nhất.'
  }
];

export const InteractiveDiscoverySection = () => {
  const [activeId, setActiveId] = useState(discoveryItems[0].id);
  const [showDetail, setShowDetail] = useState(false);

  const activeItem = discoveryItems.find((item) => item.id === activeId) || discoveryItems[0];

  return (
    <section id="interactive-section" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Học theo kiểu game</span>
          <h2 className="section-title">Khám Phá Lịch Sử Giai Cấp</h2>
          <p className="section-desc">Bấm vào từng mảnh để mở thông tin và đi từ giai đoạn nguyên thủy tới đấu tranh giai cấp hiện đại.</p>
        </div>

        <div className="interactive-layout">
          <div className="hotspot-list">
            {discoveryItems.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`hotspot-card ${activeId === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveId(item.id);
                  setShowDetail(false);
                }}
              >
                <span className="hotspot-icon" aria-hidden="true">{item.icon}</span>
                <span className="hotspot-badge">{item.badge}</span>
                <span className="hotspot-title">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="story-panel">
            <div className={`story-visual story-${activeItem.accent}`}>
              <div className="visual-core">{activeItem.icon}</div>
              <div className="visual-ring ring-one"></div>
              <div className="visual-ring ring-two"></div>
            </div>

            <div className="story-content">
              <span className="story-badge">{activeItem.badge}</span>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.summary}</p>

              <div className="story-stats">
                {activeItem.stats.map((stat) => (
                  <span key={stat} className="story-stat">{stat}</span>
                ))}
              </div>

              <button
                type="button"
                className="btn btn-secondary story-toggle"
                onClick={() => setShowDetail((prev) => !prev)}
              >
                {showDetail ? 'Ẩn chi tiết' : 'Bấm xem thêm'}
              </button>

              {showDetail && (
                <div className="story-detail">
                  <p>{activeItem.detail}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDiscoverySection;
