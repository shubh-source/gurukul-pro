import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialFloating from './components/SocialFloating';
import AudioPlayer from './components/AudioPlayer';
import SearchModal from './components/SearchModal';
import LanguageModal from './components/LanguageModal';

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

const HASH_MAP = {
  '': 'home',
  '#/': 'home',
  '#/about': 'about',
  '#/gurukul': 'gurukul',
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
  const hash = window.location.hash || '';
  return HASH_MAP[hash] || 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromHash());

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gurukul_theme') || 'dark';
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('gurukul_lang') || 'hi';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync theme with HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gurukul_theme', theme);
  }, [theme]);

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
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    const nextLang = lang === 'hi' ? 'en' : 'hi';
    setLang(nextLang);
    localStorage.setItem('gurukul_lang', nextLang);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About onNavigate={handlePageChange} lang={lang} />;
      case 'gurukul': return <Gurukul onNavigate={handlePageChange} lang={lang} />;
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
      <LanguageModal currentLang={lang} onSelectLanguage={(l) => setLang(l)} />

      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        theme={theme}
        toggleTheme={toggleTheme}
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
