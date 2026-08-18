import Image from 'next/image';

const bearers = [
  { 
    id: 1, 
    nameEn: 'Shri Hari Mohan Chaudhary', 
    nameHi: 'श्री हरिमोहन चौधरी', 
    titleEn: 'District President', 
    titleHi: 'जिला अध्यक्ष',
    image: {`${basePath}/hari.png`} // public/hari.png 
  },
  { 
    id: 2, 
    nameEn: 'Shri [Samrat Kumar Gupta]', 
    nameHi: 'श्री सम्राट कुमार गुप्ता', 
    titleEn: 'District General Secretary', 
    titleHi: 'जिला महामंत्री',
    image: {`${basePath}/self.png`} // public/self.png
  },
];

export default function OfficeBearers() {
  return (
    <section className="section-pad section-alt" id="bearers">
      <div className="container">
        <span className="eyebrow" data-lang="en">Leadership</span>
        <span className="eyebrow" data-lang="hi">नेतृत्व</span>
        <h2 className="section-title"><span data-lang="en">Office Bearers</span><span data-lang="hi">पदाधिकारी</span></h2>
        
        <div className="bearers-grid">
          {bearers.map((bearer) => (
            <div key={bearer.id} className="glass bearer-card">
              <div className="bearer-photo">
                <Image 
                  src={bearer.image} 
                  alt={bearer.titleEn} 
                  width={300} 
                  height={300} 
                />
              </div>
              <div className="bearer-info">
                <h4 data-lang="en">{bearer.nameEn}</h4><h4 data-lang="hi">{bearer.nameHi}</h4>
                <span data-lang="en">{bearer.titleEn}</span><span data-lang="hi">{bearer.titleHi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
