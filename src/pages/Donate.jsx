import React, { useState } from 'react';
import { Award, Heart, CheckCircle2, Printer, ArrowRight } from 'lucide-react';

const DONATION_CATEGORIES = [
  { id: 'gurukul', title: 'गुरुकुल सहयोग', icon: '🏛️', desc: 'संस्थान के विकास, वेद-पुस्तकों एवं छात्रावास रख-रखाव हेतु दान।' },
  { id: 'gaushala', title: 'गौशाला गौसेवा', icon: '🐄', desc: 'देशी गिर व कपिला गायों के चारे, भूसे व चिकित्सा में योगदान।' },
  { id: 'education', title: 'विद्यार्थी शिक्षा सहयोग', icon: '📚', desc: 'एक निर्धन बटुक की 1 वर्ष की निःशुल्क शिक्षा व पठन सामग्री।' },
  { id: 'food', title: 'अन्न / भोजन सहयोग', icon: '🍲', desc: 'गुरुकुल बालकों हेतु 1 दिन या 1 माह के सात्त्विक भोजन का योगदान।' },
  { id: 'general', title: 'सामान्य संस्थान सहयोग', icon: '🚩', desc: 'संस्थान की समूची धार्मिक व शैक्षणिक गतिविधियों में स्वेच्छा दान।' }
];

const AMOUNTS = [500, 1000, 2000, 5000];

export default function Donate({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('gurukul');
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({ name: '', phone: '', pan: '', city: '' });
  const [receipt, setReceipt] = useState(null);

  const handleAmountClick = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    if (finalAmount <= 0) return;

    const categoryObj = DONATION_CATEGORIES.find(c => c.id === selectedCategory);

    setReceipt({
      receiptNo: 'ATG-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('hi-IN'),
      name: donorInfo.name,
      phone: donorInfo.phone,
      pan: donorInfo.pan || 'N/A',
      city: donorInfo.city,
      category: categoryObj ? categoryObj.title : 'संस्थान सहयोग',
      amount: finalAmount
    });
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">पुण्य कार्य में सहभागिता</span>
          <h1 className="section-title font-serif">सहयोग एवं अनुदान (Donation)</h1>
          <p className="section-subtitle">
            आपका सहयोग संस्थान की शिक्षा, गौसेवा एवं धार्मिक-सांस्कृतिक गतिविधियों में उपयोग किया जाता है।
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          {receipt ? (
            /* PRINTABLE RECEIPT CARD */
            <div className="glass-panel" style={{ maxWidth: '640px', margin: '0 auto', padding: '2.5rem', background: 'var(--bg-secondary)', border: '2px dashed var(--accent-gold)' }}>
              <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.2rem' }}>🚩</span>
                <h2 className="font-serif gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: '800' }}>
                  आत्मानन्द संस्कृत शिक्षण संस्थान
                </h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>नैमिषारण्य, सीतापुर, उत्तर प्रदेश | दान रसीद</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <div><strong>रसीद संख्या:</strong> {receipt.receiptNo}</div>
                <div><strong>दिनांक:</strong> {receipt.date}</div>
                <div><strong>दाता का नाम:</strong> {receipt.name}</div>
                <div><strong>मोबाइल:</strong> {receipt.phone}</div>
                <div><strong>शहर:</strong> {receipt.city}</div>
                <div><strong>पैन नंबर:</strong> {receipt.pan}</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', textAlignment: 'center', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>दान श्रेणी: {receipt.category}</div>
                <div className="font-serif" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-saffron)', marginTop: '0.2rem' }}>
                  ₹ {receipt.amount.toLocaleString('en-IN')} /-
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', marginTop: '0.3rem', fontWeight: '700' }}>
                  ✓ दान राशि सफलतापूर्वक स्वीकार की गई (भुगतान रसीद)
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button onClick={() => window.print()} className="gold-outline-btn">
                  <Printer size={16} /> रसीद प्रिंट करें
                </button>
                <button onClick={() => setReceipt(null)} className="saffron-gradient-btn">
                  नया दान करें →
                </button>
              </div>
            </div>
          ) : (
            /* DONATION CALCULATOR & CATEGORIES */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
              
              {/* Left Categories */}
              <div>
                <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                  1. सहयोग की श्रेणी चुनें
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {DONATION_CATEGORIES.map((cat) => {
                    const isSel = selectedCategory === cat.id;
                    return (
                      <div
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        style={{
                          padding: '1rem 1.25rem',
                          borderRadius: 'var(--radius-md)',
                          background: isSel ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
                          border: isSel ? '1px solid var(--accent-gold)' : '1px solid var(--border-color)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          transition: 'var(--transition)'
                        }}
                      >
                        <span style={{ fontSize: '2rem' }}>{cat.icon}</span>
                        <div>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: isSel ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                            {cat.title}
                          </h4>
                          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{cat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Amount & Donor Details Form */}
              <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
                <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                  2. सहयोग राशि एवं विवरण
                </h3>

                <form onSubmit={handleDonateSubmit}>
                  
                  {/* Preset Amount buttons */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>सहयोग राशि चुनें (₹)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {AMOUNTS.map((amt) => {
                        const active = selectedAmount === amt && !customAmount;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => handleAmountClick(amt)}
                            style={{
                              padding: '0.65rem 0',
                              borderRadius: 'var(--radius-sm)',
                              background: active ? 'var(--accent-gold)' : 'var(--bg-primary)',
                              color: active ? '#0f0d0e' : 'var(--text-primary)',
                              fontWeight: '800',
                              border: '1px solid var(--border-color)',
                              cursor: 'pointer'
                            }}
                          >
                            ₹ {amt}
                          </button>
                        );
                      })}
                    </div>

                    <input
                      type="number"
                      placeholder="या कोई अन्य राशि भरें (₹ Custom Amount)..."
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontWeight: '700'
                      }}
                    />
                  </div>

                  {/* Donor Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>आपका नाम *</label>
                      <input type="text" required placeholder="उदा: श्री सुरेश चन्द्र गुप्ता" value={donorInfo.name} onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>मोबाइल नंबर *</label>
                      <input type="tel" required placeholder="+91 9876543210" value={donorInfo.phone} onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>शहर / स्थान</label>
                        <input type="text" placeholder="लखनऊ / दिल्ली" value={donorInfo.city} onChange={(e) => setDonorInfo({ ...donorInfo, city: e.target.value })} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>पैन नंबर (ऐच्छिक)</label>
                        <input type="text" placeholder="ABCDE1234F" value={donorInfo.pan} onChange={(e) => setDonorInfo({ ...donorInfo, pan: e.target.value })} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem' }}>
                    ₹ {finalAmount.toLocaleString('en-IN')} सहयोग प्रदान करें →
                  </button>

                </form>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
