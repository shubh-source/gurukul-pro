import React, { useState } from 'react';
import { Images } from '../assets/images';
import { BookOpen, Search, Code, Cpu, Activity, Award, CheckCircle2, ChevronRight, X } from 'lucide-react';

export default function Academics({ onNavigate, lang }) {
  const isEn = lang === 'en';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const COURSES = [
    {
      id: 'c1',
      category: 'Vedic STEM',
      categoryLabel: isEn ? 'Vedic STEM' : 'वैदिक STEM',
      title: isEn ? 'Vedic Mathematics & Binary Algorithms' : 'वैदिक गणित एवं बाइनरी एल्गोरिदम',
      grade: isEn ? 'Class VI - XII' : 'कक्षा 6 - 12',
      instructor: isEn ? 'Acharya Dr. Devavrat Shastri' : 'आचार्य डॉ. देवव्रत शास्त्री',
      duration: isEn ? 'Full Academic Year' : 'सम्पूर्ण शैक्षणिक सत्र',
      image: Images.stemVedicLab,
      description: isEn 
        ? 'Learn the 16 Sutras of Vedic Math for high-speed mental calculations, matrix manipulation, and Pingala binary prosody applied to modern computer science.'
        : 'तीव्र मानसिक गणनाओं के लिए वैदिक गणित के 16 सूत्र, पिङ्गल छन्द शास्त्र आधारित द्वि-आधारी (बाइनरी) पद्धति एवं कंप्यूटर विज्ञान अनुप्रयोग।',
      syllabus: isEn ? [
        'Ekadhikena Purvena Sutra for Instant Multiplications',
        'Pingala Chhandas & Binary Number Representation',
        'Vedic Trigonometry & Astronomical Geometry',
        'Algorithmic Complexity Optimization'
      ] : [
        'एकाधिकेन पूर्वेण सूत्र द्वारा द्रुत गति गुणन',
        'पिङ्गल छन्द शास्त्र एवं बाइनरी अंक प्रणाली',
        'वैदिक त्रिकोणमिति एवं खगोलीय ज्यामिति',
        'एल्गोरिदम जटिलता न्यूनीकरण विधि'
      ]
    },
    {
      id: 'c2',
      category: 'AI & Robotics',
      categoryLabel: isEn ? 'AI & Robotics' : 'AI एवं रोबोटिक्स',
      title: isEn ? 'Quantum Artificial Intelligence & Ethics' : 'क्वांटम आर्टिफिशियल इंटेलिजेंस एवं आचारशास्त्र',
      grade: isEn ? 'Class VIII - XII' : 'कक्षा 8 - 12',
      instructor: isEn ? 'Dr. Ananya Vedant' : 'डॉ. अनन्या वेदांत',
      duration: isEn ? 'Full Academic Year' : 'सम्पूर्ण शैक्षणिक सत्र',
      image: Images.heroCampus,
      description: isEn 
        ? 'Hands-on Python, neural networks, robotics building, and Upanishadic ethics in Autonomous Systems.'
        : 'पायथन कोडिंग, न्यूरल नेटवर्क, रोबोटिक्स निर्माण तथा स्वायत्त प्रणालियों में उपनिषद् आधारित नैतिक मूल्य।',
      syllabus: isEn ? [
        'Fundamentals of Python & Linear Algebra',
        'Neural Networks & Computer Vision Labs',
        'Autonomous Robotics Assembly',
        'Dharmic Ethics in AI & Consciousness Studies'
      ] : [
        'पायथन प्रोग्रामिंग एवं रैखिक बीजगणित',
        'न्यूरल नेटवर्क एवं कंप्यूटर विजन प्रयोगशाला',
        'स्वायत्त रोबोटिक्स संरचना व प्रोग्रामिंग',
        'AI में नैतिक मूल्य एवं चेतना अध्ययन'
      ]
    },
    {
      id: 'c3',
      category: 'Yogic Science',
      categoryLabel: isEn ? 'Yogic Science' : 'योग विज्ञान',
      title: isEn ? 'Pranayama, Meditation & Marma Mastery' : 'प्राणायाम, ध्यान एवं मर्म चिकित्सा',
      grade: isEn ? 'All Grades' : 'समस्त कक्षाएं',
      instructor: isEn ? 'Yogacharya Swami Prakashananda' : 'योगाचार्य स्वामी प्रकाशानन्द',
      duration: isEn ? 'Daily Sadhana' : 'दैनिक साधना',
      image: Images.yogaMeditation,
      description: isEn 
        ? 'Comprehensive physical, mental, and bio-energetic training through Patanjali Yoga Sutras and body discipline.'
        : 'पातञ्जल योगसूत्रों के आधार पर शारीरिक, मानसिक एवं प्राणिक संतुलन, ध्यान एवं आत्मरक्षा अभ्यास।',
      syllabus: isEn ? [
        'Asana Alignment & Spine Health',
        'Pranayama Techniques for Cognitive Focus',
        'Trataka & Mind Concentration Mastery',
        'Marma Vital Points & Physical Self-Defense'
      ] : [
        'योगासन संरेखण एवं मेरुदण्ड स्वास्थ्य',
        'एकाग्रता संवर्धन हेतु प्राणायाम विधियां',
        'त्राटक क्रिया एवं ध्यान साधना',
        'मर्म स्थान विज्ञान एवं आत्मरक्षा'
      ]
    },
    {
      id: 'c4',
      category: 'Ayurveda & Bio-Sciences',
      categoryLabel: isEn ? 'Ayurveda & Bio-Sciences' : 'आयुर्वेद एवं जैव-विज्ञान',
      title: isEn ? 'Herbal Medicine, Botany & Organic Agriculture' : 'आयुर्वेदिक वनौषधि, वनस्पति विज्ञान एवं जैविक कृषि',
      grade: isEn ? 'Class VII - XII' : 'कक्षा 7 - 12',
      instructor: isEn ? 'Dr. Rajeshwari Sharma' : 'डॉ. राजेश्वरी शर्मा',
      duration: isEn ? 'Full Academic Year' : 'सम्पूर्ण शैक्षणिक सत्र',
      image: Images.library,
      description: isEn 
        ? 'Plant taxonomy, soil microbiology, medicinal herb extraction, and Gaushala eco-sustainability.'
        : 'पादप वर्गीकरण, मृदा सूक्ष्मजीव विज्ञान, औषधीय पौधों का निष्कर्षण एवं गौ-आधारित जैविक कृषि संवर्धन।',
      syllabus: isEn ? [
        'Identification of 100+ Medicinal Flora',
        'Organic Farm Soil Microbiology',
        'Panchagavya & Natural Bio-Fertilizers',
        'Ayurvedic Preventive Nutrition'
      ] : [
        '100+ औषधीय वनस्पतियों की पहचान',
        'जैविक कृषि मृदा सूक्ष्मजीव विज्ञान',
        'पञ्चगव्य निर्माण एवं प्राकृतिक जैविक खाद',
        'आयुर्वेदिक ऋतुचर्या एवं आहार विज्ञान'
      ]
    }
  ];

  const categories = [
    { id: 'All', label: isEn ? 'All' : 'सभी' },
    { id: 'Vedic STEM', label: isEn ? 'Vedic STEM' : 'वैदिक STEM' },
    { id: 'AI & Robotics', label: isEn ? 'AI & Robotics' : 'AI एवं रोबोटिक्स' },
    { id: 'Yogic Science', label: isEn ? 'Yogic Science' : 'योग विज्ञान' },
    { id: 'Ayurveda & Bio-Sciences', label: isEn ? 'Ayurveda & Bio-Sciences' : 'आयुर्वेद एवं जैव-विज्ञान' }
  ];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === selectedCategory);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">{isEn ? 'HOLISTIC CURRICULUM' : 'समग्र शैक्षणिक पाठ्यक्रम'}</span>
          <h1 className="section-title font-serif">{isEn ? 'Academic Streams & Syllabus' : 'शैक्षणिक शाखाएं एवं पाठ्यक्रम'}</h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Integrative education merging academic excellence with deep Vedic insights, AI coding, and physical mastery.'
              : 'संस्कृत वेद-वेदांग, भारतीय दर्शन, आधुनिक विज्ञान, कंप्यूटर कोडिंग एवं शारीरिक योग का समग्र समन्वय।'}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '3rem 0 2rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  background: selectedCategory === cat.id ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat.id ? '#0f0d0e' : 'var(--text-primary)',
                  fontWeight: '700',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'var(--transition)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {filteredCourses.map(course => (
              <div 
                key={course.id} 
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div>
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="badge-gold">{course.categoryLabel}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{course.grade}</span>
                    </div>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                      {course.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {course.description}
                    </p>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '1.25rem' }}>
                      👨‍🏫 {course.instructor}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                  <button 
                    onClick={() => setActiveCourseModal(course)}
                    className="gold-outline-btn"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                  >
                    {isEn ? 'View Complete Syllabus →' : 'विस्तृत पाठ्यक्रम देखें →'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SYLLABUS DETAIL MODAL */}
      {activeCourseModal && (
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
          onClick={() => setActiveCourseModal(null)}
        >
          <div 
            className="glass-panel"
            style={{
              maxWidth: '600px',
              width: '100%',
              background: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '2px solid var(--accent-gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveCourseModal(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={24} />
            </button>

            <span className="badge-gold" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{activeCourseModal.categoryLabel}</span>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              {activeCourseModal.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              {activeCourseModal.grade} • {activeCourseModal.duration} • {activeCourseModal.instructor}
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--accent-saffron)' }}>
              {isEn ? 'Key Curriculum Modules:' : 'प्रमुख पाठ्यक्रम मॉड्यूल:'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              {activeCourseModal.syllabus.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => { setActiveCourseModal(null); onNavigate('admission'); }}
              className="saffron-gradient-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isEn ? 'Enroll via Admission Process →' : 'प्रवेश प्रक्रिया द्वारा नामांकन करें →'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
