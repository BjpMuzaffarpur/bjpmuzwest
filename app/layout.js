import './globals.css';

export const metadata = {
  title: 'Bharatiya Janata Party | Muzaffarpur West District',
  description: 'Official website of Bharatiya Janata Party, Muzaffarpur West District (Bihar) — organization, office bearers, news and gallery.',
  keywords: ['BJP Muzaffarpur West', 'Bharatiya Janata Party Bihar', 'भाजपा मुजफ्फरपुर पश्चिम'],
  openGraph: {
    title: 'Bharatiya Janata Party | Muzaffarpur West District',
    description: 'Organization, office bearers, news & gallery of BJP Muzaffarpur West District, Bihar.',
    images: ['/assets/og-cover.jpg'],
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
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
  };

  return (
    <html lang="en" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
