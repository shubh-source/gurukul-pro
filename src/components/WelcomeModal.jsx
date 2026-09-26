import React, { useState } from 'react';
import { Images } from '../assets/images';
import { X, Sparkles, ArrowRight, BookOpen, Heart, Flame, Flag, GraduationCap } from 'lucide-react';

export default function WelcomeModal({ onNavigate, lang }) {
  const isEn = lang === 'en';
  const [isOpen, setIsOpen] = useState(() => {
    return !sessionStorage.getItem('gurukul_welcome_dismissed');
  });

  const triggerUnblurAnimation = () => {
    const mainEl = document.querySelector('.main-content');
    if (mainEl) {
      mainEl.classList.remove('unblur-entrance');
      void mainEl.offsetWidth; // trigger reflow
      mainEl.classList.add('unblur-entrance');
    }
  };

  const handleClose = () => {
    sessionStorage.setItem('gurukul_welcome_dismissed', 'true');
    setIsOpen(false);
    triggerUnblurAnimation();
  };

  const handleEnterCampus = (page) => {
    sessionStorage.setItem('gurukul_welcome_dismissed', 'true');
    setIsOpen(false);
    triggerUnblurAnimation();
    if (page && onNavigate) onNavigate(page);
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(28, 25, 23, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={handleClose}
    >
      <div 
        className="glass-panel animate-fade-in pro-modal-card"
        style={{
          width: '100%',
          maxWidth: '640px',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(197, 155, 39, 0.25), 0 10px 30px rgba(0,0,0,0.18)',
          border: '2px solid var(--accent-gold)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Header */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <img 
            src={Images.atmanandHero} 
            alt="नैमिषारण्य गुरुकुल"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.2) 60%, transparent 100%)'
            }}
          />
          <button 
            onClick={handleClose}
            aria-label="Close"
            className="pro-close-btn"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'var(--transition)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '0 2rem 2rem 2rem', textAlign: 'center', position: 'relative', marginTop: '-3rem' }}>
          
          <div 
            className="pro-float"
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--accent-gold)',
              boxShadow: '0 0 25px rgba(212,175,55,0.45)',
              margin: '0 auto 1rem auto',
              background: '#ffffff'
            }}
          >
            <img src={Images.logo} alt="स्वामी आत्मानन्द गुरुकुलम् नैमिषारण्य" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <span className="badge-gold pro-shimmer-badge" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>
            🚩 {isEn ? 'Sacred Pilgrimage — Naimisharanya (Sitapur, U.P.)' : 'नैमिषारण्य पावन तीर्थ क्षेत्र (सीतापुर, उत्तर प्रदेश)'}
          </span>

          <h2 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: 1.25 }}>
            {isEn ? 'Welcome to Shri Atmanand Gurukul' : 'स्वागतम्! श्री आत्मानन्द संस्कृत शिक्षण संस्थान'}
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {isEn 
              ? 'A warm welcome to our sacred sanctuary dedicated to Sanskrit language, Vedic scriptures, residential Gurukul tradition, cow welfare, and timeless Indian culture.'
              : 'संस्कृत भाषा, वेद-शास्त्र, गुरुकुल परंपरा, गौशाला एवं भारतीय संस्कारों के पावन प्रांगण में आपका हार्दिक स्वागत है।'
            }
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.75rem', fontSize: '0.8rem' }}>
            <div className="glass-panel" style={{ padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <BookOpen size={22} style={{ color: 'var(--accent-gold)' }} />
              <strong>{isEn ? 'Vedic Studies' : 'वेद-शास्त्र शिक्षा'}</strong>
            </div>
            <div className="glass-panel" style={{ padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <Heart size={22} style={{ color: 'var(--accent-emerald)' }} />
              <strong>{isEn ? 'Cow Welfare' : 'गौशाला गौसेवा'}</strong>
            </div>
            <div className="glass-panel" style={{ padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <Flame size={22} style={{ color: 'var(--accent-saffron)' }} />
              <strong>{isEn ? 'Vedic Rituals' : 'धार्मिक अनुष्ठान'}</strong>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => handleEnterCampus('admission')} 
              className="saffron-gradient-btn"
              style={{ fontSize: '0.95rem', padding: '0.75rem 1.6rem' }}
            >
              <GraduationCap size={18} /> {isEn ? 'Apply for Admission' : 'प्रवेश आवेदन पत्र देखें'} <ArrowRight size={16} />
            </button>

            <button 
              onClick={handleClose} 
              className="gold-outline-btn"
              style={{ fontSize: '0.95rem', padding: '0.75rem 1.4rem' }}
            >
              {isEn ? 'Enter Campus →' : 'मुख्य परिसर में प्रवेश करें →'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
