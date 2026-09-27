import React, { useState } from 'react';
import { Images } from '../assets/images';
import { BookOpen, Search, Code, Cpu, Activity, Award, CheckCircle2, ChevronRight, X } from 'lucide-react';

const COURSES = [
  {
    id: 'c1',
    category: 'Vedic STEM',
    title: 'Vedic Mathematics & Binary Algorithms',
    grade: 'Class VI - XII',
    instructor: 'Acharya Dr. Devavrat Shastri',
    duration: 'Full Academic Year',
    image: Images.stemVedicLab,
    description: 'Learn the 16 Sutras of Vedic Math for high-speed mental calculations, matrix manipulation, and Pingala binary prosody applied to modern computer science.',
    syllabus: [
      'Ekadhikena Purvena Sutra for Instant Multiplications',
      'Pingala Chhandas & Binary Number Representation',
      'Vedic Trignometry & Astronomical Geometry',
      'Algorithmic Complexity Optimization'
    ]
  },
  {
    id: 'c2',
    category: 'AI & Robotics',
    title: 'Quantum Artificial Intelligence & Ethics',
    grade: 'Class VIII - XII',
    instructor: 'Dr. Ananya Vedant',
    duration: 'Full Academic Year',
    image: Images.heroCampus,
    description: 'Hands-on Python, neural networks, robotics building, and Upaniṣadic ethics in Autonomous Systems.',
    syllabus: [
      'Fundamentals of Python & Linear Algebra',
      'Neural Networks & Computer Vision Labs',
      'Autonomous Robotics Assembly',
      'Dharmic Ethics in AI & Consciousness Studies'
    ]
  },
  {
    id: 'c3',
    category: 'Yogic Science',
    title: 'Pranayama, Meditation & Marma Mastery',
    grade: 'All Grades',
    instructor: 'Yogacharya Swami Prakashananda',
    duration: 'Daily Sadhana',
    image: Images.yogaMeditation,
    description: 'Comprehensive physical, mental, and bio-energetic training through Patanjali Yoga Sutras and Kalaripayattu body discipline.',
    syllabus: [
      'Asana Alignment & Spine Health',
      'Pranayama Techniques for Cognitive Focus',
      'Trataka & Mind Concentration Mastery',
      'Marma Vital Points & Physical Self-Defense'
    ]
  },
  {
    id: 'c4',
    category: 'Ayurveda & Bio-Sciences',
    title: 'Herbal Medicine, Botany & Organic Agriculture',
    grade: 'Class VII - XII',
    instructor: 'Dr. Rajeshwari Sharma',
    duration: 'Full Academic Year',
    image: Images.library,
    description: 'Plant taxonomy, soil microbiology, medicinal herb extraction, and Gaushala eco-sustainability.',
    syllabus: [
      'Identification of 100+ Medicinal Flora',
      'Organic Farm Soil Microbiology',
      'Panchagavya & Natural Bio-Fertilizers',
      'Ayurvedic Preventive Nutrition'
    ]
  }
];

export default function Academics({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const categories = ['All', 'Vedic STEM', 'AI & Robotics', 'Yogic Science', 'Ayurveda & Bio-Sciences'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === selectedCategory);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">HOLISTIC CURRICULUM</span>
          <h1 className="section-title font-serif">Academic Streams & Syllabus</h1>
          <p className="section-subtitle">
            Integrative education merging CBSE/ICSE board excellence with deep Vedic insights, AI coding, and physical mastery.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '3rem 0 2rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: selectedCategory === cat ? '700' : '500',
                  background: selectedCategory === cat ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat ? '#0f0d0e' : 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
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
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition)'
                }}
              >
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="badge-gold">{course.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{course.grade}</span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                    {course.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-saffron)', fontWeight: '700' }}>
                      Guru: {course.instructor}
                    </span>
                    <button
                      onClick={() => setActiveCourseModal(course)}
                      className="gold-outline-btn"
                      style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
                    >
                      View Syllabus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Syllabus Modal */}
      {activeCourseModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveCourseModal(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '560px',
              width: '100%',
              background: 'var(--bg-primary)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--accent-gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{activeCourseModal.category}</span>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800' }}>{activeCourseModal.title}</h3>
              </div>
              <button onClick={() => setActiveCourseModal(null)} style={{ color: 'var(--text-muted)' }}>
                <X size={22} />
              </button>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {activeCourseModal.description}
            </p>

            <h4 className="font-serif" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--accent-gold)' }}>
              Core Syllabus & Modules:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {activeCourseModal.syllabus.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-saffron)' }} />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveCourseModal(null);
                onNavigate('admissions');
              }}
              className="saffron-gradient-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Apply For Admission in this Stream
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
