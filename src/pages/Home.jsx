import React, { useState } from 'react';
import { Images } from '../assets/images';
import LiveRoutineTracker from '../components/LiveRoutineTracker';
import { ArrowRight, Sparkles, BookOpen, Clock, ShieldCheck, Award, Heart, Flame, Compass as JyotishIcon, CheckCircle2, ChevronRight, Bell, FileText, ChevronDown, ChevronUp, Shield, Flag } from 'lucide-react';

export default function Home({ onNavigate, lang }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const isEn = lang === 'en';

  const OBJECTIVES = [
    { 
      id: '1', 
      title: isEn ? 'Sanskrit Education & Vedic Scriptures' : 'संस्कृत शिक्षा एवं वेद-शास्त्र', 
      icon: BookOpen, 
      color: 'var(--accent-saffron)', 
      desc: isEn ? 'In-depth study of Vedas, Vedangas, Sanskrit literature & grammar with modern subjects.' : 'वेद, वेदांग, संस्कृत साहित्य एवं व्याकरण का गहन अध्ययन तथा आधुनिक विषयों का समन्वय।', 
      details: isEn ? '• Ashtadhyayi Grammar Curriculum\n• Rigveda, Yajurveda & Samaveda Chanting\n• Paniniya Shiksha & Karmakanda Training\n• Modern Computer Science & Practical English' : '• अष्टाध्यायी व्याकरण पाठ्यक्रमानुयायी\n• ऋग्वेद, यजुर्वेद एवं सामवेद पाठांतर\n• पाणिनीय शिक्षा एवं कर्मकांड प्रशिक्षण\n• आधुनिक कंप्यूटर विज्ञान एवं व्यावहारिक अंग्रेजी' 
    },
    { 
      id: '2', 
      title: isEn ? 'Gurukul Heritage & Discipline' : 'गुरुकुल परंपरा एवं अनुशासन', 
      icon: Shield, 
      color: 'var(--accent-gold)', 
      desc: isEn ? 'Holistic development of students in a residential environment, virtues, yoga & character building.' : 'आवासीय वातावरण में विद्यार्थियों का सर्वांगीण विकास, सदाचार, योग एवं चरित्र निर्माण।', 
      details: isEn ? '• 100% Free Hostel & Sattvic Food\n• Early Morning Brahma Muhurta Awakening & Pranayama\n• Yogasana, Archery & Sports\n• Values in Guru-Shishya Tradition' : '• 100% निःशुल्क छात्रावास व सात्त्विक आहार\n• प्रातः ब्रह्म मुहूर्त जागरण व प्राणायाम\n• योगासन, धनुर्विद्या एवं क्रीड़ा\n• गुरु-शिष्य परंपरा में संस्कार सिंचन' 
    },
    { 
      id: '3', 
      title: isEn ? 'Indian Samskaras & Devotion' : 'भारतीय संस्कार एवं धर्म निष्ठा', 
      icon: Flame, 
      color: 'var(--accent-vermillion)', 
      desc: isEn ? 'Preservation of Vedic rituals, ceremonies, Sandhya-Vandan & cultural values.' : 'वैदिक रीति-रिवाजों, अनुष्ठान, संध्या-वंदन एवं सांस्कृतिक मूल्यों का संरक्षण।', 
      details: isEn ? '• Daily Morning & Evening Yagya Havan & Sandhya-Vandan\n• Bhagavad Gita & Upanishad Recitation\n• Sanskar Rituals & Stotra Chanting\n• Indian Festival Celebrations' : '• नित्य प्रातः-सायं यज्ञाहुति व सन्ध्या-वन्दन\n• भगवद गीता व उपनिषद पाठांतर\n• संस्कार अनुष्ठान व स्तोत्र गायन\n• भारतीय पर्व उत्सव आयोजन' 
    },
    { 
      id: '4', 
      title: isEn ? 'Cow Protection & Cattle Welfare' : 'गौसेवा एवं गौवंश संवर्धन', 
      icon: Heart, 
      color: 'var(--accent-emerald)', 
      desc: isEn ? 'Protection & breeding of indigenous Gir & Kapila cows, daily fodder & organic farming.' : 'देशी गिर एवं कपिला गौवंश का संरक्षण, नित्य गौसेवा तथा जैविक कृषि संवर्धन।', 
      details: isEn ? '• Indigenous Gir & Kapila Breed Rearing\n• Daily Green Fodder & Cattle Care\n• Pure A2 Milk & Ghee Production\n• Organic Cow-based Agriculture' : '• देशी गिर व कपिला गौवंश पालन\n• नित्य हरा चारा व पशुआहार सेवा\n• शुद्ध A2 गो-दुग्ध व घृत उत्पादन\n• जैविक गो-कृषि संवर्धन' 
    },
    { 
      id: '5', 
      title: isEn ? 'Research & Manuscript Studies' : 'अनुसंधान एवं पाण्डुलिपि कार्य', 
      icon: Sparkles, 
      color: 'var(--accent-indigo)', 
      desc: isEn ? 'Study of Indian Knowledge Systems & ancient Sanskrit texts with a modern perspective.' : 'भारतीय ज्ञान परंपरा एवं प्राचीन संस्कृत ग्रंथों का आधुनिक दृष्टिकोण से अध्ययन।', 
      details: isEn ? '• Sanskrit Manuscript Conservation Project\n• Veda-Science & Astronomy Research\n• Ancient Philosophy & Nyaya Studies\n• Research Papers & Publications' : '• संस्कृत पाण्डुलिपि संरक्षण प्रकल्प\n• वेद-विज्ञान एवं खगोल शोध\n• प्राचीन दर्शन व न्याय अध्ययन\n• शोध पत्र व प्रकाशन' 
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="animate-fade-in">
      
      {/* HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          padding: '4rem 0 5.5rem 0',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <Flag size={14} style={{ color: 'var(--accent-saffron)' }} /> {isEn ? 'Sacred Pilgrimage — Naimisharanya, Sitapur (U.P.)' : 'पावन तीर्थ क्षेत्र — नैमिषारण्य, सीतापुर (उत्तर प्रदेश)'}
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.4rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              {isEn ? 'Shri Atmanand Sanskrit Teaching Institute' : 'श्री आत्मानन्द संस्कृत शिक्षण संस्थान'}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="badge-gold">{isEn ? 'Sanskrit Education' : 'संस्कृत शिक्षा'}</span>
              <span className="badge-gold">{isEn ? 'Samskara' : 'संस्कार'}</span>
              <span className="badge-gold">{isEn ? 'Culture' : 'संस्कृति'}</span>
              <span className="badge-gold">{isEn ? 'Gau Seva' : 'गौसेवा'}</span>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.25rem', maxWidth: '580px' }}>
              {isEn ? 'A premier Vedic educational institute located in Naimisharanya, dedicated to Indian Knowledge Systems, Vedas, Gurukul heritage and cow protection.' : 'भारतीय ज्ञान परंपरा, वेद-वेदांग, गुरुकुल संस्कृति एवं गौसेवा को समर्पित नैमिषारण्य की पावन भूमि पर स्थित एक प्रमुख सनातन शिक्षण संस्थान।'}
            </p>

            {/* Hero CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => onNavigate('admission')} 
                className="saffron-gradient-btn"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                {isEn ? '[ Apply for Admission ]' : '[ प्रवेश हेतु आवेदन करें ]'} <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onNavigate('donate')} 
                className="gold-outline-btn"
                style={{ fontSize: '1rem', padding: '0.9rem 1.8rem' }}
              >
                {isEn ? '[ Donate / Support ]' : '[ सहयोग / दान करें ]'}
              </button>
            </div>

            {/* Key Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '800' }}>100%</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>{isEn ? 'Free Residential Gurukul' : 'आवासीय गुरुकुल'}</p>
              </div>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '800' }}>{isEn ? 'Classes 6–12' : 'कक्षा 6–12'}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>{isEn ? 'Sanskrit & Veda Studies' : 'संस्कृत एवं वेद शिक्षा'}</p>
              </div>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '800' }}>{isEn ? 'Daily' : 'नित्य'}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>{isEn ? 'Yagya & Cow Welfare' : 'गौसेवा एवं यज्ञ'}</p>
              </div>
            </div>

          </div>

          {/* Right Cultural Image Showcase */}
          <div style={{ position: 'relative' }}>
            <div 
              className="glass-panel pulse-glow"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img 
                src={Images.atmanandHero} 
                alt="श्री आत्मानन्द संस्कृत शिक्षण संस्थान परिसर"
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  insetInline: 0,
                  padding: '1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  color: '#fff'
                }}
              >
                <div className="badge-gold" style={{ display: 'inline-block', marginBottom: '0.4rem' }}>
                  {isEn ? 'Naimisharanya Pilgrimage, Sitapur' : 'नैमिषारण्य तीर्थ क्षेत्र, सीतापुर'}
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                  {isEn ? 'Divine Gurukul Atmosphere & Veda Study' : 'पावन गुरुकुल वातावरण एवं वेद अध्ययन'}
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT INSTITUTE SECTION WITH LIVE ROUTINE TRACKER (PRO EXCLUSIVE) */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* REAL TIME ROUTINE TRACKER WIDGET */}
          <LiveRoutineTracker lang={lang} />

          <div className="section-header">
            <span className="section-tag">{isEn ? 'Institute Overview' : 'संस्थान परिचय'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Shri Atmanand Sanskrit Teaching Institute' : 'श्री आत्मानन्द संस्कृत शिक्षण संस्थान'}</h2>
            <p className="section-subtitle">
              {isEn ? 'Located in Naimisharanya, this institute is a unique center for Vedic values, character building, and cow protection.' : 'नैमिषारण्य की तपोभूमि पर स्थित यह संस्थान प्राचीन वैदिक मूल्यों, चरित्र निर्माण और गौसंरक्षण का अनुपम केंद्र है।'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {isEn ? 'The main objective is to impart Indian knowledge systems, Sanskrit language, Vedas, Samskaras, and heritage to students while promoting Vedic consciousness.' : 'संस्थान का मुख्य उद्देश्य भारतीय ज्ञान परंपरा, संस्कृत भाषा, वेद-वेदांग, संस्कार एवं भारतीय संस्कृति को विद्यार्थियों तक पहुँचाना तथा समाज में वैदिक चेतना का प्रसार करना है।'}
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                {isEn ? 'Students aged 10 to 20 (Classes 6 to 12) are provided free lodging, sattvic food, and quality education.' : 'गुरुकुल में 10 से 20 वर्ष के विद्यार्थियों को कक्षा 6 से 12 तक निःशुल्क आवास, सात्त्विक भोजन तथा उत्तम शिक्षा प्रदान की जाती है।'}
              </p>

              <button onClick={() => onNavigate('about')} className="saffron-gradient-btn">
                {isEn ? 'Read Detailed Overview →' : 'संस्थान का विस्तृत परिचय पढ़ें →'}
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <img src={Images.guruParampara} alt="गुरु शिष्य परंपरा" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>

        </div>
      </section>

      {/* CORE OBJECTIVES SECTION */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Core Objectives' : 'संस्थान के प्रमुख उद्देश्य'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Five Key Pillars' : 'पाँच मुख्य आधार स्तंभ'}</h2>
            <p className="section-subtitle">{isEn ? 'Click on each card to expand detailed information' : 'प्रत्येक कार्ड पर क्लिक करके विस्तृत विवरण देखें'}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {OBJECTIVES.map((obj) => {
              const IconComp = obj.icon;
              const isExpanded = expandedCard === obj.id;
              return (
                <div 
                  key={obj.id} 
                  className="glass-panel" 
                  style={{ 
                    padding: '1.75rem 1.5rem', 
                    background: 'var(--bg-primary)',
                    border: isExpanded ? '1px solid var(--accent-gold)' : '1px solid var(--border-color)',
                    transition: 'var(--transition)'
                  }}
                >
                  <div 
                    style={{ 
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: obj.color
                    }}
                  >
                    <IconComp size={26} />
                  </div>
                  
                  <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem', color: obj.color }}>
                    {obj.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {obj.desc}
                  </p>

                  {/* Interactive Accordion Detail Content */}
                  {isExpanded && (
                    <div 
                      className="animate-fade-in"
                      style={{ 
                        marginTop: '0.85rem', 
                        paddingTop: '0.85rem', 
                        borderTop: '1px dashed var(--border-color)',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      <strong style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.3rem' }}>{isEn ? 'Curriculum & Details:' : 'पाठ्यक्रम व विशेषताएं:'}</strong>
                      {obj.details}
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button 
                    onClick={() => toggleCard(obj.id)}
                    style={{
                      marginTop: '0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: 'var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      cursor: 'pointer'
                    }}
                  >
                    {isExpanded ? (
                      <>[ {isEn ? '- Hide Details' : '- विवरण छिपाएं'} ] <ChevronUp size={14} /></>
                    ) : (
                      <>[ {isEn ? '+ Show Detailed Info' : '+ विस्तृत जानकारी देखें'} ] <ChevronDown size={14} /></>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GURUKUL & GAUSHALA SPOTLIGHTS */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {/* Gurukul Card */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>{isEn ? 'Gurukul Heritage' : 'गुरुकुल परंपरा'}</span>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                  {isEn ? 'Residential Gurukul & Student Life' : 'आवासीय गुरुकुल एवं छात्र जीवन'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {isEn ? 'Disciplined lifestyle, early morning awakening, Sandhya-Vandan, Veda recitation, sattvic food and excellent hostel facilities.' : 'विद्यार्थियों के लिए अनुशासित जीवनशैली, प्रातः ब्रह्म मुहूर्त जागरण, संध्या-वंदन, वेद पाठ, सात्त्विक भोजन तथा उत्तम छात्रावास व्यवस्था।'}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-saffron)', fontWeight: '700', marginBottom: '1.5rem' }}>
                  <span>{isEn ? 'Age: 10 – 20 Yrs' : 'आयु: 10 – 20 वर्ष'}</span>
                  <span>•</span>
                  <span>{isEn ? 'Classes: 6 – 12' : 'कक्षा: 6 – 12'}</span>
                </div>
              </div>
              <button onClick={() => onNavigate('gurukul')} className="gold-outline-btn" style={{ width: '100%', justifyContent: 'center' }}>
                {isEn ? 'Gurukul Information →' : 'गुरुकुल की पूरी जानकारी →'}
              </button>
            </div>

            {/* Gaushala Card */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>{isEn ? 'Cow Protection Program' : 'गौसेवा प्रकल्प'}</span>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                  {isEn ? 'Gaushala, Cow Care & Welfare' : 'गौशाला, गौसेवा एवं संरक्षण'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {isEn ? 'Cows are revered in Indian culture. Our Gaushala nurtures indigenous cows with daily fresh fodder and veterinary care.' : 'भारतीय संस्कृति में गाय को पूजनीय माना गया है। हमारी गौशाला में देशी गायों का संवर्धन, नित्य भोजन-चारा एवं प्राथमिक चिकित्सा सेवा दी जाती है।'}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: '700', marginBottom: '1.5rem' }}>
                  <span>{isEn ? 'Gir & Kapila Cow Breed' : 'देशी गिर व कपिला गौवंश'}</span>
                  <span>•</span>
                  <span>{isEn ? 'Fresh Fodder & Care' : 'हरा चारा व जैविक सेवा'}</span>
                </div>
              </div>
              <button onClick={() => onNavigate('gaushala')} className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                {isEn ? 'Gaushala & Cow Donation →' : 'गौशाला एवं गौ दान प्रकल्प →'}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SANSKAR & ANUSHTHAN SHOWCASE */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Sacred Ceremonies' : 'धार्मिक अनुष्ठान'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Vedic Samskaras & Puja Services' : 'वैदिक संस्कार एवं पूजन सेवाएं'}</h2>
            <p className="section-subtitle">
              {isEn ? 'Rudrabhishek, Mahamrityunjaya Japa, Havan Yagya and Marriage ceremonies conducted with scriptural precision.' : 'संस्थान द्वारा शास्त्रीय पद्धति से रुद्राभिषेक, महामृत्युंजय जाप, हवन-यज्ञ एवं विवाह संस्कार सम्पन्न कराए जाते हैं।'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.75rem 1.5rem', textAlign: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto', color: 'var(--accent-gold)' }}>
                <Flame size={24} />
              </div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>{isEn ? 'Rudrabhishek' : 'रुद्राभिषेक'}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{isEn ? 'Shiva Puja & Abhishekam' : 'शिव पूजन एवं द्रव्य अभिषेक'}</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem 1.5rem', textAlign: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto', color: 'var(--accent-saffron)' }}>
                <Sparkles size={24} />
              </div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>{isEn ? 'Havan / Yagya' : 'हवन / यज्ञ'}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{isEn ? 'Planetary Peace & World Welfare' : 'ग्रह शांति एवं विश्व कल्याण यज्ञ'}</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem 1.5rem', textAlign: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto', color: 'var(--accent-vermillion)' }}>
                <Shield size={24} />
              </div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>{isEn ? 'Marriage Rituals' : 'विवाह संस्कार'}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{isEn ? 'Saptapadi & Vedic Marriage' : 'सप्तपदी एवं पाणिग्रहण संस्कार'}</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem 1.5rem', textAlign: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto', color: 'var(--accent-emerald)' }}>
                <Award size={24} />
              </div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>{isEn ? 'Special Puja' : 'विशेष पूजन'}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{isEn ? 'Satyanarayan Katha & Anushthan' : 'सत्यनारायण कथा एवं अनुष्ठान'}</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => onNavigate('sanskar')} className="gold-outline-btn">
              {isEn ? 'View All Ceremonies & Booking →' : 'सभी अनुष्ठान एवं बुकिंग देखें →'}
            </button>
          </div>
        </div>
      </section>

      {/* DONATION & ADMISSION CTA SECTION */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1c1917 0%, #2b1d16 100%)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>{isEn ? 'Become a Patron' : 'पुण्य कार्य में भागीदार बनें'}</span>
          <h2 className="font-serif gold-gradient-text" style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '1rem' }}>
            {isEn ? 'Support Gurukul Education & Cow Welfare' : 'गुरुकुल शिक्षा एवं गौसेवा हेतु अपना योगदान दें'}
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#d6cfc4', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            {isEn ? 'Your contribution supports free student meals, books, clothing, and fodder & medical care at the Gaushala.' : 'आपका लघु योगदान भी विद्यार्थियों के निःशुल्क भोजन, वस्त्र, वेद-पुस्तकों एवं गौशाला के चारे-स्वास्थ्य सेवा में अत्यंत उपयोगी सिद्ध होता है।'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('donate')} className="saffron-gradient-btn" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
              🙏 {isEn ? 'Online Donation / Support' : 'ऑनलाइन सहयोग / दान करें'}
            </button>
            <button onClick={() => onNavigate('admission')} className="gold-outline-btn" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem', color: '#fff', borderColor: '#fff' }}>
              📚 {isEn ? 'Fill Admission Form' : 'प्रवेश फॉर्म भरें'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
