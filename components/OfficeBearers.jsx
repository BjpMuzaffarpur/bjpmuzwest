import Image from 'next/image';

export default function OfficeBearers() {
  const basePath = '/bjpmuzwest';

  const bearers = [
    { 
      id: 1, 
      nameEn: 'Shri Dinakar Pandit', 
      nameHi: 'श्री दिनकर पंडित', 
      titleEn: 'District In-Charge', 
      titleHi: 'जिला प्रभारी',
      image: `#` 
    },    
    { 
      id: 2, 
      nameEn: 'Shri Hari Mohan Chaudhary', 
      nameHi: 'श्री हरिमोहन चौधरी', 
      titleEn: 'District President', 
      titleHi: 'जिला अध्यक्ष',
      image: `${basePath}/hari.png` 
    },
    { 
      id: 3, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 4, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 5, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 6, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 7, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 8, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 9, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },
    { 
      id: 10, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District Vice-President', 
      titleHi: 'जिला उपाध्यक्ष',
      image: `#` 
    },    
    { 
      id: 11, 
      nameEn: 'Shri Samrat Kumar Gupta', 
      nameHi: 'श्री सम्राट कुमार गुप्ता', 
      titleEn: 'District General Secretary', 
      titleHi: 'जिला महामंत्री',
      image: `${basePath}/self.png`
    },
    { 
      id: 12, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District General Secretary', 
      titleHi: 'जिला महामंत्री',
      image: `#` 
    },    
    { 
      id: 13, 
      nameEn: 'Shri', 
      nameHi: 'श्री', 
      titleEn: 'District General Secretary', 
      titleHi: 'जिला महामंत्री',
      image: `#` 
    },     
  ];

  return (
    <section className="section-pad section-alt" id="bearers">
      <div className="container">
        <span className="eyebrow" data-lang="en">Leadership</span>
        <span className="eyebrow" data-lang="hi">नेतृत्व</span>
        <h2 className="section-title">
          <span data-lang="en">Office Bearers</span>
          <span data-lang="hi">पदाधिकारी</span>
        </h2>
        
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
                <h4 data-lang="en">{bearer.nameEn}</h4>
                <h4 data-lang="hi">{bearer.nameHi}</h4>
                <span data-lang="en">{bearer.titleEn}</span>
                <span data-lang="hi">{bearer.titleHi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
