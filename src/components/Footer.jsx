import React from 'react';
import { Images } from '../assets/images';
import { Youtube, Instagram, Facebook, Twitter, Linkedin, Send, Music2, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', handle: '@ShriAtmanandSansthan' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', handle: '@atmanand_sansthan' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', handle: '/ShriAtmanandSansthan' },
    { name: 'X / Twitter', icon: Twitter, url: 'https://x.com', handle: '@AtmanandSansthan' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', handle: 'Shri Atmanand Sansthan' },
    { name: 'Telegram', icon: Send, url: 'https://telegram.org', handle: 't.me/AtmanandSansthan' }
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        marginTop: '5rem',
        color: 'var(--text-primary)'
      }}
    >
      <div className="container">
        
        {/* Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <img src={Images.logo} alt="स्वामी आत्मानन्द गुरुकुलम्" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--accent-gold)', objectFit: 'cover' }} />
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.3rem', fontWeight: '800' }}>
                श्री आत्मानन्द संस्कृत शिक्षण संस्थान
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              भारतीय ज्ञान परंपरा, संस्कृत भाषा, वेद-वेदांग, संस्कार, गौसेवा एवं संस्कृति के संरक्षण व संवर्धन हेतु समर्पित एक पवित्र शैक्षणिक संस्थान।
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700' }}>
              <span>📍 नैमिषारण्य, सीतापुर, उत्तर प्रदेश - 261402</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation 1 */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
              मुख्य पृष्ठ लिंक
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><button onClick={() => handlePageChange('home')} style={{ color: 'var(--text-secondary)' }}>मुख्य पृष्ठ (Home)</button></li>
              <li><button onClick={() => handlePageChange('about')} style={{ color: 'var(--text-secondary)' }}>हमारे बारे में (About Us)</button></li>
              <li><button onClick={() => handlePageChange('gurukul')} style={{ color: 'var(--text-secondary)' }}>गुरुकुल परंपरा (Gurukul)</button></li>
              <li><button onClick={() => handlePageChange('gaushala')} style={{ color: 'var(--text-secondary)' }}>गौशाला एवं गौसेवा (Gaushala)</button></li>
              <li><button onClick={() => handlePageChange('research')} style={{ color: 'var(--text-secondary)' }}>अनुसंधान (Research)</button></li>
              <li><button onClick={() => handlePageChange('sanskar')} style={{ color: 'var(--text-secondary)' }}>संस्कार एवं अनुष्ठान</button></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation 2 */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
              सेवाएं एवं प्रवेश
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><button onClick={() => handlePageChange('jyotish')} style={{ color: 'var(--text-secondary)' }}>ज्योतिष परामर्श (Jyotish)</button></li>
              <li><button onClick={() => handlePageChange('donate')} style={{ color: 'var(--text-secondary)' }}>सहयोग एवं अनुदान (Donate)</button></li>
              <li><button onClick={() => handlePageChange('admission')} style={{ color: 'var(--text-secondary)' }}>प्रवेश प्रक्रिया (Admission)</button></li>
              <li><button onClick={() => handlePageChange('gallery')} style={{ color: 'var(--text-secondary)' }}>चित्रदीर्घा (Gallery)</button></li>
              <li><button onClick={() => handlePageChange('notice')} style={{ color: 'var(--text-secondary)' }}>सूचना एवं समाचार (Notices)</button></li>
              <li><button onClick={() => handlePageChange('contact')} style={{ color: 'var(--text-secondary)' }}>संपर्क करें (Contact Us)</button></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
              सूचना एवं पत्रिका
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
              संस्थान की आगामी गतिविधियों, अनुष्ठान तिथियों व प्रकाशनों से जुड़ें।
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="email"
                placeholder="ईमेल भरें..."
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  flex: 1
                }}
              />
              <button className="saffron-gradient-btn" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}>
                जुड़ें
              </button>
            </div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              📞 हेल्पलाइन: +91 (05862) 289-ATMANAND
            </div>
          </div>

        </div>

        {/* Social Media Ecosystem Bar */}
        <div 
          style={{
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-color)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span className="section-tag" style={{ fontSize: '0.75rem' }}>सोशल मीडिया एवं नेटवर्क</span>
            <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: '700' }}>
              संस्थान के आधिकारिक डिजिटल माध्यम
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            {socialLinks.map((item, i) => {
              const IconComp = item.icon;
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconComp size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{item.name}</span>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 श्री आत्मानन्द संस्कृत शिक्षण संस्थान, नैमिषारण्य, सीतापुर (उ.प्र.)। सर्वाधिकार सुरक्षित।
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy">गोपनीयता नीति</a>
            <a href="#terms">संस्थान नियमावली</a>
            <a href="#sitemap">साइटमैप</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
