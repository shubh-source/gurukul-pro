import React, { useState } from 'react';
import { Search, X, BookOpen, Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

const SEARCH_DATABASE = [
  { id: '1', title: 'संस्कृत शिक्षा एवं वेद-शास्त्र', type: 'course', category: 'गुरुकुल शिक्षा', page: 'gurukul', desc: 'व्याकरण, साहित्य, वेद-पाठांतर एवं कंप्यूटर शिक्षा।' },
  { id: '2', title: 'गौशाला एवं गौसेवा प्रकल्प', type: 'facility', category: 'गौसेवा', page: 'gaushala', desc: 'देशी गिर एवं कपिला गौवंश संरक्षण, गौ दान एवं संवर्धन।' },
  { id: '3', title: 'रुद्राभिषेक एवं यज्ञ/हवन अनुष्ठान', type: 'service', category: 'संस्कार', page: 'sanskar', desc: 'शास्त्रोक्त विधि से विशेष पूजन, महामृत्युंजय एवं हवन।' },
  { id: '4', title: 'भारतीय ज्योतिष परामर्श एवं मुहूर्त', type: 'service', category: 'ज्योतिष', page: 'jyotish', desc: 'जन्म कुंडली मिलान, विवाह मुहूर्त एवं ग्रह शांति।' },
  { id: '5', title: 'सहयोग एवं ऑनलाइन दान/अनुदान', type: 'tool', category: 'दान', page: 'donate', desc: 'गुरुकुल, गौशाला एवं निःशुल्क भोजन/अन्नदान में योगदान।' },
  { id: '6', title: 'प्रवेश प्रक्रिया एवं आवेदन पत्र (कक्षा 6 से 12)', type: 'form', category: 'प्रवेश', page: 'admission', desc: 'सत्र 2026-27 हेतु निःशुल्क आवासीय गुरुकुल प्रवेश।' },
  { id: '7', title: 'संस्थान परिचय एवं नैमिषारण्य इतिहास', type: 'info', category: 'हमारे बारे में', page: 'about', desc: 'आत्मानन्द संस्कृत शिक्षण संस्थान, सीतापुर (उ.प्र.)' },
  { id: '8', title: 'अनुसंधान एवं भारतीय ज्ञान परंपरा', type: 'info', category: 'अनुसंधान', page: 'research', desc: 'वेद, शास्त्र एवं संस्कृत पाण्डुलिपि अध्ययन प्रकल्प।' },
  { id: '9', title: 'चित्रदीर्घा (गौशाला, गुरुकुल, आयोजन)', type: 'gallery', category: 'गैलरी', page: 'gallery', desc: 'गुरुकुल परिसर, गौसेवा एवं धार्मिक अनुष्ठान की तस्वीरें।' },
  { id: '10', title: 'नवीनतम सूचनाएं एवं समाचार', type: 'notice', category: 'सूचना', page: 'notice', desc: 'प्रवेश एवं आगामी धार्मिक आयोजनों की प्रेस विज्ञप्ति।' }
];

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredResults = query.trim() === ''
    ? SEARCH_DATABASE
    : SEARCH_DATABASE.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (page) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(2rem, 8vh, 5rem) 0.75rem 2rem 0.75rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-md)',
          padding: 'clamp(1rem, 3.5vw, 1.5rem)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--accent-gold)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <Search size={22} style={{ color: 'var(--accent-gold)' }} />
          <input
            type="text"
            placeholder="खोजें: गुरुकुल, गौशाला, अनुष्ठान, प्रवेश, ज्योतिष..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          />
          <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
          {filteredResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              "{query}" से संबंधित कोई परिणाम नहीं मिला।
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {filteredResults.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.page)}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span className="badge-gold" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>{item.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--accent-gold)' }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
