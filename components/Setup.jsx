export default function Setup() {
  const Assembly = [
    { 
      id: 1, 
      nameEn: '95 Kanti Assembly', 
      nameHi: '95 कांटी विधानसभा', 
      booths: '396 Booths',
      badgeColor: '#E0F2FE', // Light Blue
      accentColor: '#0284C7'  // Sky Blue
    },
    { 
      id: 2, 
      nameEn: '90 Minapur Assembly', 
      nameHi: '90 मीनापुर विधानसभा', 
      booths: '345 Booths',
      badgeColor: '#DCFCE7', // Light Green
      accentColor: '#16A34A'  // Emerald
    },
    { 
      id: 3, 
      nameEn: '96 Baruraj Assembly', 
      nameHi: '96 बरुराज विधानसभा', 
      booths: '357 Booths',
      badgeColor: '#FEF3C7', // Light Amber
      accentColor: '#D97706'  // Amber
    },
    { 
      id: 4, 
      nameEn: '97 Paroo Assembly', 
      nameHi: '97 पारू विधानसभा', 
      booths: '388 Booths',
      badgeColor: '#F3E8FF', // Light Purple
      accentColor: '#9333EA'  // Purple
    },
    { 
      id: 5, 
      nameEn: '98 Sahebganj Assembly', 
      nameHi: '98 साहेबगंज विधानसभा', 
      booths: '385 Booths',
      badgeColor: '#FFE4E6', // Light Rose
      accentColor: '#E11D48'  // Rose
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
              className="setup-card"
              style={{
                backgroundColor: item.badgeColor,
                borderTop: `4px solid ${item.accentColor}`,
              }}
            >
              <div 
                className="setup-badge"
                style={{ backgroundColor: item.accentColor, color: '#FFFFFF' }}
              >
                Assembly
              </div>

              <div className="card-content">
                <h3 data-lang="en" style={{ color: '#0F172A' }}>{item.nameEn}</h3>
                <h3 data-lang="hi" style={{ color: '#0F172A' }}>{item.nameHi}</h3>
              </div>

              <span 
                className="booth-count"
                style={{
                  backgroundColor: '#FFFFFF',
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
