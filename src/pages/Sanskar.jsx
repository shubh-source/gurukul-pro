import React, { useState } from 'react';
import { Images } from '../assets/images';
import { Flame, Sparkles, CheckCircle2, Phone, X } from 'lucide-react';

const SERVICES = [
  { id: 'rudrabhishek', title: 'रुद्राभिषेक अनुष्ठान', icon: '🔱', desc: 'शास्त्रोक्त रीति से द्वादश ज्योतिर्लिंग व नर्मदेश्वर शिवलिङ्ग पर दुग्ध, जल, मधु, घृत एवं पञ्चामृत द्वारा अभिषेक व महारुद्र पाठ।', items: ['नर्मदेश्वर / पार्थिव शिवलिङ्ग अभिषेक', 'रुद्री पाठ एवं महामृत्युंजय जाप', 'आरती व सात्त्विक प्रसाद वितरण'] },
  { id: 'yagya', title: 'यज्ञ एवं नवग्रह शांति हवन', icon: '🔥', desc: 'वैदिक मन्त्रोच्चार के साथ नवग्रह शांति, महामृत्युंजय एवं विश्व शांति हेतु विधिपूर्वक अग्निहोत्र एवं महायज्ञ।', items: ['नवग्रह समिधा एवं हवन सामग्री', 'ऋत्विक आचार्यों द्वारा मन्त्रोच्चार', 'पूर्णाहुति एवं आशीर्वाद'] },
  { id: 'vivah', title: 'वैदिक विवाह संस्कार', icon: '🪔', desc: 'सनातन वैदिक पद्धति से पाणिग्रहण संस्कार, वर-वधू प्रतिज्ञा, सप्तपदी एवं वैवाहिक हवन अनुष्ठान।', items: ['शास्त्रीय मन्त्रोच्चार से विवाह', 'सप्तपदी एवं कन्यादान विधि', 'संस्थान आचार्य द्वारा आशीर्वाद प्रमाणपत्र'] },
  { id: 'puja', title: 'विशेष पूजन एवं कथा', icon: '✨', desc: 'श्री सत्यनारायण व्रत कथा, लक्ष्मी-गणेश पूजन, वास्तु शांति पूजन एवं गृह प्रवेश हवन अनुष्ठान।', items: ['शुभ मुहूर्त निर्धारण', 'कलश स्थापन एवं संकल्प', 'कथा व महाआरती'] }
];

export default function Sanskar({ onNavigate }) {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">वैदिक रीति-रिवाज एवं पूजा</span>
          <h1 className="section-title font-serif">संस्कार एवं अनुष्ठान सेवाएं</h1>
          <p className="section-subtitle">
            नैमिषारण्य की पावन भूमि पर अनुभवी वेदपाठी विद्वानों द्वारा सम्पन्न कराए जाने वाले शास्त्रीय अनुष्ठान।
          </p>
        </div>
      </section>

      {/* ANUSHTHAN CARDS GRID */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {SERVICES.map((item) => (
              <div 
                key={item.id}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {item.items.map((it, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-gold)' }} /> {it}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenModal(item)}
                  className="saffron-gradient-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  अनुष्ठान हेतु संपर्क / बुक करें →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOOKING ENQUIRY MODAL */}
      {showModal && selectedService && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowModal(false)}
        >
          <div 
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '520px',
              background: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)} 
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
            >
              <X size={22} />
            </button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚩</div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  आपका संदेश प्राप्त हो गया है!
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  संस्थान के आचार्य अतिशीघ्र आपसे **{formData.phone}** पर संपर्क करके **{selectedService.title}** की तिथि व व्यवस्था निश्चित करेंगे।
                </p>
                <button onClick={() => setShowModal(false)} className="saffron-gradient-btn">
                  धन्यवाद (बंद करें)
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{selectedService.icon}</span>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: '800' }}>{selectedService.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>अनुष्ठान बुकिंग / जानकारी फॉर्म</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>आपका पूरा नाम *</label>
                    <input
                      type="text"
                      required
                      placeholder="उदा: आचार्य रमेश शर्मा"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>मोबाइल नंबर *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>संभावित अनुष्ठान तिथि</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <button type="submit" className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  बुकिंग विवरण भेजें →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
