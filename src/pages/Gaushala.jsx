import React from 'react';
import { Images } from '../assets/images';
import { Heart, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Gaushala({ onNavigate }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">🐄 गौसेवा • संरक्षण • संवर्धन</span>
          <h1 className="section-title font-serif">संस्थान गौशाला एवं गौ संरक्षण प्रकल्प</h1>
          <p className="section-subtitle">
            भारतीय संस्कृति में गाय को माता एवं समस्त देव शक्तियों का निवास माना गया है।
          </p>
        </div>
      </section>

      {/* GAUSHALA HERO IMAGE & INTRO */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
          
          <div>
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>पवित्र गौसेवा सेवा प्रकल्प</span>
            <h2 className="font-serif" style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '1.25rem' }}>
              देशी गिर एवं कपिला गौवंश का संरक्षण
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              नैमिषारण्य स्थित आत्मानन्द संस्कृत शिक्षण संस्थान की गौशाला में देशी भारतीय गायों का यत्नपूर्वक पालन-पोषण किया जाता है।
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              गौशाला से प्राप्त शुद्ध A2 दुग्ध, घृत एवं पञ्चगव्य का उपयोग गुरुकुल के बालकों के आहार एवं नित्य यज्ञ-हवन अनुष्ठानों में किया जाता है।
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} /> 100% हरा चारा, भूसा एवं प्राकृतिक पोषण आहार
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} /> निःशुल्क प्राथमिक पशु चिकित्सा एवं विश्राम गृह
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} /> गुरुकुल बटुकों द्वारा नित्य प्रातः-सायं गौसेवा
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
            <img src={Images.gaushala} alt="गौशाला गौसेवा" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
          </div>

        </div>
      </section>

      {/* THREE MAIN CARDS: GAU SEVA, GAU DAAN, ANUDAN */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">गौसेवा के तीन मुख्य माध्यम</span>
            <h2 className="section-title font-serif">गौशाला सेवा एवं दान श्रेणियां</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            
            {/* Card 1 */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>🐄</div>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--accent-emerald)' }}>
                  गौ सेवा (Gau Seva)
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  गौशाला की गायों हेतु नित्य हरा चारा, भूसा, गुड़ एवं पशुआहार की व्यवस्था में अपना सहयोग दें।
                </p>
              </div>
              <button onClick={() => onNavigate('donate')} className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                गौसेवा हेतु सहयोग करें →
              </button>
            </div>

            {/* Card 2 */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>🙏</div>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--accent-saffron)' }}>
                  गौ दान (Gau Daan)
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  देशी गिर या कपिला गाय का दान करके या एक गाय के वार्षिक पोषण का संकल्प लेकर पुण्य अर्जित करें।
                </p>
              </div>
              <button onClick={() => onNavigate('donate')} className="gold-outline-btn" style={{ width: '100%', justifyContent: 'center' }}>
                गौ दान संकल्प लें →
              </button>
            </div>

            {/* Card 3 */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>💰</div>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--accent-gold)' }}>
                  गौशाला संचालन राशि
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  गौशाला के निर्माण, टीन शेड, जल कुंड एवं पशु चिकित्सा उपकरण हेतु स्वेच्छा से दान दें।
                </p>
              </div>
              <button onClick={() => onNavigate('donate')} className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                संचालन राशि प्रदान करें →
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
