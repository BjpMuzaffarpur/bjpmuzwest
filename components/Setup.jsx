export default function Setup() {
  const Assembly = [
    { 
      id: 1, 
      nameEn: '95 Kanti Assembly', 
      nameHi: '95 कांटी विधानसभा',
      mandal: '6 Mandal',
      booths: '396 Booths',
      bgColor: 'rgba(255, 122, 26, 0.12)',   // Soft Saffron tint
      accentColor: 'var(--saffron)'
    },
    { 
      id: 2, 
      nameEn: '90 Minapur Assembly', 
      nameHi: '90 मीनापुर विधानसभा',
      mandal: '6 Mandal',
      booths: '345 Booths',
      bgColor: 'rgba(18, 138, 62, 0.12)',    // Soft Green tint
      accentColor: 'var(--green)'
    },
    { 
      id: 3, 
      nameEn: '96 Baruraj Assembly', 
      nameHi: '96 बरुराज विधानसभा',
      mandal: '7 Mandal',
      booths: '357 Booths',
      bgColor: 'rgba(244, 197, 66, 0.12)',   // Soft Gold tint
      accentColor: 'var(--gold)'
    },
    { 
      id: 4, 
      nameEn: '97 Paroo Assembly', 
      nameHi: '97 पारू विधानसभा',
      mandal: '6 Mandal',
      booths: '388 Booths',
      bgColor: 'rgba(232, 93, 4, 0.12)',     // Soft Deep Saffron tint
      accentColor: 'var(--saffron-deep)'
    },
    { 
      id: 5, 
      nameEn: '98 Sahebganj Assembly', 
      nameHi: '98 साहेबगंज विधानसभा', 
      mandal: '7 Mandal',
      booths: '385 Booths',
      bgColor: 'rgba(255, 255, 255, 0.10)',  // Soft White Glass tint
      accentColor: 'var(--white)'
    },    
  ];

  return (
    <section className="section-pad section-alt" id="setup">
      <div className="container">
        <span className="eyebrow" data-lang="en">Network</span>
        <span className="eyebrow" data-lang="hi">नेटवर्क</span>
        <h2 className="section-title">
          <span data-lang="en">Administrative Setup</span>
          <span data-lang="hi">संगठनात्मक संरचना</span>
        </h2>

        <div className="setup-grid">
          {Assembly.map((item) => (
            <div 
              key={item.id} 
              className="round-setup-card"
              style={{
                backgroundColor: item.bgColor,
                borderColor: item.accentColor
              }}
            >
              {/* Badge Top */}
              <div 
                className="round-badge"
                style={{ 
                  backgroundColor: item.accentColor, 
                  color: item.accentColor === 'var(--white)' ? 'var(--navy-deep)' : 'var(--white)' 
                }}
              >
                Assembly
              </div>

              {/* Title Section */}
              <div className="card-content">
                <h3 data-lang="en">{item.nameEn}</h3>
                <h3 data-lang="hi">{item.nameHi}</h3>
                <p className="mandal-text">{item.mandal}</p>
              </div>

              {/* Booth Count Capsule */}
              <span 
                className="round-booth-count"
                style={{
                  color: item.accentColor,
                  borderColor: item.accentColor
                }}
              >
                {item.booths}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
