import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, Linkedin, Send, Music2 } from 'lucide-react';

export default function SocialFloating() {
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, color: '#ff0000', url: 'https://youtube.com' },
    { name: 'Instagram', icon: Instagram, color: '#e1306c', url: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, color: '#1877f2', url: 'https://facebook.com' },
    { name: 'X / Twitter', icon: Twitter, color: '#1da1f2', url: 'https://x.com' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0a66c2', url: 'https://linkedin.com' },
    { name: 'Telegram', icon: Send, color: '#0088cc', url: 'https://telegram.org' }
  ];

  return (
    <div 
      className="social-floating-bar"
      style={{
        position: 'fixed',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '0.6rem 0.4rem',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {socialLinks.map((item, i) => {
        const IconComponent = item.icon;
        return (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`आत्मानन्द संस्कृत शिक्षण संस्थान - ${item.name}`}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.25) translateX(-5px)';
              e.currentTarget.style.color = item.color;
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.boxShadow = `0 6px 18px ${item.color}44`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateX(0)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <IconComponent size={18} />
          </a>
        );
      })}
    </div>
  );
}
