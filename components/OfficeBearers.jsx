import Image from 'next/image';

export default function OfficeBearers() {
  const basePath = '/bjpmuzwest';

  const categories = [
    {
      id: 'leadership',
      titleEn: 'District Leadership',
      titleHi: 'जिला नेतृत्व एवं प्रभारी',
      items: [
        { 
          id: 1, 
          nameEn: 'Shri Dinakar Pandit', 
          nameHi: 'श्री दिनकर पंडित', 
          titleEn: 'District In-Charge', 
          titleHi: 'जिला प्रभारी',
          image: '#' 
        },    
        { 
          id: 2, 
          nameEn: 'Shri Hari Mohan Chaudhary', 
          nameHi: 'श्री हरिमोहन चौधरी', 
          titleEn: 'District President', 
          titleHi: 'जिला अध्यक्ष',
          image: `${basePath}/hari.png` 
        },
      ]
    },
    {
      id: 'vice-presidents',
      titleEn: 'District Vice-Presidents',
      titleHi: 'जिला उपाध्यक्ष',
      items: [
        { id: 3, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 4, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 5, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 6, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 7, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 8, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 9, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
        { id: 10, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
      ]
    },
    {
      id: 'general-secretaries',
      titleEn: 'District General Secretaries',
      titleHi: 'जिला महामंत्री',
      items: [
        { 
          id: 11, 
          nameEn: 'Shri Samrat Kumar Gupta', 
          nameHi: 'श्री सम्राट कुमार गुप्ता', 
          titleEn: 'District General Secretary-cum-Headquarters In-charge', 
          titleHi: 'जिला महामंत्री सह मुख्यालय प्रभारी',
          image: `${basePath}/self.png`
        },
        { id: 12, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' },    
        { id: 13, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' },
      ]
    },
    {
      id: 'secretaries',
      titleEn: 'District Secretaries',
      titleHi: 'जिला मंत्री',
      items: [
        { id: 14, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' }, 
        { id: 15, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' }, 
        { id: 16, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },    
        { id: 17, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },    
        { id: 18, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },    
        { id: 19, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },    
        { id: 20, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },    
        { id: 21, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
      ]
    },
    {
      id: 'other-officials',
      titleEn: 'Other Officials',
      titleHi: 'अन्य पदाधिकारी',
      items: [
        { id: 22, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Treasurer', titleHi: 'जिला कोषाध्यक्ष', image: '#' },    
        { id: 23, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'Office Secretary', titleHi: 'कार्यालय मंत्री', image: '#' },
      ]
    }
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
        
        {categories.map((category) => (
          <div key={category.id} className="category-group mb-12">
            <h3 className="category-title text-xl font-bold my-4">
              <span data-lang="en">{category.titleEn}</span>
              <span data-lang="hi">{category.titleHi}</span>
            </h3>
            
            <div className="bearers-grid">
              {category.items.map((bearer) => (
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
        ))}
      </div>
    </section>
  );
}
