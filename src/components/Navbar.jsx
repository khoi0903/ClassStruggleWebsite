import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'mac-contributions', label: '3 Đóng góp', icon: 'fas fa-feather-alt' },
    { id: 'class-definition', label: 'Giai cấp', icon: 'fas fa-users' },
    { id: 'class-origin', label: 'Nguồn gốc', icon: 'fas fa-stream' },
    { id: 'class-struggle', label: 'Đấu tranh GC', icon: 'fas fa-fist-raised' },
    { id: 'proletariat', label: 'GC Vô sản', icon: 'fas fa-hammer' },
    { id: 'vietnam', label: 'Việt Nam', icon: 'fas fa-flag' },
    { id: 'mindmap-section', label: 'Sơ đồ tư duy', icon: 'fas fa-project-diagram' },
    { id: 'quiz-section', label: 'Trắc nghiệm', icon: 'fas fa-gamepad', isCta: true },
  ];

  return (
    <header className="navbar">
      <a href="#" className="navbar-brand">
        <div className="brand-icon">
          <i className="fas fa-landmark"></i>
        </div>
        <span>
          MÁC - LÊNIN <small style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: 600 }}>INTERACTIVE</small>
        </span>
      </a>

      <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav-link ${item.isCta ? 'nav-cta' : ''} ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className={item.icon}></i> {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="mobile-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
    </header>
  );
};
