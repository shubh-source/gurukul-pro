import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Sparkles, Bell, Heart, BookOpen, Coffee, Flame } from 'lucide-react';

const ROUTINE_SCHEDULE = [
  { startHour: 4, startMin: 0, endHour: 5, endMin: 0, titleHi: 'ब्रह्म मुहूर्त जागरण व मंगल आरती', titleEn: 'Brahma Muhurta Awakening & Mangal Aarti', icon: Sun, color: '#ffb74d' },
  { startHour: 5, startMin: 0, endHour: 6, endMin: 30, titleHi: 'योगाभ्यास, प्राणायाम व शौच-स्नान', titleEn: 'Yogasana, Pranayama & Morning Bath', icon: Heart, color: '#81c784' },
  { startHour: 6, startMin: 30, endHour: 8, endMin: 0, titleHi: 'नित्य देवपूजन, यज्ञाहुति व सन्ध्या-वन्दन', titleEn: 'Morning Dev Puja, Yagya & Sandhya-Vandan', icon: Flame, color: '#ff8a65' },
  { startHour: 8, startMin: 0, endHour: 8, endMin: 45, titleHi: 'सात्त्विक अल्पाहार (नाश्ता)', titleEn: 'Sattvic Morning Breakfast', icon: Coffee, color: '#a1887f' },
  { startHour: 8, startMin: 45, endHour: 12, endMin: 30, titleHi: 'प्रथम सत्र: वेद, वेदांग व अष्टाध्यायी व्याकरण पाठ', titleEn: 'Session 1: Vedas, Vedangas & Panini Grammar', icon: BookOpen, color: '#64b5f6' },
  { startHour: 12, startMin: 30, endHour: 13, endMin: 30, titleHi: 'दोपहर सात्त्विक भोजन व विश्राम', titleEn: 'Afternoon Lunch & Rest', icon: Sun, color: '#fff176' },
  { startHour: 13, startMin: 30, endHour: 16, endMin: 30, titleHi: 'द्वितीय सत्र: आधुनिक कंप्यूटर, गणित व अंग्रेजी', titleEn: 'Session 2: Computer Science, Math & English', icon: Sparkles, color: '#ba68c8' },
  { startHour: 16, startMin: 30, endHour: 17, endMin: 30, titleHi: 'क्रीड़ा, धनुर्विद्या व गौशाला गौसेवा', titleEn: 'Sports, Archery & Gaushala Cow Care', icon: Heart, color: '#81c784' },
  { startHour: 17, startMin: 30, endHour: 19, endMin: 0, titleHi: 'सायं सन्ध्या-वन्दन, स्तोत्र पाठ व आरती', titleEn: 'Evening Sandhya-Vandan, Stotra & Aarti', icon: Flame, color: '#ff8a65' },
  { startHour: 19, startMin: 0, endHour: 20, endMin: 0, titleHi: 'रात्रि सात्त्विक भोजन (रात्रिशोभन)', titleEn: 'Night Sattvic Dinner', icon: Coffee, color: '#a1887f' },
  { startHour: 20, startMin: 0, endHour: 21, endMin: 30, titleHi: 'स्वाध्याय, गुरु-शिष्य विचार विमर्श व शंका समाधान', titleEn: 'Night Swadhyay & Guru Samvaad', icon: BookOpen, color: '#7986cb' },
  { startHour: 21, startMin: 30, endHour: 23, endMin: 59, titleHi: 'रात्रि विश्राम (शांति निद्रा)', titleEn: 'Night Sleep & Peaceful Rest', icon: Moon, color: '#90a4ae' },
  { startHour: 0, startMin: 0, endHour: 4, endMin: 0, titleHi: 'रात्रि विश्राम (शांति निद्रा)', titleEn: 'Night Sleep & Peaceful Rest', icon: Moon, color: '#90a4ae' }
];

export default function LiveRoutineTracker({ lang }) {
  const isEn = lang === 'en';
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(timer);
  }, []);

  const currentHour = now.getHours();
  const currentMin = now.getMinutes();

  const activeRoutine = ROUTINE_SCHEDULE.find((r) => {
    const startVal = r.startHour * 60 + r.startMin;
    const endVal = r.endHour * 60 + r.endMin;
    const nowVal = currentHour * 60 + currentMin;
    return nowVal >= startVal && nowVal < endVal;
  }) || ROUTINE_SCHEDULE[0];

  const IconComp = activeRoutine.icon;
  const formattedTime = now.toLocaleTimeString(isEn ? 'en-US' : 'hi-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div 
      className="glass-panel pulse-glow"
      style={{
        padding: '1.25rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, rgba(28, 24, 27, 0.95) 0%, rgba(45, 30, 20, 0.95) 100%)',
        border: '1px solid var(--accent-gold)',
        marginBottom: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div 
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.18)',
            border: '1px solid var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: activeRoutine.color,
            flexShrink: 0
          }}
        >
          <IconComp size={24} />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <span 
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4caf50',
                boxShadow: '0 0 10px #4caf50',
                display: 'inline-block'
              }}
            />
            <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {isEn ? 'Live Gurukul Routine Tracker' : 'गुरुकुल लाइव वर्तमान गतिविधि'}
            </span>
          </div>

          <h4 className="font-serif" style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff' }}>
            {isEn ? activeRoutine.titleEn : activeRoutine.titleHi}
          </h4>
        </div>
      </div>

      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--border-color)',
          fontSize: '0.85rem',
          fontWeight: '800',
          color: 'var(--accent-gold)'
        }}
      >
        <Clock size={16} />
        <span>{formattedTime}</span>
      </div>
    </div>
  );
}
