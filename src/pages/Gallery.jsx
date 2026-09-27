import React, { useState } from 'react';
import { Images } from '../assets/images';
import { X, Image as ImageIcon } from 'lucide-react';

export default function Gallery({ onNavigate, lang }) {
  const isEn = lang === 'en';
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const CATEGORIES = [
    { key: 'All', label: isEn ? 'All' : 'सभी' },
    { key: 'Gurukul', label: isEn ? 'Gurukul' : 'गुरुकुल' },
    { key: 'Students', label: isEn ? 'Students' : 'विद्यार्थी' },
    { key: 'Gaushala', label: isEn ? 'Gaushala' : 'गौशाला' },
    { key: 'Sanskar', label: isEn ? 'Samskara' : 'संस्कार' },
    { key: 'Events', label: isEn ? 'Events' : 'उत्सव' },
    { key: 'Campus', label: isEn ? 'Campus' : 'परिसर' }
  ];

  const GALLERY_ITEMS = [
    { id: '1', title: isEn ? 'Sacred Gurukul Campus & Veda Recitation' : 'पावन गुरुकुल परिसर एवं वेद पाठ', category: 'Gurukul', categoryLabel: isEn ? 'Gurukul' : 'गुरुकुल', img: Images.atmanandHero },
    { id: '2', title: isEn ? 'Indigenous Gir Cow Protection in Gaushala' : 'गौशाला में देशी गिर गौसेवा', category: 'Gaushala', categoryLabel: isEn ? 'Gaushala' : 'गौशाला', img: Images.gaushala },
    { id: '3', title: isEn ? 'Vedic Maha Yagya & Havan Ceremonies' : 'वैदिक महायज्ञ एवं हवन अनुष्ठान', category: 'Sanskar', categoryLabel: isEn ? 'Samskara' : 'संस्कार', img: Images.yagya },
    { id: '4', title: isEn ? 'Guru-Shishya Tradition & Vedanta Discourse' : 'गुरु शिष्य परंपरा एवं वेदांत अध्ययन', category: 'Students', categoryLabel: isEn ? 'Students' : 'विद्यार्थी', img: Images.guruParampara },
    { id: '5', title: isEn ? 'Yoga, Pranayama & Surya Namaskar Practice' : 'योग, प्राणायाम एवं सूर्य नमस्कार', category: 'Gurukul', categoryLabel: isEn ? 'Gurukul' : 'गुरुकुल', img: Images.yogaMeditation },
    { id: '6', title: isEn ? 'Vedic STEM & Modern Computer Science Lab' : 'वैदिक STEM एवं कंप्यूटर शिक्षा', category: 'Students', categoryLabel: isEn ? 'Students' : 'विद्यार्थी', img: Images.stemVedicLab },
    { id: '7', title: isEn ? 'Naimisharanya Gurukul Main Entrance Gate' : 'नैमिषारण्य गुरुकुल मुख्य द्वार', category: 'Campus', categoryLabel: isEn ? 'Campus' : 'परिसर', img: Images.heroCampus },
    { id: '8', title: isEn ? 'Morning Agnihotra & Gayatri Mantra Chanting' : 'प्रातःकालीन यज्ञ एवं गायत्री जाप', category: 'Events', categoryLabel: isEn ? 'Events' : 'उत्सव', img: Images.yagya }
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Pictorial Glimpses' : 'चित्रमय झलकियाँ'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Sansthan Photo Gallery' : 'संस्थान चित्रदीर्घा (Gallery)'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Beautiful moments of Gurukul campus, Vedic studies, cow seva, and sacred cultural celebrations.'
              : 'गुरुकुल परिसर, वेद अध्ययन, गौसेवा एवं धार्मिक आयोजनों की सुंदर तस्वीरें।'}
          </p>
        </div>
      </section>

      {/* FILTER TABS & GRID */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  background: activeCategory === cat.key ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: activeCategory === cat.key ? '#0f0d0e' : 'var(--text-primary)',
                  fontWeight: '700',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'var(--transition)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
            {filteredItems.map(item => (
              <div 
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '1rem' }}>
                  <span className="badge-gold" style={{ fontSize: '0.7rem' }}>{item.categoryLabel}</span>
                  <h4 className="font-serif" style={{ fontSize: '1rem', fontWeight: '700', marginTop: '0.4rem', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{ position: 'relative', maxWidth: '900px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: 0,
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={28} />
            </button>
            <img src={selectedImage.img} alt={selectedImage.title} style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '78vh', objectFit: 'contain' }} />
            <div style={{ textAlign: 'center', color: '#fff', marginTop: '1rem' }}>
              <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: '700' }}>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
