import Image from 'next/image';

const newsItems = [
  { id: 1, date: '12 Aug 2026', titleEn: 'District Executive Meeting Held', titleHi: 'जिला कार्यकारिणी बैठक संपन्न', descEn: 'Karyakartas reviewed booth-level preparedness.', descHi: 'कार्यकर्ताओं ने बूथ स्तरीय तैयारी की समीक्षा की।', seed: 'news1' },
  { id: 2, date: '05 Aug 2026', titleEn: 'Seva Pakhwada Begins', titleHi: 'सेवा पखवाड़ा प्रारंभ', descEn: 'Health camps launched across six mandals.', descHi: 'छह मंडलों में स्वास्थ्य शिविर शुरू।', seed: 'news2' },
  { id: 3, date: '28 Jul 2026', titleEn: 'Yuva Morcha Sammelan', titleHi: 'युवा मोर्चा सम्मेलन', descEn: 'Young karyakartas pledged to strengthen organisation.', descHi: 'युवा कार्यकर्ताओं ने संगठन मजबूत करने का संकल्प लिया।', seed: 'news3' }
];

export default function News() {
  return (
    <section className="section-pad section-alt" id="news">
      <div className="container">
        <span className="eyebrow" data-lang="en">Updates</span>
        <span className="eyebrow" data-lang="hi">अपडेट</span>
        <h2 className="section-title"><span data-lang="en">Latest News</span><span data-lang="hi">ताज़ा समाचार</span></h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="glass news-card">
              <div className="news-thumb">
                <Image src={`https://picsum.photos/seed/${item.seed}/500/320`} alt={item.titleEn} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="news-body">
                <div className="news-date">{item.date}</div>
                <h3 data-lang="en">{item.titleEn}</h3><h3 data-lang="hi">{item.titleHi}</h3>
                <p data-lang="en">{item.descEn}</p><p data-lang="hi">{item.descHi}</p>
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