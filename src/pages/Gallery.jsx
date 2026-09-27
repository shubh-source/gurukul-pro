import React, { useState } from 'react';
import { Images } from '../assets/images';
import { X, Image as ImageIcon } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: '1', title: 'पावन गुरुकुल परिसर एवं वेद पाठ', category: 'Gurukul', img: Images.atmanandHero },
  { id: '2', title: 'गौशाला में देशी गिर गौसेवा', category: 'Gaushala', img: Images.gaushala },
  { id: '3', title: 'वैदिक महायज्ञ एवं हवन अनुष्ठान', category: 'Sanskar', img: Images.yagya },
  { id: '4', title: 'गुरु शिष्य परंपरा एवं वेदांत अध्ययन', category: 'Students', img: Images.guruParampara },
  { id: '5', title: 'योग, प्राणायाम एवं सूर्य नमस्कार', category: 'Gurukul', img: Images.yogaMeditation },
  { id: '6', title: 'वैदिक STEM एवं कंप्यूटर शिक्षा', category: 'Students', img: Images.stemVedicLab },
  { id: '7', title: 'नैमिषारण्य गुरुकुल मुख्य द्वार', category: 'Campus', img: Images.heroCampus },
  { id: '8', title: 'प्रातःकालीन यज्ञ एवं गायत्री जाप', category: 'Events', img: Images.yagya }
];

const CATEGORIES = ['All', 'Gurukul', 'Students', 'Gaushala', 'Sanskar', 'Events', 'Campus'];

export default function Gallery({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">चित्रमय झलकियाँ</span>
          <h1 className="section-title font-serif">संस्थान चित्रदीर्घा (Gallery)</h1>
          <p className="section-subtitle">
            गुरुकुल परिसर, वेद अध्ययन, गौसेवा एवं धार्मिक आयोजनों की सुंदर तस्वीरें।
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
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  background: activeCategory === cat ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: activeCategory === cat ? '#0f0d0e' : 'var(--text-primary)',
                  fontWeight: '700',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
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
                  <span className="badge-gold" style={{ fontSize: '0.7rem' }}>{item.category}</span>
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
