import React from 'react';
import { Images } from '../assets/images';
import { Shield, BookOpen, Award, Heart, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function About({ onNavigate, lang }) {
  const isEn = lang === 'en';

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Page Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Sacred Heritage & History' : 'संस्थान का पावन इतिहास एवं परिचय'}</span>
          <h1 className="section-title font-serif">{isEn ? 'About Us' : 'हमारे बारे में (About Us)'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Atmanand Sanskrit Teaching Institute, Naimisharanya, Sitapur (Uttar Pradesh)' 
              : 'आत्मानन्द संस्कृत शिक्षण संस्थान, नैमिषारण्य, सीतापुर (उत्तर प्रदेश)'}
          </p>
        </div>
      </section>

      {/* Main Heritage Intro */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
          
          <div>
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              {isEn ? 'Holy Land of Naimisharanya' : 'पवित्र नैमिषारण्य तपोभूमि'}
            </span>
            <h2 className="font-serif" style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '1.25rem' }}>
              {isEn 
                ? 'Sacred Center for Sanskrit Education, Culture & Cow Welfare' 
                : 'संस्कृत शिक्षा, संस्कृति एवं गौसेवा का पावन केंद्र'}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              {isEn 
                ? 'Located in the holy pilgrimage of Naimisharanya (Sitapur, U.P.)—the revered penance ground of 88,000 sages—Atmanand Sanskrit Teaching Institute is dedicated to reviving ancient Sanatan heritage, Vedic scriptures, and the revered Gurukul system.'
                : '88,000 ऋषियों की पावन तपोभूमि नैमिषारण्य (सीतापुर, उ.प्र.) में स्थित आत्मानन्द संस्कृत शिक्षण संस्थान प्राचीन सनातन संस्कृति, वेद-शास्त्रों तथा गुरुकुल परंपरा के पुनरुद्धार हेतु कटिबद्ध है।'}
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              {isEn 
                ? 'Our core mission is to bring Sanskrit education, Vedas, Vedangas, Vyakarana, Karmakanda rituals, and modern subjects together to students of all backgrounds, nurturing them into virtuous citizens and custodians of Dharma.'
                : 'संस्थान का मुख्य उद्देश्य समाज के सभी वर्गों के विद्यार्थियों तक संस्कृत भाषा, वेद-वेदांग, व्याकरण, कर्मकांड एवं आधुनिक शिक्षा का समन्वय पहुँचाना है, ताकि वे आदर्श नागरिक एवं धर्मरक्षक बन सकें।'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> 
                {isEn ? 'Recognized & Registered Sanatan Educational Institution' : 'मान्यता एवं पंजीकरण प्राप्त सनातन शिक्षण संस्थान'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> 
                {isEn ? '100% Free Residential Gurukul Facility (Classes 6 to 12)' : '100% निःशुल्क आवासीय गुरुकुल व्यवस्था (कक्षा 6 से 12)'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> 
                {isEn ? 'Preservation of Indigenous Gir & Kapila Cattle with Daily Gau Seva' : 'देशी गिर व कपिला गौवंश संरक्षण एवं नित्य गौसेवा'}
              </div>
            </div>
          </div>

          <div>
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <img src={Images.atmanandHero} alt={isEn ? "Institute Campus" : "संस्थान परिसर"} style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>

        </div>
      </section>

      {/* VISION & MISSION CARDS */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Vision & Purpose' : 'दृष्टिकोण एवं लक्ष्य'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Vision & Mission' : 'विज़न एवं मिशन'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            
            <div className="glass-panel" style={{ padding: '2.25rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.85rem', color: 'var(--accent-saffron)' }}>
                {isEn ? 'Our Vision' : 'हमारा विज़न (Vision)'}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {isEn 
                  ? 'To re-establish Sanskrit language and ancient Indian knowledge systems on the global stage while preserving the Vedic heritage of Naimisharanya, empowering students to excel in sacred scriptures alongside modern technological advancements.'
                  : 'नैमिषारण्य की वैदिक धरोहर को अक्षुण्ण रखते हुए संस्कृत भाषा और प्राचीन भारतीय ज्ञान परंपरा को विश्व पटल पर पुनः स्थापित करना, जहाँ प्रत्येक विद्यार्थी वेद-शास्त्रों में पारंगत होने के साथ आधुनिक तकनीक में भी दक्ष हो।'}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.25rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.85rem', color: 'var(--accent-gold)' }}>
                {isEn ? 'Our Mission' : 'हमारा मिशन (Mission)'}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {isEn 
                  ? 'To provide a disciplined Gurukul atmosphere, sattvic nutrition, 100% free education, Vedic recitation, Karmakanda rituals, modern computer science, and Gau Seva to build empowered, virtuous, and dedicated contributors to society.'
                  : 'विद्यार्थियों को अनुशासित गुरुकुल परिवेश, सात्त्विक आहार, निःशुल्क शिक्षा, वेद पाठ, कर्मकांड, आधुनिक कंप्यूटर विज्ञान एवं गौसेवा के माध्यम से एक सशक्त, संस्कारी और समाजोपयोगी नागरिक बनाना।'}
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
