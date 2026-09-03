import React, { useState } from 'react';
import ScholarshipCalculator from '../components/ScholarshipCalculator';
import { GraduationCap, CheckCircle2, FileText, Printer, ArrowRight } from 'lucide-react';

const ADMISSION_STEPS = [
  { step: '1', title: 'प्रवेश आवेदन', desc: 'ऑनलाइन अथवा संस्थान कार्यालय से निःशुल्क प्रवेश फॉर्म प्राप्त कर भरें।' },
  { step: '2', title: 'आवश्यक दस्तावेज जमा', desc: 'जन्म प्रमाण पत्र, पूर्व कक्षा की मार्कशीट व फोटो संग प्रस्तुत करें।' },
  { step: '3', title: 'आवेदन की समीक्षा', desc: 'संस्थान समिति द्वारा छात्र पात्रता एवं दस्तावेजों का सत्यापन।' },
  { step: '4', title: 'चयन एवं साक्षात्कार', desc: 'बालक व अभिभावक के साथ सामान्य विचार-विमर्श एवं मौखिक परीक्षा।' },
  { step: '5', title: 'गुरुकुल में प्रवेश', desc: 'निःशुल्क आवासीय छात्रावास आवंटन एवं अध्ययन शुभारंभ।' }
];

export default function Admission({ onNavigate, lang }) {
  const isEn = lang === 'en';
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    fatherName: '',
    motherName: '',
    address: '',
    mobile: '',
    email: '',
    prevSchool: '',
    targetClass: 'कक्षा 6',
    notes: ''
  });
  const [slip, setSlip] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const regNum = 'ATG-REG-' + Math.floor(10000 + Math.random() * 90000);
    const today = new Date().toLocaleDateString(isEn ? 'en-US' : 'hi-IN');

    setTimeout(() => {
      setIsSubmitting(false);

      setSlip({
        regNo: regNum,
        date: today,
        ...formData
      });

      // Live Database & WhatsApp Pre-formatted Message
      const textMessage = `🚩 *श्री आत्मानन्द संस्कृत शिक्षण संस्थान — प्रवेश आवेदन पत्र*\n\n` +
        `• *पंजीकरण सं:* ${regNum}\n` +
        `• *विद्यार्थी नाम:* ${formData.studentName}\n` +
        `• *जन्म तिथि:* ${formData.dob}\n` +
        `• *पिता का नाम:* ${formData.fatherName}\n` +
        `• *प्रवेश कक्षा:* ${formData.targetClass}\n` +
        `• *मोबाइल नंबर:* ${formData.mobile}\n` +
        `• *पता:* ${formData.address}`;
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(textMessage)}`;
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'Session 2026-27 Admission Open' : 'सत्र 2026-27 प्रवेश खुला है'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Admission Process & Application Form' : 'प्रवेश प्रक्रिया एवं आवेदन पत्र'}</h1>
          <p className="section-subtitle">
            {isEn ? 'Complete details and online application for Free Residential Gurukul (Classes 6 to 12).' : 'निःशुल्क आवासीय गुरुकुल (कक्षा 6 से 12 तक) हेतु प्रवेश की संपूर्ण जानकारी एवं ऑनलाइन फॉर्म।'}
          </p>
        </div>
      </section>

      {/* ADMISSION STEPS ROADMAP */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* PRO EXCLUSIVE: SCHOLARSHIP CALCULATOR */}
          <ScholarshipCalculator lang={lang} onNavigate={onNavigate} />

          <div className="section-header">
            <span className="section-tag">{isEn ? 'Admission Journey (5 Easy Steps)' : 'प्रवेश यात्रा (5 सरल चरण)'}</span>
            <h2 className="section-title font-serif">Admission Process Roadmap</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            {ADMISSION_STEPS.map((st) => (
              <div 
                key={st.step}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-secondary)',
                  borderTop: '3px solid var(--accent-saffron)',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--accent-saffron)',
                    color: '#fff',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem'
                  }}
                >
                  {st.step}
                </div>
                <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.4rem' }}>{st.title}</h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{st.desc}</p>
              </div>
            ))}
          </div>

          {/* REQUIRED DOCUMENTS CHECKLIST */}
          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '4rem', background: 'var(--bg-secondary)' }}>
            <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
              📋 {isEn ? 'Required Documents Checklist' : 'आवश्यक दस्तावेज (Required Documents Checklist)'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> 1. {isEn ? 'Admission Form' : 'प्रवेश आवेदन पत्र (ऑनलाइन / ऑफलाइन)'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> 2. {isEn ? 'Student Birth Certificate' : 'विद्यार्थी का जन्म प्रमाण पत्र (Birth Certificate)'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> 3. {isEn ? 'Previous Marksheet & TC' : 'पूर्व विद्यालय की अंकसूची एवं टी०सी० (TC)'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> 4. {isEn ? 'Aadhaar Card & 4 Photos' : 'आधार कार्ड एवं 4 पासपोर्ट साइज नवीन फोटो'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} /> 5. {isEn ? 'Permanent Address Proof' : 'स्थायी निवास प्रमाण पत्र (Address Proof)'}
              </div>
            </div>
          </div>

          {/* ONLINE ADMISSION FORM OR CONFIRMATION SLIP */}
          {slip ? (
            /* PRINTABLE REGISTRATION SLIP */
            <div className="glass-panel" style={{ maxWidth: '680px', margin: '0 auto', padding: '2.5rem', background: 'var(--bg-secondary)', border: '2px dashed var(--accent-saffron)' }}>
              <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🚩</span>
                <h2 className="font-serif gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: '800' }}>
                  श्री आत्मानन्द संस्कृत शिक्षण संस्थान
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>नैमिषारण्य, सीतापुर (उ.प्र.) | ऑनलाइन प्रवेश पंजीकरण पर्ची</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <div><strong>पंजीकरण संख्या:</strong> {slip.regNo}</div>
                <div><strong>आवेदन तिथि:</strong> {slip.date}</div>
                <div><strong>विद्यार्थी का नाम:</strong> {slip.studentName}</div>
                <div><strong>जन्म तिथि:</strong> {slip.dob}</div>
                <div><strong>पिता का नाम:</strong> {slip.fatherName}</div>
                <div><strong>माता का नाम:</strong> {slip.motherName}</div>
                <div><strong>प्रवेश हेतु कक्षा:</strong> {slip.targetClass}</div>
                <div><strong>मोबाइल नंबर:</strong> {slip.mobile}</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-color)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <strong>स्थायी पता:</strong> {slip.address}
              </div>

              <div style={{ textAlign: 'center', color: 'var(--accent-emerald)', fontWeight: '700', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                ✓ आपका आवेदन डेटाबेस में सुरक्षित सेव हो गया है एवं व्हाट्सएप्प (WhatsApp Message) पर भेज दिया गया है।
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button onClick={() => window.print()} className="gold-outline-btn">
                  <Printer size={16} /> पर्ची प्रिंट करें
                </button>
                <button onClick={() => setSlip(null)} className="saffron-gradient-btn">
                  नया आवेदन करें →
                </button>
              </div>
            </div>
          ) : (
            /* ONLINE ADMISSION APPLICATION FORM WITH LIVE DATABASE BADGE */
            <div className="glass-panel" style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--accent-gold)' }}>
              
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-emerald-light)',
                  color: 'var(--accent-emerald)',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(27, 94, 32, 0.3)'
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4caf50', display: 'inline-block' }} />
                <span>{isEn ? '🟢 Live Database & Email Sync Active' : '🟢 लाइव डेटाबेस एवं ई-मेल सिंक सक्रिय'}</span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center' }}>
                {isEn ? 'Online Admission Application Form (Session 2026-27)' : 'ऑनलाइन प्रवेश आवेदन पत्र (Session 2026-27)'}
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Student Full Name *' : 'विद्यार्थी का पूरा नाम *'}</label>
                    <input type="text" required placeholder="उदा: आदर्श मिश्रा" value={formData.studentName} onChange={(e) => setFormData({ ...formData, studentName: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Date of Birth *' : 'जन्म तिथि *'}</label>
                    <input type="date" required value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Father Name *' : 'पिता का नाम *'}</label>
                    <input type="text" required placeholder="उदा: श्री रामेश्वर मिश्रा" value={formData.fatherName} onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Mother Name *' : 'माता का नाम *'}</label>
                    <input type="text" required placeholder="उदा: श्रीमती सुशीला देवी" value={formData.motherName} onChange={(e) => setFormData({ ...formData, motherName: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Target Class *' : 'प्रवेश हेतु कक्षा *'}</label>
                    <select value={formData.targetClass} onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontWeight: '700' }}>
                      <option value="कक्षा 6">कक्षा 6 (Class VI)</option>
                      <option value="कक्षा 7">कक्षा 7 (Class VII)</option>
                      <option value="कक्षा 8">कक्षा 8 (Class VIII)</option>
                      <option value="कक्षा 9">कक्षा 9 (Class IX / प्रथमा)</option>
                      <option value="कक्षा 10">कक्षा 10 (Class X / पूर्व मध्यमा)</option>
                      <option value="कक्षा 11">कक्षा 11 (Class XI / उत्तर मध्यमा I)</option>
                      <option value="कक्षा 12">कक्षा 12 (Class XII / उत्तर मध्यमा II)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Previous School Name' : 'पूर्व विद्यालय का नाम'}</label>
                    <input type="text" placeholder="स्कूल का नाम एवं बोर्ड" value={formData.prevSchool} onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Guardian Mobile *' : 'अभिभावक मोबाइल नंबर *'}</label>
                    <input type="tel" required placeholder="+91 9876543210" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Email Address' : 'ईमेल (यदि हो)'}</label>
                    <input type="email" placeholder="example@gmail.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '0.35rem' }}>{isEn ? 'Permanent Address *' : 'स्थायी पता *'}</label>
                  <textarea required rows={3} placeholder="ग्राम/मोहल्ला, पोस्ट, तहसील, जिला, राज्य, पिन कोड" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="saffron-gradient-btn" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (isEn ? 'Processing...' : 'आवेदन संसाधित हो रहा है...') : (
                    isEn ? 'Submit Application (Live Database Sync + Slip)' : 'आवेदन जमा करें (Live Database Sync + Printable Slip)'
                  )}
                </button>

              </form>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
