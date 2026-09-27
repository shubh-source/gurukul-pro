import React from 'react';
import { Images } from '../assets/images';
import { Sparkles, BookOpen, Scroll, Award } from 'lucide-react';

export default function Research({ onNavigate, lang }) {
  const isEn = lang === 'en';

  const RESEARCH_DOMAINS = [
    {
      id: 'r1',
      icon: '📜',
      title: isEn ? 'Sanskrit Literature & Grammar' : 'संस्कृत साहित्य शोध',
      color: 'var(--accent-saffron)',
      desc: isEn 
        ? 'Critical editing, poetic analysis, Ashtadhyayi grammar, and deep scholarly commentary on classical Sanskrit epics.'
        : 'काव्य, नाटक, व्याकरण (अष्टाध्यायी) एवं महाकाव्यों की गूढ़ व्याख्या का संपादन।'
    },
    {
      id: 'r2',
      icon: '📖',
      title: isEn ? 'Vedas & Upanishads' : 'वेद एवं उपनिषद शास्त्र',
      color: 'var(--accent-gold)',
      desc: isEn 
        ? 'Hermeneutics of Vedic hymns, Samhita recitation, mantra meanings, and exploring ancient scientific insights.'
        : 'वैदिक ऋचाओं का मन्त्रार्थ, संहिता पाठ एवं वैज्ञानिक संदर्भों का अध्ययन।'
    },
    {
      id: 'r3',
      icon: '🏛️',
      title: isEn ? 'Indian Philosophy (Darshana)' : 'भारतीय दर्शन (Philosophy)',
      color: 'var(--accent-vermillion)',
      desc: isEn 
        ? 'Rigorous inquiry into the Six Vedic Darshanas: Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, and Vedanta.'
        : 'न्याय, वैशेषिक, सांख्य, योग, मीमांसा एवं वेदांत षड्दर्शन का गहन अध्ययन।'
    },
    {
      id: 'r4',
      icon: '✨',
      title: isEn ? 'Jyotish, Mathematics & Astronomy' : 'ज्योतिष गणित एवं खगोल',
      color: 'var(--accent-indigo)',
      desc: isEn 
        ? 'Siddhanta Jyotish algorithms, Panchang ephemeris calculation, and research into ancient Indian astronomy.'
        : 'सिद्धान्त ज्योतिष, पञ्चाङ्ग निर्माण एवं प्राचीन भारतीय खगोल विज्ञान शोध।'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Indian Knowledge Systems (IKS)' : 'भारतीय ज्ञान परंपरा (IKS)'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Research & Manuscript Studies' : 'अनुसंधान एवं पाण्डुलिपि अध्ययन'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Scientific research and critical examination of Indian Knowledge Systems, Vedic scriptures, and ancient Sanskrit literature.'
              : 'भारतीय ज्ञान परंपरा, वेद-शास्त्रों एवं प्राचीन संस्कृत साहित्य का वैज्ञानिक दृष्टिकोण से शोध।'}
          </p>
        </div>
      </section>

      {/* Main Research Overview */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Key Research Domains' : 'शोध के प्रमुख विषय'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Primary Research Categories' : 'प्रमुख अनुसंधान श्रेणियां'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {RESEARCH_DOMAINS.map(item => (
              <div key={item.id} className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-secondary)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: item.color }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
