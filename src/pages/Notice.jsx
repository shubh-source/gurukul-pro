import React from 'react';
import { Bell, Calendar, FileText, ArrowRight } from 'lucide-react';

const NOTICES = [
  { id: '1', date: '01 सितंबर 2026', title: 'सत्र 2026-27 निःशुल्क गुरुकुल प्रवेश प्रक्रिया प्रारंभ', category: 'प्रवेश सूचना', desc: 'कक्षा 6 से 12 तक के विद्यार्थियों के लिए निःशुल्क आवासीय गुरुकुल में प्रवेश हेतु ऑनलाइन आवेदन आमंत्रित किए जाते हैं।' },
  { id: '2', date: '25 अगस्त 2026', title: 'नैमिषारण्य पावन तट पर आगामी महारुद्राभिषेक एवं यज्ञ', category: 'अनुष्ठान', desc: 'संस्थान की यज्ञशाला में वैदिक आचार्यों द्वारा विश्व शांति एवं जनकल्याण हेतु 108 कुण्डीय महायज्ञ सम्पन्न होगा।' },
  { id: '3', date: '15 अगस्त 2026', title: 'संस्थान गौशाला में नए गौ संरक्षण टीन शेड का लोकार्पण', category: 'गौसेवा', desc: 'दानदाताओं के सहयोग से देशी गिर गायों के लिए नए आधुनिक जल कुंड व छायादार शेड का निर्माण पूर्ण हुआ।' },
  { id: '4', date: '01 अगस्त 2026', title: 'संस्कृत दिवस पर विशेष प्रतियोगिताएं एवं विद्वत सम्मान', category: 'कार्यक्रम', desc: 'संस्कृत भाषा प्रोत्साहन हेतु श्लोकोच्चारण, वाद-विवाद एवं काव्य गोष्ठी का भव्य आयोजन किया जाएगा।' }
];

export default function Notice({ onNavigate }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">📢 प्रेस विज्ञप्ति एवं अपडेट्स</span>
          <h1 className="section-title font-serif">नवीनतम सूचना एवं समाचार (Notice)</h1>
          <p className="section-subtitle">
            आत्मानन्द संस्कृत शिक्षण संस्थान की आधिकारिक घोषणाएं एवं कार्यक्रम सूचना।
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
                <button onClick={() => onNavigate('contact')} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-saffron)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  अधिक जानकारी हेतु संपर्क करें <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
