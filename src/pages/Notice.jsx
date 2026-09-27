import React from 'react';
import { Bell, Calendar, FileText, ArrowRight } from 'lucide-react';

export default function Notice({ onNavigate, lang }) {
  const isEn = lang === 'en';

  const NOTICES = [
    { 
      id: '1', 
      date: isEn ? '01 September 2026' : '01 सितंबर 2026', 
      title: isEn ? 'Academic Session 2026-27 Free Gurukul Admission Process Open' : 'सत्र 2026-27 निःशुल्क गुरुकुल प्रवेश प्रक्रिया प्रारंभ', 
      category: isEn ? 'Admission Notice' : 'प्रवेश सूचना', 
      desc: isEn 
        ? 'Online applications invited for 100% free residential education, hostel, and sattvic dining for students from Class 6 to 12.' 
        : 'कक्षा 6 से 12 तक के विद्यार्थियों के लिए निःशुल्क आवासीय गुरुकुल में प्रवेश हेतु ऑनलाइन आवेदन आमंत्रित किए जाते हैं।' 
    },
    { 
      id: '2', 
      date: isEn ? '25 August 2026' : '25 अगस्त 2026', 
      title: isEn ? 'Upcoming Maharudrabhishek & Yagya on Sacred Banks of Naimisharanya' : 'नैमिषारण्य पावन तट पर आगामी महारुद्राभिषेक एवं यज्ञ', 
      category: isEn ? 'Sacred Ritual' : 'अनुष्ठान', 
      desc: isEn 
        ? '108-Kundiya Maha Yagya conducted by Vedic Acharyas for world peace, longevity, and collective well-being.' 
        : 'संस्थान की यज्ञशाला में वैदिक आचार्यों द्वारा विश्व शांति एवं जनकल्याण हेतु 108 कुण्डीय महायज्ञ सम्पन्न होगा।' 
    },
    { 
      id: '3', 
      date: isEn ? '15 August 2026' : '15 अगस्त 2026', 
      title: isEn ? 'Inauguration of New Cow Protection Shelter & Water Reservoir in Gaushala' : 'संस्थान गौशाला में नए गौ संरक्षण टीन शेड का लोकार्पण', 
      category: isEn ? 'Cow Protection' : 'गौसेवा', 
      desc: isEn 
        ? 'With generous donor support, modern shaded sheds and drinking cisterns for indigenous Gir cows are now fully operational.' 
        : 'दानदाताओं के सहयोग से देशी गिर गायों के लिए नए आधुनिक जल कुंड व छायादार शेड का निर्माण पूर्ण हुआ।' 
    },
    { 
      id: '4', 
      date: isEn ? '01 August 2026' : '01 अगस्त 2026', 
      title: isEn ? 'Grand Sanskrit Diwas Celebrations & Scholar Felicitations' : 'संस्कृत दिवस पर विशेष प्रतियोगिताएं एवं विद्वत सम्मान', 
      category: isEn ? 'Celebration' : 'कार्यक्रम', 
      desc: isEn 
        ? 'Grand organization of Shloka recitation, Vedic debate, and Sanskrit symposium to honor classical language heritage.' 
        : 'संस्कृत भाषा प्रोत्साहन हेतु श्लोकोच्चारण, वाद-विवाद एवं काव्य गोष्ठी का भव्य आयोजन किया जाएगा।' 
    }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Press Releases & Updates' : '📢 प्रेस विज्ञप्ति एवं अपडेट्स'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Latest Notices & Announcements' : 'नवीनतम सूचना एवं समाचार (Notice)'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Official circulars, events, and announcements from Atmanand Sanskrit Teaching Institute.' 
              : 'आत्मानन्द संस्कृत शिक्षण संस्थान की आधिकारिक घोषणाएं एवं कार्यक्रम सूचना।'}
          </p>
        </div>
      </section>

      {/* NOTICES LIST */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {NOTICES.map(item => (
              <div 
                key={item.id}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-secondary)',
                  borderLeft: '4px solid var(--accent-gold)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  <span className="badge-gold">{item.category}</span>
                  <span>📅 {item.date}</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {item.desc}
                </p>
                <button onClick={() => onNavigate('contact')} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-saffron)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                  {isEn ? 'Contact for more details' : 'अधिक जानकारी हेतु संपर्क करें'} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
