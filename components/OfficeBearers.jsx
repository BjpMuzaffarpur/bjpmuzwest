import Image from 'next/image';

export default function OfficeBearers() {
  const basePath = '/bjpmuzwest';

  // 1. शीर्ष नेतृत्व (IDs 1, 2 [बाएं] एवं IDs 11, 12 [दाएं])
  const topRowLeft = [
    { id: 1, nameEn: 'Shri Hari Mohan Chaudhary', nameHi: 'श्री हरिमोहन चौधरी', titleEn: 'District President', titleHi: 'जिला अध्यक्ष', image: `${basePath}/hari.png` },
    { id: 2, nameEn: 'Shri Dinakar Pandit', nameHi: 'श्री दिनकर पंडित', titleEn: 'District In-Charge', titleHi: 'जिला प्रभारी', image: `${basePath}/dinkar.jpg` }
  ];

  const topRowRight = [
    { id: 11, nameEn: 'Shri Samrat Kumar Gupta', nameHi: 'श्री सम्राट कुमार गुप्ता', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री सह मुख्यालय प्रभारी', image: `${basePath}/self.png` },
    { id: 12, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' }
  ];

  // 2. मध्य श्रेणी (IDs 3-10 [बाएं] एवं IDs 14-21 [दाएं])
  const vicePresidents = [
    { id: 3, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 4, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 5, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 6, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 7, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 8, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 9, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' },
    { id: 10, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Vice-President', titleHi: 'जिला उपाध्यक्ष', image: '#' }
  ];

  const secretaries = [
    { id: 14, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 15, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 16, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 17, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 18, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 19, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 20, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' },
    { id: 21, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Secretary', titleHi: 'जिला मंत्री', image: '#' }
  ];

  // 3. निचली श्रेणी: शेष पद (IDs 13, 22, 23)
  const bottomOfficials = [
    { id: 13, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' },
    { id: 22, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Treasurer', titleHi: 'जिला कोषाध्यक्ष', image: '#' },
    { id: 23, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'Office Secretary', titleHi: 'कार्यालय मंत्री', image: '#' }
  ];

  // इमेज और नाम का छोटा एवं सटीक कार्ड (तस्वीर के आकार अनुसार)
  const renderItem = (bearer) => (
    <div key={bearer.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
      <div style={{ width: '110px', height: '130px', position: 'relative', marginBottom: '6px' }}>
        <Image 
          src={bearer.image} 
          alt={bearer.titleEn} 
          fill 
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 'bold' }} data-lang="en">{bearer.nameEn}</h4>
      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 'bold' }} data-lang="hi">{bearer.nameHi}</h4>
      <span style={{ fontSize: '11px', color: '#d97706', display: 'block' }} data-lang="en">{bearer.titleEn}</span>
      <span style={{ fontSize: '11px', color: '#d97706', display: 'block' }} data-lang="hi">{bearer.titleHi}</span>
    </div>
  );

  return (
    <section className="section-pad section-alt" id="bearers">
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 15px' }}>
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }} data-lang="en">Leadership</span>
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }} data-lang="hi">नेतृत्व</span>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span data-lang="en">Office Bearers</span>
          <span data-lang="hi">पदाधिकारी</span>
        </h2>

        {/* 1. शीर्ष अनुभाग: बाएं (ID 1,2) और दाएं (ID 11,12) आमने-सामने */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          {/* बाईं पंक्ति */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {topRowLeft.map(renderItem)}
          </div>

          {/* दाईं पंक्ति */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {topRowRight.map(renderItem)}
          </div>
        </div>

        {/* 2. मुख्य अनुभाग: उपाध्यक्ष (IDs 3-10) और मंत्री (IDs 14-21) आमने-सामने */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          {/* बाईं पंक्ति (उपाध्यक्ष) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {vicePresidents.map(renderItem)}
          </div>

          {/* दाईं पंक्ति (मंत्री) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {secretaries.map(renderItem)}
          </div>
        </div>

        {/* 3. बॉटम रो: शेष पदाधिकारी (IDs 13, 22, 23) एक लाइन में सेंटर */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', paddingTop: '30px', borderTop: '1px solid #e2e8f0' }}>
          {bottomOfficials.map(renderItem)}
        </div>

      </div>
    </section>
  );
}
