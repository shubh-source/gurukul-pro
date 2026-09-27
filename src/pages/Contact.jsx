import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">Direct Enquiry & Support</span>
          <h1 className="section-title font-serif">संपर्क करें (Contact Us)</h1>
          <p className="section-subtitle">
            आत्मानन्द संस्कृत शिक्षण संस्थान, नैमिषारण्य, सीतापुर (उत्तर प्रदेश)
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM GRID */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
            
            {/* Left Contact Information */}
            <div>
              <h3 className="font-serif" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.6rem)', fontWeight: '800', marginBottom: '1.25rem' }}>
                संस्थान का आधिकारिक पता
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--accent-saffron-light)', color: 'var(--accent-saffron)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.25rem' }}>स्थान एवं पता</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      आत्मानन्द संस्कृत शिक्षण संस्थान<br />
                      पावन तीर्थ क्षेत्र — नैमिषारण्य, तहसील मिश्रिख<br />
                      जनपद — सीतापुर, उत्तर प्रदेश - 261402
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.25rem' }}>दूरभाष / हेल्पलाइन</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      +91 (05862) 289-ATMANAND<br />
                      +91 98765 43210 (प्रवेश व गौशाला)
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.25rem' }}>ईमेल संदेश</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      info@atmanandsansthan.org<br />
                      admission@atmanandsansthan.org
                    </p>
                  </div>
                </div>

              </div>

              {/* Map Preview Placeholder */}
              <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem' }}>🗺️</span>
                <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
                  नैमिषारण्य मानचित्र दिशा-निर्देश
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  सीतापुर जंक्शन से 35 किमी एवं लखनऊ से 85 किमी दूरी।
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="glass-panel" style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
              <h3 className="font-serif" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.6rem)', fontWeight: '800', marginBottom: '1.25rem' }}>
                संदेश या प्रश्न भेजें
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚩</div>
                  <h4 className="font-serif gold-gradient-text" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                    आपका संदेश सफलतापूर्वक प्राप्त हो गया है!
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    संस्थान कार्यालय अतिशीघ्र आपसे संपर्क करेगा।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>आपका नाम *</label>
                    <input type="text" required placeholder="उदा: श्री रामेश्वर मिश्र" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>मोबाइल नंबर *</label>
                    <input type="tel" required placeholder="+91 9876543210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>ईमेल</label>
                    <input type="email" placeholder="example@gmail.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>संदेश / प्रश्न *</label>
                    <textarea required rows={4} placeholder="गुरुकुल प्रवेश, गौशाला या अनुष्ठान संबंधी प्रश्न यहाँ लिखें..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>

                  <button type="submit" className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                    [ संदेश भेजें ] <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
