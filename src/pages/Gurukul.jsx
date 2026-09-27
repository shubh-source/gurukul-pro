import React, { useState } from 'react';
import { Images } from '../assets/images';
import { BookOpen, Clock, Users, Home as HomeIcon, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function Gurukul({ onNavigate, lang }) {
  const isEn = lang === 'en';
  const [activeRoutine, setActiveRoutine] = useState(3);

  const DAILY_SCHEDULE = [
    { 
      time: '04:30 AM - 05:30 AM', 
      title: isEn ? 'Brahma Muhurta Awakening & Meditation' : 'ब्रह्म मुहूर्त जागरण एवं ध्यान', 
      icon: '🌅', 
      desc: isEn ? 'Early morning awakening, morning ablutions, pranayama, and silent meditation.' : 'प्रातःकाल जागरण, शौच-स्नान, प्राणायाम एवं प्रातः ध्यान।' 
    },
    { 
      time: '05:30 AM - 07:00 AM', 
      title: isEn ? 'Yagya Shala & Sandhya-Vandan' : 'यज्ञशाला एवं सन्ध्या-वन्दन', 
      icon: '🔥', 
      desc: isEn ? 'Vedic oblations with sacred mantra chanting, Shiva worship, and Gayatri Japa.' : 'वैदिक मन्त्रोच्चार के साथ हवन, शिव पूजन एवं गायत्री जाप।' 
    },
    { 
      time: '07:00 AM - 08:00 AM', 
      title: isEn ? 'Sattvic Breakfast & Gau Seva' : 'सात्त्विक अल्पाहार एवं गौसेवा', 
      icon: '🥗', 
      desc: isEn ? 'Morning cow care in the Gaushala and nourishing fresh desi A2 milk breakfast.' : 'गौशाला में देशी गायों की सेवा एवं ताजा गो-दुग्ध आहार।' 
    },
    { 
      time: '08:00 AM - 12:30 PM', 
      title: isEn ? 'Sanskrit & Vedic Scripture Classes' : 'संस्कृत एवं वेद-शास्त्र कक्षाएं', 
      icon: '📖', 
      desc: isEn ? 'Ashtadhyayi grammar, Paniniya Shiksha, Veda recitation, and modern English/Computers.' : 'अष्टाध्यायी, व्याकरण, साहित्य, वेद पाठांतर एवं अंग्रेजी/कंप्यूटर।' 
    },
    { 
      time: '12:30 PM - 02:00 PM', 
      title: isEn ? 'Afternoon Meal & Rest' : 'मध्याह्न भोजन एवं विश्राम', 
      icon: '🍲', 
      desc: isEn ? 'Freshly prepared sattvic lunch made with organic farm produce followed by rest.' : 'जैविक अन्न से निर्मित सात्त्विक मध्याह्न भोजन एवं विश्राम।' 
    },
    { 
      time: '02:00 PM - 04:30 PM', 
      title: isEn ? 'Modern Subjects & Self-Study' : 'आधुनिक विषय एवं स्व-अध्ययन', 
      icon: '💻', 
      desc: isEn ? 'Mathematics, General Science, Hindi, English, and ancient manuscript readings.' : 'गणित, विज्ञान, हिंदी, अंग्रेजी एवं पाण्डुलिपि पठन।' 
    },
    { 
      time: '04:30 PM - 06:00 PM', 
      title: isEn ? 'Sports, Archery & Physical Yoga' : 'क्रीड़ा, धनुर्विद्या एवं शारीरिक योग', 
      icon: '🏹', 
      desc: isEn ? 'Yogasana, breath control, traditional archery, and physical wellness games.' : 'योगासन, प्राणायाम, धनुर्विद्या एवं पारंपरिक खेल।' 
    },
    { 
      time: '06:00 PM - 07:30 PM', 
      title: isEn ? 'Evening Sandhya & Aarti' : 'सायंकालीन सन्ध्या एवं आरती', 
      icon: '🪔', 
      desc: isEn ? 'Grand temple aarti, devotional hymns, stotra chanting, and classical Veena music.' : 'भगवद आरती, स्तोत्र पाठ एवं संगीत/वीणा वादन।' 
    },
    { 
      time: '07:30 PM - 09:00 PM', 
      title: isEn ? 'Dinner & Guru Discourse' : 'रात्रि भोजन एवं गुरु-संवाद', 
      icon: '✨', 
      desc: isEn ? 'Light sattvic dinner, interactive spiritual discussions with Acharyas, and night self-study.' : 'रात्रि भोजन, आचार्यों के साथ धर्म चर्चा एवं स्वाध्याय।' 
    }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Vedic Education & Discipline' : 'वैदिक शिक्षा एवं अनुशासन'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Gurukul Tradition & Student Life' : 'गुरुकुल परंपरा एवं छात्र जीवन'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'An unparalleled harmony of character building, Vedic wisdom, self-discipline, and modern learning in the ancient Gurukul tradition.'
              : 'भारतीय गुरुकुल परंपरा में शिक्षा, अनुशासन, वेद-ज्ञान और संस्कारों का अनुपम समन्वय।'}
          </p>
        </div>
      </section>

      {/* STUDENT ELIGIBILITY & KEY CARDS SECTION */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Key Information' : 'विद्यार्थी मुख्य जानकारी'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Gurukul Admission Criteria & Amenities' : 'गुरुकुल प्रवेश मापदंड एवं व्यवस्था'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
            
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>👦</div>
              <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.4rem' }}>{isEn ? 'Eligible Age' : 'विद्यार्थी आयु'}</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-saffron)' }}>{isEn ? '10 to 20 Years' : '10 वर्ष से 20 वर्ष तक'}</p>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{isEn ? 'Primary & Secondary Age Group' : 'प्राथमिक एवं माध्यमिक आयु वर्ग'}</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📚</div>
              <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.4rem' }}>{isEn ? 'Class Grades' : 'कक्षा वर्ग'}</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-gold)' }}>{isEn ? 'Classes 6 to 12' : 'कक्षा 6 से 12 तक'}</p>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{isEn ? 'Prathama to Uttara Madhyama' : 'पूर्व मध्यमा एवं उत्तर मध्यमा'}</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🏠</div>
              <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.4rem' }}>{isEn ? 'Hostel Facility' : 'प्रकार एवं सुविधा'}</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-emerald)' }}>{isEn ? '100% Free Residential' : '100% आवासीय गुरुकुल'}</p>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{isEn ? 'Free Food, Lodging & Books' : 'निःशुल्क छात्रावास एवं सात्त्विक भोजन'}</p>
            </div>

          </div>

        </div>
      </section>

      {/* EDUCATION SYSTEM */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">{isEn ? 'Pillars of Learning' : 'शिक्षा के प्रमुख क्षेत्र'}</span>
            <h2 className="section-title font-serif">{isEn ? 'Harmonizing Vedic Wisdom & Modern Curriculum' : 'पारंपरिक वेद एवं आधुनिक शिक्षा का समन्वय'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            
            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🕉️</div>
              <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-saffron)' }}>
                {isEn ? 'Sanskrit & Veda Recitation' : 'संस्कृत एवं वेद पाठ'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {isEn 
                  ? 'Ashtadhyayi grammar, Vedic chants, Paniniya Shiksha, Karmakanda rituals, and sacred scripture recitations.'
                  : 'अष्टाध्यायी व्याकरण, वेद संचयन, पाणिनीय शिक्षा, कर्मकांड एवं प्राचीन ग्रंथ पाठ।'}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🇮🇳</div>
              <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                {isEn ? 'Hindi Literature' : 'हिन्दी साहित्य'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {isEn 
                  ? 'Advanced proficiency in Hindi prose, classical poetry, creative essay writing, and public speaking.'
                  : 'राष्ट्रभाषा हिन्दी का उत्कृष्ट ज्ञान, काव्य, निबंध लेखन एवं विचार अभिव्यक्ति।'}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌐</div>
              <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-indigo)' }}>
                {isEn ? 'English Language' : 'English Language'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {isEn 
                  ? 'Fluent spoken and written English skills enabling students to articulate Sanatan philosophy on international platforms.'
                  : 'अंतर्राष्ट्रीय स्तर पर विचार रखने हेतु व्यावहारिक अंग्रेजी संभाषण एवं पठन।'}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💻</div>
              <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-emerald)' }}>
                {isEn ? 'Modern Sciences & Computers' : 'आधुनिक विषय'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {isEn 
                  ? 'Mathematics, General Science, Social Studies, and foundational Computer Science / Coding.'
                  : 'गणित, सामान्य विज्ञान, सामाजिक विषय एवं प्राथमिक कंप्यूटर विज्ञान।'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DAILY ROUTINE SECTION */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag"><Clock size={14} /> {isEn ? 'Daily Routine (Dincharya)' : 'दैनिक दिनचर्या (Daily Routine)'}</span>
            <h2 className="section-title font-serif">{isEn ? 'A Day in the Life of a Gurukul Disciple' : 'गुरुकुल में एक दिन का चक्र'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {DAILY_SCHEDULE.map((item, idx) => {
                const isSelected = activeRoutine === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveRoutine(idx)}
                    style={{
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'var(--bg-secondary)' : 'transparent',
                      border: isSelected ? '1px solid var(--accent-gold)' : '1px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: isSelected ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                          {item.time}
                        </span>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: isSelected ? '800' : '700', color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    {isSelected && <ChevronRight size={18} style={{ color: 'var(--accent-gold)' }} />}
                  </div>
                );
              })}
            </div>

            <div 
              className="glass-panel"
              style={{
                padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                border: '1px solid var(--accent-gold)',
                background: 'var(--bg-secondary)'
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                {DAILY_SCHEDULE[activeRoutine].icon}
              </div>
              <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                {DAILY_SCHEDULE[activeRoutine].time}
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>
                {DAILY_SCHEDULE[activeRoutine].title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {DAILY_SCHEDULE[activeRoutine].desc}
              </p>

              <button onClick={() => onNavigate('admission')} className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                {isEn ? 'View Admission Process →' : 'प्रवेश प्रक्रिया देखें →'}
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
