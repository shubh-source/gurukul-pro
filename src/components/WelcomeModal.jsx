import React, { useState } from 'react';
import { Images } from '../assets/images';
import { X, Sparkles, ArrowRight, Shield, BookOpen, Heart, Flame, Flag } from 'lucide-react';

export default function WelcomeModal({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(true);

  const triggerUnblurAnimation = () => {
    const mainEl = document.querySelector('.main-content');
    if (mainEl) {
      mainEl.classList.remove('unblur-entrance');
      void mainEl.offsetWidth; // trigger reflow
      mainEl.classList.add('unblur-entrance');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerUnblurAnimation();
  };

  const handleEnterCampus = (page) => {
    setIsOpen(false);
    triggerUnblurAnimation();
    if (page) onNavigate(page);
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(0, 0, 0, 0.85)',
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
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '640px',
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
          border: '2px solid var(--accent-gold)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Header */}
        <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
          <img 
            src={Images.atmanandHero} 
            alt="नैमिषारण्य गुरुकुल"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 80%)'
            }}
          />
          <button 
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '0 2rem 2rem 2rem', textAlign: 'center', position: 'relative', marginTop: '-2.8rem' }}>
          
          <div 
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--accent-gold)',
              boxShadow: '0 0 25px rgba(212,175,55,0.7)',
              margin: '0 auto 1rem auto',
              background: '#000'
            }}
          >
            <img src={Images.logo} alt="स्वामी आत्मानन्द गुरुकुलम् नैमिषारण्य" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
            नैमिषारण्य पावन तीर्थ क्षेत्र (सीतापुर, उत्तर प्रदेश)
          </span>

          <h2 className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: 1.25 }}>
            स्वागतम्! श्री आत्मानन्द संस्कृत शिक्षण संस्थान
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            संस्कृत भाषा, वेद-शास्त्र, गुरुकुल परंपरा, गौशाला एवं भारतीय संस्कारों के पावन प्रांगण में आपका हार्दिक स्वागत है।
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.75rem', fontSize: '0.8rem' }}>
            <div style={{ padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <BookOpen size={22} style={{ color: 'var(--accent-gold)' }} />
              <strong>वेद-शास्त्र शिक्षा</strong>
            </div>
            <div style={{ padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <Heart size={22} style={{ color: 'var(--accent-emerald)' }} />
              <strong>गौशाला गौसेवा</strong>
            </div>
            <div style={{ padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <Flame size={22} style={{ color: 'var(--accent-saffron)' }} />
              <strong>धार्मिक अनुष्ठान</strong>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => handleEnterCampus('admission')} 
              className="saffron-gradient-btn"
              style={{ fontSize: '0.95rem', padding: '0.75rem 1.6rem' }}
            >
              [ प्रवेश आवेदन पत्र देखें ] <ArrowRight size={16} />
            </button>

            <button 
              onClick={handleClose} 
              className="gold-outline-btn"
              style={{ fontSize: '0.95rem', padding: '0.75rem 1.4rem' }}
            >
              [ मुख्य परिसर में प्रवेश करें ]
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
