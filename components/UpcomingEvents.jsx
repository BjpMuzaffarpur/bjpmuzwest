export default function UpcomingEvents() {
  const upcomingList = [
    {
      id: 1,
      date: '25 Sep 2026',
      titleEn: 'Booth Committee Samagham',
      titleHi: 'बूथ समिति समागम',
      locationEn: 'Muzaffarpur West City',
      locationHi: 'मुजफ्फरपुर पश्चिम नगर',
      statusEn: 'Upcoming',
      statusHi: 'आगामी',
      descEn: 'Strategic planning meet for all booth presidents.',
      descHi: 'सभी बूथ अध्यक्षों के लिए रणनीतिक योजना बैठक।'
    },
    {
      id: 2,
      date: '02 Oct 2026',
      titleEn: 'Swachhata Abhiyan Drive',
      titleHi: 'स्वच्छता अभियान कार्यक्रम',
      locationEn: 'Saraiya Mandal',
      locationHi: 'सरैया मंडल',
      statusEn: 'Upcoming',
      statusHi: 'आगामी',
      descEn: 'Cleanliness campaign across all booths on Gandhi Jayanti.',
      descHi: 'गांधी जयंती पर सभी बूथों पर स्वच्छता अभियान।'
    }
  ];

  return (
    <section className="section-pad section-alt" id="upcoming-events">
      <div className="container">
        <span className="eyebrow" data-lang="en">Schedule</span>
        <span className="eyebrow" data-lang="hi">कार्यसूची</span>
        <h2 className="section-title">
          <span data-lang="en">Upcoming Events</span>
          <span data-lang="hi">आगामी कार्यक्रम</span>
        </h2>

        <div className="setup-grid">
          {upcomingList.map((item) => (
            <div key={item.id} className="glass setup-card">
              <div className="setup-badge">
                <span data-lang="en">{item.statusEn}</span>
                <span data-lang="hi">{item.statusHi}</span>
              </div>
              <h3 data-lang="en">{item.titleEn}</h3>
              <h3 data-lang="hi">{item.titleHi}</h3>
              <span className="booth-count">{item.date}</span>
              <p style={{ marginTop: '10px' }}>
                📍 <span data-lang="en">{item.locationEn}</span>
                <span data-lang="hi">{item.locationHi}</span>
              </p>
              <p data-lang="en">{item.descEn}</p>
              <p data-lang="hi">{item.descHi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}