import React, { useState, useEffect } from 'react';
import { Languages, Globe, Check, X } from 'lucide-react';

export default function LanguageModal({ currentLang, onSelectLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open language selector only once if language hasn't been chosen yet
    const savedLang = localStorage.getItem('gurukul_lang');
    if (!savedLang) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentLang]);

  const handleClose = () => {
    localStorage.setItem('gurukul_lang', currentLang || 'hi');
    setIsOpen(false);
  };

  const handleSelect = (lang) => {
    localStorage.setItem('gurukul_lang', lang);
    onSelectLanguage(lang);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        background: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem'
      }}
    >
      <div 
        className="glass-panel animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(1.5rem, 5vw, 2.25rem) clamp(1rem, 4vw, 2rem)',
          textAlign: 'center',
          border: '2px solid var(--accent-gold)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
          position: 'relative'
        }}
      >
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div 
          style={{
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-vermillion) 0%, var(--accent-gold) 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
            boxShadow: '0 0 25px rgba(212,175,55,0.5)'
          }}
        >
          <Globe size={28} />
        </div>

        <h2 className="font-serif gold-gradient-text" style={{ fontSize: 'clamp(1.2rem, 4.5vw, 1.6rem)', fontWeight: '800', marginBottom: '0.5rem' }}>
          भाषा का चयन करें / Select Language
        </h2>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          आत्मानन्द संस्कृत शिक्षण संस्थान की आधिकारिक वेबसाइट में आपका स्वागत है। कृपया अपनी पसंदीदा भाषा चुनें:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
          
          {/* Hindi Choice */}
          <button
            onClick={() => handleSelect('hi')}
            style={{
              padding: '1.1rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: currentLang === 'hi' ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
              border: '2px solid var(--accent-gold)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'var(--transition)'
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>🇮🇳</span>
            <strong className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--accent-gold)' }}>हिंदी (Hindi)</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>संस्कृत शिक्षा व मूल विवरण</span>
          </button>

          {/* English Choice */}
          <button
            onClick={() => handleSelect('en')}
            style={{
              padding: '1.1rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: currentLang === 'en' ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
              border: '2px solid var(--accent-gold)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'var(--transition)'
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>🇬🇧</span>
            <strong style={{ fontSize: '1.1rem', color: 'var(--accent-gold)' }}>English</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Global Portal View</span>
          </button>

        </div>
      </div>
    </div>
  );
}
