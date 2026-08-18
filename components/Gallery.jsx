import Image from 'next/image';

// जब भी आप public/gallery/ में फोटो डालें, यहाँ उसका नाम और शीर्षक जोड़ दें
const galleryImages = [
  { id: 1, src: 'g1.jpg', titleEn: 'District Executive Meeting', titleHi: 'जिला कार्यसमिति बैठक' },
  { id: 2, src: 'g2.jpg', titleEn: 'Booth Workers Sammelan', titleHi: 'बूथ कार्यकर्ता सम्मेलन' },
  { id: 3, src: 'g3.jpg', titleEn: 'Jan Sampark Abhiyaan', titleHi: 'जन संपर्क अभियान' },
];

export default function Gallery() {
  const basePath = '/bjpmuzwest';

  return (
    <section className="section-pad" id="gallery">
      <div className="container">
        <span className="eyebrow" data-lang="en">Media</span>
        <span className="eyebrow" data-lang="hi">मीडिया</span>
        <h2 className="section-title">
          <span data-lang="en">Photo Gallery</span>
          <span data-lang="hi">चित्र दीर्घा</span>
        </h2>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-frame glass">
              <div className="gallery-img-wrapper">
                <Image
                  src={`${basePath}/gallery/${item.src}`}
                  alt={item.titleEn}
                  width={400}
                  height={300}
                  className="gallery-img"
                />
              </div>
              <div className="gallery-caption">
                <p data-lang="en">{item.titleEn}</p>
                <p data-lang="hi">{item.titleHi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}