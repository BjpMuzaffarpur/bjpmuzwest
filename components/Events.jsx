export default function Events() {
  const eventsList = [
    {
      id: 1,
      date: '15 Aug 2025',
      titleEn: 'Independence Day Jan Samvad',
      titleHi: 'स्वतंत्रता दिवस जन संवाद',
      locationEn: 'Kanti Mandal',
      locationHi: 'कांटी मंडल',
      descEn: 'Public gathering and flag hoisting ceremony with local party members.',
      descHi: 'स्थानीय पार्टी कार्यकर्ताओं के साथ जनसभा एवं ध्वजारोहण कार्यक्रम।'
    },
    {
      id: 2,
      date: '21 Jun 2025',
      titleEn: 'International Yoga Day Drive',
      titleHi: 'अंतर्राष्ट्रीय योग दिवस अभियान',
      locationEn: 'Marwan Mandal',
      locationHi: 'मरवन मंडल',
      descEn: 'Community yoga program to promote health and wellness.',
      descHi: 'स्वास्थ्य और कल्याण को बढ़ावा देने के लिए सामुदायिक योग कार्यक्रम।'
    }
  ];

  return (
    <section className="section-pad" id="events">
      <div className="container">
        <span className="eyebrow" data-lang="en">Activities</span>
        <span className="eyebrow" data-lang="hi">गतिविधियां</span>
        <h2 className="section-title">
          <span data-lang="en">Recent Events</span>
          <span data-lang="hi">हाल के कार्यक्रम</span>
        </h2>

        <div className="org-grid">
          {eventsList.map((event) => (
            <div key={event.id} className="glass org-card">
              <span className="booth-count">{event.date}</span>
              <h3 data-lang="en">{event.titleEn}</h3>
              <h3 data-lang="hi">{event.titleHi}</h3>
              <p><strong>📍 <span data-lang="en">{event.locationEn}</span><span data-lang="hi">{event.locationHi}</span></strong></p>
              <p data-lang="en">{event.descEn}</p>
              <p data-lang="hi">{event.descHi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}