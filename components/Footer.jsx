'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="site-footer" id="footer-contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p data-lang="en">Official district unit page of Bharatiya Janata Party, Muzaffarpur West District, Bihar.</p>
            <p data-lang="hi">भारतीय जनता पार्टी, मुजफ्फरपुर पश्चिमी जिला, बिहार का आधिकारिक पेज।</p>
          </div>
          <div className="footer-col">
            <h4 data-lang="en">Contact</h4><h4 data-lang="hi">संपर्क</h4>
            <ul>
              <li><a href="mailto:info@bjpmuzaffarpurwest.example">info@bjpmuzaffarpurwest.example</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span data-lang="en">&copy; 2026 Bharatiya Janata Party. All rights reserved.</span>
          <span data-lang="hi">&copy; 2026 भारतीय जनता पार्टी। सर्वाधिकार सुरक्षित।</span>
        </div>
      </div>

      <a href="#home" className={`to-top ${showTop ? 'show' : ''}`} aria-label="Back to top">
        &uarr;
      </a>
    </footer>
  );
}