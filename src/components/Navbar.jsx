import React, { useState, useEffect, useRef } from 'react';
import { Images } from '../assets/images';
import { Sun, Moon, Search, Menu, X, Sparkles, BookOpen, GraduationCap, Phone, Calendar, Compass, Shield, ArrowRight, Heart, Flame, Compass as JyotishIcon, Image, Bell, Newspaper, Award, Flag, Globe } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme, lang, onToggleLang, onOpenSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const isEn = lang === 'en';

  const navItems = [
    { id: 'home', label: isEn ? 'Home Page' : 'मुख्य पृष्ठ', desc: isEn ? 'Institute introduction & overview of activities' : 'संस्थान परिचय एवं गतिविधियों का विहंगम अवलोकन', icon: Compass },
    { id: 'about', label: isEn ? 'About Us' : 'हमारे बारे में', desc: isEn ? 'History, objectives and Guru Parampara' : 'संस्थान का इतिहास, उद्देश्य एवं गुरु परंपरा', icon: Shield },
    { id: 'gurukul', label: isEn ? 'Gurukul' : 'गुरुकुल', desc: isEn ? 'Sanskrit education, Vedas & daily routine' : 'संस्कृत शिक्षा, वेद-शास्त्र, आवासीय एवं दिनचर्या', icon: BookOpen },
    { id: 'gaushala', label: isEn ? 'Gaushala (Cowshed)' : 'गौशाला', desc: isEn ? 'Cow protection, care and Gau Daan' : 'गौसेवा, संरक्षण, संवर्धन एवं गौ दान', icon: Heart },
    { id: 'research', label: isEn ? 'Research' : 'अनुसंधान', desc: isEn ? 'Indian Knowledge Systems & Sanskrit studies' : 'भारतीय ज्ञान परंपरा एवं संस्कृत साहित्य अध्ययन', icon: Sparkles },
    { id: 'sanskar', label: isEn ? 'Rites & Rituals' : 'संस्कार एवं अनुष्ठान', desc: isEn ? 'Rudrabhishek, Yagya, Marriage & Puja' : 'रुद्राभिषेक, हवन, यज्ञ, विवाह एवं पूजन', icon: Flame },
    { id: 'jyotish', label: isEn ? 'Astrology Services' : 'ज्योतिष सेवा', desc: isEn ? 'Horoscope consultation & auspicious timing' : 'जन्म कुंडली परामर्श, मुहूर्त एवं ग्रह शांति', icon: JyotishIcon },
    { id: 'donate', label: isEn ? 'Grants & Donation' : 'सहयोग एवं अनुदान', desc: isEn ? 'Support Gurukul, Gaushala & Annadaan' : 'गुरुकुल, गौशाला एवं निःशुल्क अन्नदान में योगदान', icon: Award },
    { id: 'admission', label: isEn ? 'Admission Process' : 'प्रवेश प्रक्रिया', desc: isEn ? 'Online form & guidelines for Classes 6-12' : 'कक्षा 6 से 12 हेतु आवेदन पत्र एवं नियम', icon: GraduationCap },
    { id: 'gallery', label: isEn ? 'Photo Gallery' : 'चित्रदीर्घा', desc: isEn ? 'Photos of Gurukul, Gaushala & events' : 'गुरुकुल, गौशाला एवं आयोजनों की तस्वीरें', icon: Image },
    { id: 'notice', label: isEn ? 'Notices & Bulletins' : 'नवीनतम सूचनाएं', desc: isEn ? 'Press releases & special event announcements' : 'प्रेस विज्ञप्ति एवं विशेष धार्मिक कार्यक्रम', icon: Bell },
    { id: 'contact', label: isEn ? 'Contact Us' : 'संपर्क करें', desc: isEn ? 'Naimisharanya address, phone & form' : 'नैमिषारण्य पता, दूरभाष एवं ऑनलाइन संदेश', icon: Phone }
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    setActivePage(id);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 180);
  };

  // Lock body background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Announcement Notice */}
      <div 
        style={{
          background: 'linear-gradient(90deg, #1c1917 0%, var(--accent-saffron) 50%, #1c1917 100%)',
          color: '#fff',
          fontSize: '0.8rem',
          fontWeight: '700',
          textAlign: 'center',
          padding: '0.4rem 1rem',
          letterSpacing: '0.02em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.6rem'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Flag size={14} style={{ color: '#fff' }} /> 
          {isEn ? 'Admissions Open 2026-27 | Free Residential Sanskrit & Modern Gurukul Education' : 'सत्र 2026-27 प्रवेश प्रारंभ | निःशुल्क आवासीय संस्कृत एवं आधुनिक गुरुकुल शिक्षा'}
        </span>
        <button 
          onClick={() => handleNavClick('admission')}
          style={{ textDecoration: 'underline', color: '#fff', fontWeight: '800', cursor: 'pointer' }}
        >
          {isEn ? 'Apply Now →' : 'आवेदन करें →'}
        </button>
      </div>

      {/* Main Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-color)',
          transition: 'var(--transition)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '82px' }}>
          
          {/* Brand Official Logo & Title */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            <div 
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--accent-gold)',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
                background: '#000',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={Images.logo} 
                alt="स्वामी आत्मानन्द गुरुकुलम् नैमिषारण्य" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.25rem', fontWeight: '800', display: 'block', lineHeight: 1.15 }}>
                {isEn ? 'Shri Atmanand Sanskrit Teaching Institute' : 'श्री आत्मानन्द संस्कृत शिक्षण संस्थान'}
              </span>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: '600', display: 'block', marginTop: '2px' }}>
                {isEn ? 'Sanskrit Education • Culture • Values • Cow Protection | Naimisharanya, Sitapur' : 'संस्कृत शिक्षा • संस्कार • संस्कृति • गौसेवा | नैमिषारण्य, सीतापुर (उ.प्र.)'}
              </span>
            </div>
          </div>

          {/* Right Action Tools (Language Switcher, Search, Theme, Donate CTA, Hamburger Menu) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            
            {/* Language Switcher Toggle */}
            <button
              onClick={onToggleLang}
              title={isEn ? "हिंदी में बदलें" : "Switch to English"}
              style={{
                height: '40px',
                padding: '0 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-glow)',
                background: 'rgba(212, 175, 55, 0.12)',
                color: 'var(--accent-gold)',
                fontWeight: '800',
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <Globe size={16} />
              <span>{isEn ? 'HI | EN' : 'हिंदी | EN'}</span>
            </button>

            {/* Hover Expanding Search */}
            <div
              onMouseEnter={() => setIsSearchHovered(true)}
              onMouseLeave={() => setIsSearchHovered(false)}
              style={{ position: 'relative' }}
            >
              <button
                onClick={onOpenSearch}
                title={isEn ? "Search" : "खोजें"}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  height: '40px',
                  padding: isSearchHovered ? '0.5rem 1rem' : '0 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid',
                  borderColor: isSearchHovered ? 'var(--accent-gold)' : 'var(--border-color)',
                  color: isSearchHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  width: isSearchHovered ? '135px' : '40px',
                  transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, border-color 0.3s ease, background-color 0.3s ease',
                  boxShadow: isSearchHovered ? 'var(--shadow-sm)' : 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <Search size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span 
                  style={{ 
                    opacity: isSearchHovered ? 1 : 0, 
                    transition: 'opacity 0.25s ease 0.1s',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}
                >
                  {isEn ? 'Search...' : 'खोजें...'}
                </span>
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? "Gold Light Theme" : "Dark Ashram Theme"}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Admission CTA */}
            <button
              onClick={() => handleNavClick('admission')}
              className="saffron-gradient-btn"
              style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
            >
              {isEn ? 'Admission Form' : 'प्रवेश आवेदन'}
            </button>

            {/* Hover-activated Hamburger Menu Button */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ display: 'inline-block' }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: isMenuOpen ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  border: '1px solid var(--border-glow)',
                  color: isMenuOpen ? '#0f0d0e' : 'var(--accent-gold)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background 0.4s ease, color 0.4s ease, border-color 0.4s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Menu size={22} />
                <span>{isEn ? 'Menu' : 'मेन्यू'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ALWAYS MOUNTED HOVER DRAWER WITH SCROLL LOCK & SCROLLABLE CONTENT */}
      <div 
        onMouseEnter={() => setIsMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: isMenuOpen ? 'blur(16px)' : 'blur(0px)',
          WebkitBackdropFilter: isMenuOpen ? 'blur(16px)' : 'blur(0px)',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          display: 'flex',
          justifyContent: 'flex-end',
          transition: 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 0.55s cubic-bezier(0.22, 1, 0.36, 1), -webkit-backdrop-filter 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: '100%',
            maxWidth: '480px',
            height: '100vh',
            maxHeight: '100vh',
            background: 'var(--bg-primary)',
            borderLeft: '1px solid var(--accent-gold)',
            borderTopLeftRadius: '28px',
            borderBottomLeftRadius: '28px',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.75rem',
            overflowY: 'auto',
            position: 'relative',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img src={Images.logo} alt="स्वामी आत्मानन्द गुरुकुलम्" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--accent-gold)', objectFit: 'cover' }} />
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.15rem', fontWeight: '800' }}>
                  {isEn ? 'Shri Atmanand Sanskrit Teaching Institute' : 'श्री आत्मानन्द संस्कृत शिक्षण संस्थान'}
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{isEn ? 'Naimisharanya, Sitapur (U.P.)' : 'नैमिषारण्य, सीतापुर (उ.प्र.)'}</p>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    padding: '0.75rem 0.95rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
                    border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div 
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: isActive ? 'var(--accent-gold)' : 'var(--bg-primary)',
                        color: isActive ? '#0f0d0e' : 'var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border-color)',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={17} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: isActive ? '800' : '700', color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                        {item.label}
                      </h4>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={15} style={{ color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)' }} />
                </div>
              );
            })}
          </div>

          {/* Drawer Quick Contact Footer */}
          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', flexShrink: 0 }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>📞 {isEn ? 'Helpline: +91 (05862) 289-ATMANAND' : 'संपर्क / हेल्पलाइन: +91 (05862) 289-ATMANAND'}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => handleNavClick('donate')} className="gold-outline-btn" style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem' }}>
                🙏 {isEn ? 'Donate / Support' : 'सहयोग / दान करें'}
              </button>
              <button onClick={() => handleNavClick('contact')} className="saffron-gradient-btn" style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem' }}>
                {isEn ? 'Contact Form' : 'संपर्क फॉर्म'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
