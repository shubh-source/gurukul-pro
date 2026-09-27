import React, { useState } from 'react';
import { Images } from '../assets/images';
import { Compass, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function Jyotish({ onNavigate, lang }) {
  const isEn = lang === 'en';
  const [formData, setFormData] = useState({ name: '', dob: '', time: '', place: '', phone: '', question: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const JYOTISH_SERVICES = [
    {
      id: 'j1',
      icon: '📜',
      title: isEn ? 'Horoscope (Kundli) Preparation' : 'जन्म पत्रिका (कुंडली) निर्माण',
      color: 'var(--accent-gold)',
      desc: isEn 
        ? 'Comprehensive Vedic birth chart featuring Shodashvarga, Dasha analysis, and accurate planetary ephemeris.'
        : 'षोडशवर्ग, दशास्त्र एवं सटीक ग्रहाचार गणना सहित जन्म कुंडली पत्रिका।'
    },
    {
      id: 'j2',
      icon: '💑',
      title: isEn ? 'Horoscope Matching (Gun Milan)' : 'विवाह मेलपक (गुण मिलान)',
      color: 'var(--accent-saffron)',
      desc: isEn 
        ? 'Ashtakoot Gun Milan, Mangal Dosha analysis, and scriptural guidance for a harmonious married life.'
        : 'अष्टकूट गुण मिलान, मङ्गल दोष विचार एवं सुखी गृहस्थ जीवन का मार्गदर्शन।'
    },
    {
      id: 'j3',
      icon: '⌛',
      title: isEn ? 'Auspicious Muhurat Selection' : 'शुभ मुहूर्त विचार',
      color: 'var(--accent-emerald)',
      desc: isEn 
        ? 'Panchang-verified auspicious timings for marriage, housewarming (Griha Pravesh), new business, and sacred ceremonies.'
        : 'विवाह, गृह प्रवेश, व्यापार प्रारंभ एवं मुंडन हेतु अतिशुद्ध पञ्चाङ्ग मुहूर्त।'
    },
    {
      id: 'j4',
      icon: '🪐',
      title: isEn ? 'Planetary Remedies & Peace' : 'ग्रह शांति व उपाय',
      color: 'var(--accent-indigo)',
      desc: isEn 
        ? 'Vedic Japa rituals, gemstone recommendations, and remedies for Kaal Sarp, Sade Sati, and Pitra Dosha.'
        : 'कालसर्प, साढ़ेसाती व पितृदोष निवारण हेतु वैदिक जाप व रत्न-रुद्राक्ष परामर्श।'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Veda-Chakshu — Vedic Astrology' : 'वेदचक्षु — भारतीय ज्योतिष'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Vedic Astrology Consultation & Muhurat' : 'ज्योतिष परामर्श एवं मुहूर्त सेवा'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Authentic scriptural guidance following ancient Indian Siddhanta and Phalita Jyotish traditions.'
              : 'प्राचीन भारतीय सिद्धान्त एवं फलित ज्योतिष परंपरा के अनुसार प्रामाणिक मार्गदर्शन।'}
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Jyotish Services' : 'ज्योतिष सेवाएं'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Scriptural Consultation & Guidance' : 'शास्त्रीय परामर्श एवं मार्गदर्शन'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
            {JYOTISH_SERVICES.map(item => (
              <div key={item.id} className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-secondary)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem', color: item.color }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* JYOTISH FORM */}
          <div className="glass-panel" style={{ maxWidth: '680px', margin: '0 auto', padding: '2.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
            <h3 className="font-serif text-center" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center' }}>
              {isEn ? 'Enter Details for Astrology Consultation' : 'ज्योतिष परामर्श हेतु विवरण भरें'}
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>
                <h4 className="font-serif gold-gradient-text" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {isEn ? 'Your Details Have Been Received!' : 'आपका विवरण सुरक्षित प्राप्त हो गया है!'}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {isEn 
                    ? 'Our Jyotish Acharyas will analyze your birth chart and contact you shortly.'
                    : 'संस्थान के ज्योतिषाचार्य आपकी पत्रिका का अध्ययन करके अतिशीघ्र संपर्क करेंगे।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>
                    {isEn ? 'Full Name *' : 'पूरा नाम *'}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder={isEn ? 'e.g. Ram Prakash Mishra' : 'उदा: श्री रामप्रकाश मिश्र'} 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>
                      {isEn ? 'Date of Birth *' : 'जन्म तिथि *'}
                    </label>
                    <input 
                      type="date" 
                      required 
                      value={formData.dob} 
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })} 
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>
                      {isEn ? 'Time of Birth *' : 'जन्म समय *'}
                    </label>
                    <input 
                      type="time" 
                      required 
                      value={formData.time} 
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })} 
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>
                    {isEn ? 'Place of Birth *' : 'जन्म स्थान *'}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder={isEn ? 'e.g. Sitapur, Uttar Pradesh' : 'उदा: सीतापुर, उत्तर प्रदेश'} 
                    value={formData.place} 
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })} 
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>
                    {isEn ? 'Contact Mobile Number *' : 'संपर्क मोबाइल नंबर *'}
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 9876543210" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                  />
                </div>

                <button type="submit" className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  {isEn ? 'Submit for Consultation →' : 'ज्योतिष परामर्श हेतु भेजें →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
