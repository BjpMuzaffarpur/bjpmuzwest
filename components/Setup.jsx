export default function Setup() {
  // हर बॉक्स के लिए अलग-अलग राउंडेड कार्ड स्टाइल और कलर्स
  const Assembly = [
    { 
      id: 1, 
      nameEn: '95 Kanti Assembly', 
      nameHi: '95 कांटी विधानसभा', 
      booths: '396 Booths',
      bgColor: '#EFF6FF',     // Soft Blue
      accentColor: '#2563EB'   // Bright Blue
    },
    { 
      id: 2, 
      nameEn: '90 Minapur Assembly', 
      nameHi: '90 मीनापुर विधानसभा', 
      booths: '345 Booths',
      bgColor: '#F0FDF4',     // Soft Green
      accentColor: '#16A34A'   // Bright Green
    },
    { 
      id: 3, 
      nameEn: '96 Baruraj Assembly', 
      nameHi: '96 बरुराज विधानसभा', 
      booths: '357 Booths',
      bgColor: '#FFFBEB',     // Soft Amber
      accentColor: '#D97706'   // Amber Gold
    },
    { 
      id: 4, 
      nameEn: '97 Paroo Assembly', 
      nameHi: '97 पारू विधानसभा', 
      booths: '388 Booths',
      bgColor: '#FAF5FF',     // Soft Purple
      accentColor: '#9333EA'   // Deep Purple
    },
    { 
      id: 5, 
      nameEn: '98 Sahebganj Assembly', 
      nameHi: '98 साहेबगंज विधानसभा', 
      booths: '385 Booths',
      bgColor: '#FFF1F2',     // Soft Pink/Red
      accentColor: '#E11D48'   // Rose Red
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
              {/* गोल आकार का ऊपर वाला टैग */}
              <div 
                className="round-badge"
                style={{ backgroundColor: item.accentColor, color: '#FFFFFF' }}
              >
                Assembly
              </div>

              {/* टेक्स्ट सामग्री */}
              <div className="card-content">
                <h3 data-lang="en" style={{ color: '#0F172A' }}>{item.nameEn}</h3>
                <h3 data-lang="hi" style={{ color: '#0F172A' }}>{item.nameHi}</h3>
              </div>

              {/* गोल आकार का बूथ काउंट टैग */}
              <span 
                className="round-booth-count"
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
