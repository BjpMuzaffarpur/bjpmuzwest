import Image from 'next/image';
export default function UpcomingEvents() {
  const upcomingList = [
    {
      id: 1,
      date: '05 Sep 2026',
      titleEn: 'Service Pledge Campaign',
      titleHi: 'सेवा संकल्प अभियान',
      locationEn: 'Muzaffarpur West Office',
      locationHi: 'मुजफ्फरपुर पश्चिम कार्यालय',
      statusEn: 'Upcoming',
      statusHi: 'आगामी',
      descEn: 'The "Seva Sankalp Abhiyan" (Service and Resolve Campaign) is being organized from September 17 to October 17 to mark the auspicious occasion of the birthday of the Honorable Prime Minister Shri Narendra Modi and the completion of his successful 25 years as the head of government.',
      descHi: 'माननीय प्रधानमंत्री श्री नरेंद्र मोदी जी के जन्मदिवस तथा सरकार के मुखिया के रूप में उनके सफल 25 वर्ष पूर्ण होने के सुअवसर पर दिनांक 17 सितंबर से 17 अक्टूबर तक "सेवा संकल्प अभियान" का आयोजन किया जा रहा है।'
      src: 'invition.png' 
    },
    {
      id: 2,
      date: '02 Oct 2026',
      titleEn: 'Swachhata Abhiyan Drive',
      titleHi: 'स्वच्छता अभियान कार्यक्रम',
      locationEn: 'In the district and all divisions',
      locationHi: 'जिला एवं सभी मंडल में',
      statusEn: 'Upcoming',
      statusHi: 'आगामी',
      descEn: 'Cleanliness campaign across all booths on Gandhi Jayanti.',
      descHi: 'गांधी जयंती पर सभी बूथों पर स्वच्छता अभियान।'
      src: 'invition.png' 
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
