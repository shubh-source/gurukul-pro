import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialFloating from './components/SocialFloating';
import AudioPlayer from './components/AudioPlayer';
import SearchModal from './components/SearchModal';
import LanguageModal from './components/LanguageModal';
import WelcomeModal from './components/WelcomeModal';

import Home from './pages/Home';
import About from './pages/About';
import Gurukul from './pages/Gurukul';
import Gaushala from './pages/Gaushala';
import Research from './pages/Research';
import Sanskar from './pages/Sanskar';
import Jyotish from './pages/Jyotish';
import Donate from './pages/Donate';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import Contact from './pages/Contact';
import Academics from './pages/Academics';

const HASH_MAP = {
  '': 'home',
  '#/': 'home',
  '#/about': 'about',
  '#/gurukul': 'gurukul',
  '#/academics': 'academics',
  '#/gaushala': 'gaushala',
  '#/research': 'research',
  '#/sanskar': 'sanskar',
  '#/jyotish': 'jyotish',
  '#/donate': 'donate',
  '#/admission': 'admission',
  '#/gallery': 'gallery',
  '#/notice': 'notice',
  '#/contact': 'contact'
};

const getPageFromHash = () => {
  let hash = window.location.hash || '';
  hash = hash.split('?')[0];
  if (hash.endsWith('/') && hash.length > 2) {
    hash = hash.slice(0, -1);
  }
  if (hash.startsWith('#') && !hash.startsWith('#/')) {
    hash = '#/' + hash.slice(1);
  }
  return HASH_MAP[hash] || 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromHash());

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('gurukul_lang') || 'hi';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Enforce pure light theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.backgroundColor = '#fdfbf7';
    document.documentElement.style.color = '#1c1917';
    localStorage.setItem('gurukul_theme', 'light');
  }, []);

  // Sync language with HTML lang attribute
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('gurukul_lang', lang);
  }, [lang]);

  // Handle Hash-based Navigation
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    const targetHash = pageId === 'home' ? '#/' : `#/${pageId}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'hi' ? 'en' : 'hi';
    setLang(nextLang);
    localStorage.setItem('gurukul_lang', nextLang);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About onNavigate={handlePageChange} lang={lang} />;
      case 'gurukul': return <Gurukul onNavigate={handlePageChange} lang={lang} />;
      case 'academics': return <Academics onNavigate={handlePageChange} lang={lang} />;
      case 'gaushala': return <Gaushala onNavigate={handlePageChange} lang={lang} />;
      case 'research': return <Research onNavigate={handlePageChange} lang={lang} />;
      case 'sanskar': return <Sanskar onNavigate={handlePageChange} lang={lang} />;
      case 'jyotish': return <Jyotish onNavigate={handlePageChange} lang={lang} />;
      case 'donate': return <Donate onNavigate={handlePageChange} lang={lang} />;
      case 'admission': return <Admission onNavigate={handlePageChange} lang={lang} />;
      case 'gallery': return <Gallery onNavigate={handlePageChange} lang={lang} />;
      case 'notice': return <Notice onNavigate={handlePageChange} lang={lang} />;
      case 'contact': return <Contact onNavigate={handlePageChange} lang={lang} />;
      default: return <Home onNavigate={handlePageChange} lang={lang} />;
    }
  };

  return (
    <div className="page-container">
      <WelcomeModal onNavigate={handlePageChange} lang={lang} />
      <LanguageModal currentLang={lang} onSelectLanguage={(l) => setLang(l)} />

      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        lang={lang}
        onToggleLang={toggleLang}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer setActivePage={handlePageChange} lang={lang} />

      <SocialFloating />
      <AudioPlayer />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handlePageChange}
        lang={lang}
      />
    </div>
  );
}
