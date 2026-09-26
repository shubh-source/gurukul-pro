import React from 'react';
import { Images } from '../assets/images';
import { Shield, BookOpen, Award, Heart, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function About({ onNavigate }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Page Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">संस्थान का पावन इतिहास एवं परिचय</span>
          <h1 className="section-title font-serif">हमारे बारे में (About Us)</h1>
          <p className="section-subtitle">
            आत्मानन्द संस्कृत शिक्षण संस्थान, नैमिषारण्य, सीतापुर (उत्तर प्रदेश)
          </p>
        </div>
      </section>

      {/* Main Heritage Intro */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div>
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>पवित्र नैमिषारण्य तपोभूमि</span>
            <h2 className="font-serif" style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '1.25rem' }}>
              संस्कृत शिक्षा, संस्कृति एवं गौसेवा का पावन केंद्र
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              88,000 ऋषियों की पावन तपोभूमि नैमिषारण्य (सीतापुर, उ.प्र.) में स्थित **आत्मानन्द संस्कृत शिक्षण संस्थान** प्राचीन सनातन संस्कृति, वेद-शास्त्रों तथा गुरुकुल परंपरा के पुनरुद्धार हेतु कटिबद्ध है।
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              संस्थान का मुख्य उद्देश्य समाज के सभी वर्गों के विद्यार्थियों तक संस्कृत भाषा, वेद-वेदांग, व्याकरण, कर्मकांड एवं आधुनिक शिक्षा का समन्वय पहुँचाना है, ताकि वे आदर्श नागरिक एवं धर्मरक्षक बन सकें।
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> मान्यता एवं पंजीकरण प्राप्त सनातन शिक्षण संस्थान
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> 100% निःशुल्क आवासीय गुरुकुल व्यवस्था (कक्षा 6 से 12)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> देशी गिर व कपिला गौवंश संरक्षण एवं नित्य गौसेवा
              </div>
            </div>
          </div>

          <div>
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <img src={Images.atmanandHero} alt="संस्थान परिसर" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>

        </div>
      </section>

      {/* VISION & MISSION CARDS */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">दृष्टिकोण एवं लक्ष्य</span>
            <h2 className="section-title font-serif">विज़न एवं मिशन</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-panel" style={{ padding: '2.25rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.85rem', color: 'var(--accent-saffron)' }}>
                हमारा विज़न (Vision)
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                नैमिषारण्य की वैदिक धरोहर को अक्षुण्ण रखते हुए संस्कृत भाषा और प्राचीन भारतीय ज्ञान परंपरा को विश्व पटल पर पुनः स्थापित करना, जहाँ प्रत्येक विद्यार्थी वेद-शास्त्रों में पारंगत होने के साथ आधुनिक तकनीक में भी दक्ष हो।
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.25rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.85rem', color: 'var(--accent-gold)' }}>
                हमारा मिशन (Mission)
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                विद्यार्थियों को अनुशासित गुरुकुल परिवेश, सात्त्विक आहार, निःशुल्क शिक्षा, वेद पाठ, कर्मकांड, आधुनिक कंप्यूटर विज्ञान एवं गौसेवा के माध्यम से एक सशक्त, संस्कारी और समाजोपयोगी नागरिक बनाना।
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
