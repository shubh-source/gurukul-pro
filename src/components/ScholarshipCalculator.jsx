import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle2, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function ScholarshipCalculator({ lang, onNavigate }) {
  const isEn = lang === 'en';
  const [years, setYears] = useState(1);
  const [targetClass, setTargetClass] = useState('6');

  // Yearly free sponsorship value per student (Hostel + Sattvic Meals + Vedic Books + Uniform + Healthcare)
  const yearlyCostPerStudent = 45000;
  const totalSponsorshipValue = years * yearlyCostPerStudent;

  return (
    <div 
      className="glass-panel"
      style={{
        padding: '2.25rem 2rem',
        borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        border: '1px solid var(--accent-gold)',
        boxShadow: 'var(--shadow-lg)',
        marginBottom: '4rem'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
        <span className="badge-gold" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>
          {isEn ? '100% Free Residential Sponsorship' : '100% निःशुल्क छात्रवृत्ति एवं गोद प्रकल्प'}
        </span>
        <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          {isEn ? 'Interactive Scholarship & Sponsorship Calculator' : 'छात्रवृत्ति एवं निःशुल्क गुरुकुल शिक्षा कैलकुलेटर'}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {isEn ? 'Drag the slider below to calculate total 100% free residential sponsorship value provided to a student:' : 'नीचे दिए गए स्लाइडर को खिसकाकर छात्र के संपूर्ण निःशुल्क आवासीय गुरुकुल शिक्षा मूल्य का आंकलन करें:'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        {/* Slider Controls */}
        <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700' }}>
              <span>{isEn ? 'Select Study Duration (Years):' : 'अध्ययन अवधि (वर्ष चुनें):'}</span>
              <span style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', fontWeight: '800' }}>{years} {isEn ? (years === 1 ? 'Year' : 'Years') : 'वर्ष'}</span>
            </div>
            <input 
              type="range"
              min="1"
              max="7"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                accentColor: 'var(--accent-gold)',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
              <span>1 Yr (कक्षा 6)</span>
              <span>4 Yrs (प्रथमा)</span>
              <span>7 Yrs (कक्षा 6-12)</span>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.4rem' }}>
              {isEn ? 'Starting Class:' : 'प्रारंभिक कक्षा:'}
            </label>
            <select 
              value={targetClass}
              onChange={(e) => setTargetClass(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontWeight: '700'
              }}
            >
              <option value="6">कक्षा 6 (Class VI)</option>
              <option value="7">कक्षा 7 (Class VII)</option>
              <option value="8">कक्षा 8 (Class VIII)</option>
              <option value="9">कक्षा 9 (Class IX / प्रथमा)</option>
              <option value="10">कक्षा 10 (Class X / पूर्व मध्यमा)</option>
            </select>
          </div>

        </div>

        {/* Calculated Breakdown Card */}
        <div style={{ background: 'var(--bg-primary)', padding: '1.75rem 1.5rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent-gold)', textAlign: 'center' }}>
          
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>
            {isEn ? 'Total Student Scholarship Value Sponsored' : 'संस्थान द्वारा प्रदत्त कुल निःशुल्क शिक्षा मूल्य'}
          </span>

          <h2 className="font-serif gold-gradient-text" style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>
            ₹{totalSponsorshipValue.toLocaleString('hi-IN')}
          </h2>

          <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6, textAlign: 'left', marginBottom: '1.25rem', padding: '0.75rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ marginBottom: '0.25rem' }}>✓ {isEn ? '100% Free Food & Lodging' : '100% निःशुल्क भोजन व छात्रावास'}</div>
            <div style={{ marginBottom: '0.25rem' }}>✓ {isEn ? 'Vedic Scriptures & Modern Books' : 'वेद-शास्त्र ग्रंथ व आधुनिक पुस्तकें'}</div>
            <div>✓ {isEn ? 'Regular Medical & Health Care' : 'नियमित स्वास्थ्य एवं चिकित्सा सुविधा'}</div>
          </div>

          <button 
            onClick={() => onNavigate('admission')}
            className="saffron-gradient-btn"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
          >
            {isEn ? 'Apply for Scholarship →' : 'छात्रवृत्ति हेतु आवेदन करें →'}
          </button>

        </div>

      </div>
    </div>
  );
}
