import Image from 'next/image';

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
    descHi: 'माननीय प्रधानमंत्री श्री नरेंद्र मोदी जी के जन्मदिवस तथा सरकार के मुखिया के रूप में उनके सफल 25 वर्ष पूर्ण होने के सुअवसर पर दिनांक 17 सितंबर से 17 अक्टूबर तक "सेवा संकल्प अभियान" का आयोजन किया जा रहा है।',
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
    descHi: 'गांधी जयंती पर सभी बूथों पर स्वच्छता अभियान।',
    src: 'invition.png'
  }
];

export default function UpcomingEvents() {
  const basePath = '/bjpmuzwest';

  return (
    <section className="section-pad section-alt" id="upcoming-events">
      <div className="container">
        <span className="eyebrow" data-lang="en">Schedule</span>
        <span className="eyebrow" data-lang="hi">कार्यसूची</span>
        <h2 className="section-title">
          <span data-lang="en">Upcoming Events</span>
          <span data-lang="hi">आगामी कार्यक्रम</span>
        </h2>

        <div className="news-grid">
          {upcomingList.map((item) => (
            <article key={item.id} className="glass news-card">
              <div className="news-thumb" style={{ position: 'relative', width: '100%', height: '220px' }}>
                <Image 
                  src={`${basePath}/gallery/${item.src}`} 
                  alt={item.titleEn} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>

              <div className="news-body">
                <div className="news-date">
                  <span>{item.date}</span> • 
                  <span data-lang="en" style={{ marginLeft: '5px' }}>{item.statusEn}</span>
                  <span data-lang="hi" style={{ marginLeft: '5px' }}>{item.statusHi}</span>
                </div>

                <h3 data-lang="en">{item.titleEn}</h3>
                <h3 data-lang="hi">{item.titleHi}</h3>

                <p style={{ marginTop: '5px', marginBottom: '10px' }}>
                  📍 <span data-lang="en">{item.locationEn}</span>
                  <span data-lang="hi">{item.locationHi}</span>
                </p>

                <div data-lang="en">
                  {Array.isArray(item.descEn) ? (
                    item.descEn.map((para, index) => <p key={index}>{para}</p>)
                  ) : (
                    <p>{item.descEn}</p>
                  )}
                </div>

                <div data-lang="hi" className="news-paragraphs">
                  {Array.isArray(item.descHi) ? (
                    item.descHi.map((para, index) => (
                      <p key={index} className="news-para">{para}</p>
                    ))
                  ) : (
                    <p>{item.descHi}</p>
                  )}
                </div>

                <a href="#" className="news-link" data-lang="en">Read more &rarr;</a>
                <a href="#" className="news-link" data-lang="hi">और पढ़ें &rarr;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
