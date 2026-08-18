'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Home">
            <span className="brand-emblem">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2C12 2 9 6 9 10c0 1.5.7 2.7 1.6 3.6C9.6 14.2 9 15.4 9 16.8 9 19.1 10.8 21 13 21c1.6 0 3-.9 3.7-2.2.3.1.6.2 1 .2 1.8 0 3.3-1.5 3.3-3.3 0-1.4-.9-2.6-2.1-3.1C19 11.7 19 10.8 19 10c0-4-3-8-3-8s-1 2-1 4c0-2-1-4-3-4z" fill="white"/></svg>
            </span>
            <span className="brand-text">
              <span className="name" data-lang="en">BJP &mdash; Muzaffarpur West</span>
              <span className="name" data-lang="hi">भाजपा &mdash; मुजफ्फरपुर पश्चिम</span>
              <span className="sub" data-lang="en">District Unit, Bihar</span>
              <span className="sub" data-lang="hi">जिला इकाई, बिहार</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Primary">
            <a href="#about" data-lang="en">About</a><a href="#about" data-lang="hi">परिचय</a>
            <a href="#organization" data-lang="en">Organization</a><a href="#organization" data-lang="hi">संगठन</a>
            <a href="#setup" data-lang="en">Setup</a><a href="#setup" data-lang="hi">संरचना</a>
            <a href="#bearers" data-lang="en">Office Bearer</a><a href="#bearers" data-lang="hi">पदाधिकारी</a>
            <a href="#gallery" data-lang="en">Gallery</a><a href="#gallery" data-lang="hi">गैलरी</a>
            <a href="#news" data-lang="en">News</a><a href="#news" data-lang="hi">समाचार</a>
          </nav>

          <div className="header-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Switch language">
              {lang === 'en' ? 'हिंदी' : 'English'}
            </button>
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen}>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMobileOpen(false)} data-lang="en">About</a>
        <a href="#about" onClick={() => setMobileOpen(false)} data-lang="hi">परिचय</a>
        <a href="#organization" onClick={() => setMobileOpen(false)} data-lang="en">Organization</a>
        <a href="#organization" onClick={() => setMobileOpen(false)} data-lang="hi">संगठन</a>
        <a href="#bearers" onClick={() => setMobileOpen(false)} data-lang="en">Office Bearer</a>
        <a href="#bearers" onClick={() => setMobileOpen(false)} data-lang="hi">पदाधिकारी</a>
        <a href="#news" onClick={() => setMobileOpen(false)} data-lang="en">News</a>
        <a href="#news" onClick={() => setMobileOpen(false)} data-lang="hi">समाचार</a>
      </nav>
    </>
  );
}