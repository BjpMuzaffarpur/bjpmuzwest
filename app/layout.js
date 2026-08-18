'use client';

import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PoliticalParty',
            name: 'Bharatiya Janata Party - Muzaffarpur West District',
            alternateName: 'भारतीय जनता पार्टी, मुजफ्फरपुर पश्चिमी जिला',
            url: 'https://bjpmuzaffarpurwest.example/',
            logo: 'assets/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Muzaffarpur',
              addressRegion: 'Bihar',
              addressCountry: 'IN',
            },
          }) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
