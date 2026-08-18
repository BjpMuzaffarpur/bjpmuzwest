export default function Setup() {
  const mandals = [
    { id: 1, nameEn: 'Kanti Mandal', nameHi: 'कांटी मंडल', booths: '45+ Booths' },
    { id: 2, nameEn: 'Marwan Mandal', nameHi: 'मरवन मंडल', booths: '38+ Booths' },
    { id: 3, nameEn: 'Saraiya Mandal', nameHi: 'सरैया मंडल', booths: '42+ Booths' },
    { id: 4, nameEn: 'Muzaffarpur West City', nameHi: 'मुजफ्फरपुर पश्चिम नगर', booths: '35+ Booths' },
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
          {mandals.map((mandal) => (
            <div key={mandal.id} className="glass setup-card">
              <div className="setup-badge">Mandal</div>
              <h3 data-lang="en">{mandal.nameEn}</h3>
              <h3 data-lang="hi">{mandal.nameHi}</h3>
              <span className="booth-count">{mandal.booths}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}