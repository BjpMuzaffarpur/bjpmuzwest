import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const newsItems = [
  { 
    id: 1, 
    date: '18 Aug 2026', 
    titleEn: 'Kalash Vandan Abhiyan Launched on Sant Ravidas Jayanti', 
    titleHi: 'संत रविदास जी की 650वीं जयंती पर ‘कलश वंदन अभियान’ का शुभारंभ', 
    descEn: [
      "It is the responsibility of us all to take the message of Saint Ravidas Ji to the masses: Hari Sahni. Kanti, August 18, 2026. To mark the 650th birth anniversary of Saint Shiromani Ravidas Ji, the 'Kalash Vandan Abhiyan' was launched at the Bharatiya Janata Partys West District office in Madhuban-Jagdish, Kanti; the campaign aims to distribute sacred soil—brought from the saint s birthplace—to various monasteries and temples. Former Minister Hari Sahni and District President Harimohan Chaudhary inaugurated the event by lighting a ceremonial lamp. On this occasion, former Minister Hari Sahni honored Basaitha Mandal President Ganinath Sahni with a traditional *Angavastram* (ceremonial stole) in recognition of securing the third position across Bihar in the DLP.",
      "Speaking on the occasion, former Minister Hari Sahni stated that Sant Shiromani Ravidas Ji was not merely a saint but a great messenger of social harmony, equality, and humanity. He advocated for the eradication of discrimination and the sense of social hierarchy prevalent in society. This campaign—aimed at carrying the sacred soil from his birthplace to various monasteries and temples—will serve as a medium to convey his ideals and spiritual legacy to every section of society."
    ],
    descHi: [
      'संत रविदास जी के संदेश को जन-जन तक पहुंचाना हम सभी की जिम्मेदारी : हरी साहनी। कांटी, 18 अगस्त 2026। संत शिरोमणि रविदास जी की 650वीं जयंती के उपलक्ष्य में भारतीय जनता पार्टी पश्चिमी के जिला कार्यालय, मधुबन-जगदीश, कांटी में उनकी जन्मस्थली से लाई गई पवित्र मिट्टी को मठ-मंदिरों में वितरित करने के लिए ‘कलश वंदन अभियान’ का शुभारंभ किया गया। कार्यक्रम का उद्घाटन पूर्व मंत्री हरी साहनी एवं जिलाध्यक्ष हरिमोहन चौधरी ने दीप प्रज्वलित कर किया। इस अवसर पर जिला के बसैठा मंडल अधयक्ष गनिनाथ सहनी द्वारा डीएलपी में पुरे बिहार में तीसरे स्थान पर होने के कारण पूर्व मंत्री हरि सहनी द्वारा अंग वस्त्र से सम्मानित किया गया।',
      'इस अवसर पर पूर्व मंत्री हरी साहनी ने कहा कि संत शिरोमणि रविदास जी केवल एक संत नहीं, बल्कि सामाजिक समरसता, समानता और मानवता के महान संदेशवाहक थे। उन्होंने समाज में व्याप्त भेदभाव और ऊंच-नीच की भावना को समाप्त करने का संदेश दिया। उनकी जन्मस्थली की पवित्र मिट्टी को मठ-मंदिरों तक पहुंचाने का यह अभियान उनके विचारों और आध्यात्मिक विरासत को समाज के प्रत्येक वर्ग तक पहुंचाने का माध्यम बनेगा।',
      'भाजपा पश्चिमी के जिलाध्यक्ष हरिमोहन चौधरी ने कहा कि संत रविदास जी ने अपने जीवन और वाणी के माध्यम से सामाजिक एकता तथा भाईचारे का संदेश दिया। कलश वंदन अभियान के माध्यम से उनकी जन्मस्थली की पवित्र मिट्टी को विभिन्न मठ-मंदिरों तक पहुंचाना श्रद्धा के साथ-साथ उनके विचारों को समाज में आगे बढ़ाने का प्रयास है।',
      'कार्यक्रम में मंसूरपुर मठ के संत सुरेश दास, नरियार मठ के संत प्रेमशंकर शाही, पानापुर मठ के संत विमल दास महाराज तथा शुभंकरपुर मठ के संत केसरी जी सहित अनेक संत-महात्मा उपस्थित रहे। कार्यक्रम का मंच संचालन अभियान के संयोजक सह जिला महामंत्री उपेंद्र पासवान ने किया।'
    ],
    // public/gallery फोल्डर से इमेज का पाथ
    image: `${basePath}/gallery/g6.jpg`
  },
  { 
    id: 2, 
    date: '05 Aug 2026', 
    titleEn: 'Seva Pakhwada Begins', 
    titleHi: 'सेवा पखवाड़ा प्रारंभ', 
    descEn: 'Health camps launched across six mandals.', 
    descHi: ['छह मंडलों में स्वास्थ्य शिविर शुरू।'], 
    image: `${basePath}/gallery/g2.jpg` 
  },
  { 
    id: 3, 
    date: '28 Jul 2026', 
    titleEn: 'Yuva Morcha Sammelan', 
    titleHi: 'युवा मोर्चा सम्मेलन', 
    descEn: 'Young karyakartas pledged to strengthen organisation.', 
    descHi: ['युवा कार्यकर्ताओं ने संगठन मजबूत करने का संकल्प लिया।'], 
    image: `${basePath}/gallery/g1.jpg` 
  }
];

export default function News() {
  return (
    <section className="section-pad section-alt" id="news">
      <div className="container">
        <span className="eyebrow" data-lang="en">Updates</span>
        <span className="eyebrow" data-lang="hi">अपडेट</span>
        <h2 className="section-title">
          <span data-lang="en">Latest News</span>
          <span data-lang="hi">ताज़ा समाचार</span>
        </h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="glass news-card">
              <div className="news-thumb">
                <Image 
                  src={item.image} 
                  alt={item.titleEn} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="news-body">
                <div className="news-date">{item.date}</div>
                <h3 data-lang="en">{item.titleEn}</h3>
                <h3 data-lang="hi">{item.titleHi}</h3>
                
                <div data-lang="en">
                  <p>{item.descEn}</p>
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
