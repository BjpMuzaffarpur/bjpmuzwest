export default function Setup() {
  const Assembly = [
    { id: 1, nameEn: '95 Kanti Assembly', nameHi: '95 कांटी विधानसभा', booths: '396 Booths' },
    { id: 2, nameEn: '90 Minapur Assembly', nameHi: '90 मीनापुर विधानसभा', booths: '345 Booths' },
    { id: 3, nameEn: '96 Baruraj Assembly', nameHi: '96 बरुराज विधानसभा', booths: '357 Booths' },
    { id: 4, nameEn: '97 Paroo Assembly', nameHi: '97 पारू विधानसभा', booths: '388 Booths' },
    { id: 5, nameEn: '98 Sahebganj Assembly', nameHi: '98 साहेबगंज विधानसभा', booths: '385 Booths' },    
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
          {Assembly.map((Assembly) => (
            <div key={Assembly.id} className="glass setup-card">
              <div className="setup-badge">Assembly</div>
              <h3 data-lang="en">{Assembly.nameEn}</h3>
              <h3 data-lang="hi">{Assembly.nameHi}</h3>
              <span className="booth-count">{Assembly.booths}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
