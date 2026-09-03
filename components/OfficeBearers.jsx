import Image from 'next/image';

export default function OfficeBearers() {
  const basePath = '/bjpmuzwest';

  // 1. Leadership (बाईं तरफ id 1,2 और दाईं तरफ id 11,12)
  const leftLeadership = [
    { id: 1, nameEn: 'Shri Hari Mohan Chaudhary', nameHi: 'श्री हरिमोहन चौधरी', titleEn: 'District President', titleHi: 'जिला अध्यक्ष', image: `${basePath}/hari.png` },
    { id: 2, nameEn: 'Shri Dinakar Pandit', nameHi: 'श्री दिनकर पंडित', titleEn: 'District In-Charge', titleHi: 'जिला प्रभारी', image: `${basePath}/dinkar.jpg` }
  ];

  const rightLeadership = [
    { id: 11, nameEn: 'Shri Samrat Kumar Gupta', nameHi: 'श्री सम्राट कुमार गुप्ता', titleEn: 'District General Secretary-cum-HQ In-charge', titleHi: 'जिला महामंत्री सह मुख्यालय प्रभारी', image: `${basePath}/self.png` },
    { id: 12, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' }
  ];

  // 2. Vice Presidents & Secretaries (बाईं तरफ id 3-10 और दाईं तरफ id 14-21)
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

  // 3. शेष अन्य पद (id 13, 22, 23)
  const remainingOfficials = [
    { id: 13, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' },
    { id: 22, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Treasurer', titleHi: 'जिला कोषाध्यक्ष', image: '#' },
    { id: 23, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'Office Secretary', titleHi: 'कार्यालय मंत्री', image: '#' }
  ];

  const renderCard = (bearer) => (
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
  );

  return (
    <section className="section-pad section-alt" id="bearers">
      <div className="container">
        <span className="eyebrow" data-lang="en">Leadership</span>
        <span className="eyebrow" data-lang="hi">नेतृत्व</span>
        <h2 className="section-title">
          <span data-lang="en">Office Bearers</span>
          <span data-lang="hi">पदाधिकारी</span>
        </h2>

        {/* 1. शीर्ष नेतृत्व: बाईं तरफ (1, 2) | दाईं तरफ (11, 12) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* बाईं तरफ - जिला नेतृत्व एवं प्रभारी */}
          <div>
            <div className="flex justify-center mb-6">
              <h3 className="category-title text-xl font-bold py-3 px-8 rounded-lg border border-slate-300 bg-white/80 shadow-md text-center w-full">
                <span data-lang="en" className="block">District Leadership</span>
                <span data-lang="hi" className="block text-amber-600 mt-1">जिला नेतृत्व एवं प्रभारी</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {leftLeadership.map(renderCard)}
            </div>
          </div>

          {/* दाईं तरफ - जिला महामंत्री (11, 12) */}
          <div>
            <div className="flex justify-center mb-6">
              <h3 className="category-title text-xl font-bold py-3 px-8 rounded-lg border border-slate-300 bg-white/80 shadow-md text-center w-full">
                <span data-lang="en" className="block">District General Secretaries</span>
                <span data-lang="hi" className="block text-amber-600 mt-1">जिला महामंत्री</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {rightLeadership.map(renderCard)}
            </div>
          </div>
        </div>

        {/* 2. मध्य श्रेणी: आमने-सामने - उपाध्यक्ष (3-10) और मंत्री (14-21) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* बाईं तरफ - जिला उपाध्यक्ष */}
          <div>
            <div className="flex justify-center mb-6">
              <h3 className="category-title text-xl font-bold py-3 px-8 rounded-lg border border-slate-300 bg-white/80 shadow-md text-center w-full">
                <span data-lang="en" className="block">District Vice-Presidents</span>
                <span data-lang="hi" className="block text-amber-600 mt-1">जिला उपाध्यक्ष</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {vicePresidents.map(renderCard)}
            </div>
          </div>

          {/* दाईं तरफ - जिला मंत्री */}
          <div>
            <div className="flex justify-center mb-6">
              <h3 className="category-title text-xl font-bold py-3 px-8 rounded-lg border border-slate-300 bg-white/80 shadow-md text-center w-full">
                <span data-lang="en" className="block">District Secretaries</span>
                <span data-lang="hi" className="block text-amber-600 mt-1">जिला मंत्री</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {secretaries.map(renderCard)}
            </div>
          </div>
        </div>

        {/* 3. नीचे की श्रेणी: अन्य पदाधिकारी एवं शेष (13, 22, 23) */}
        <div className="mt-12">
          <div className="flex justify-center mb-6">
            <h3 className="category-title text-xl font-bold py-3 px-8 rounded-lg border border-slate-300 bg-white/80 shadow-md text-center max-w-xl w-full">
              <span data-lang="en" className="block">Other Officials</span>
              <span data-lang="hi" className="block text-amber-600 mt-1">अन्य पदाधिकारी</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remainingOfficials.map(renderCard)}
          </div>
        </div>

      </div>
    </section>
  );
}
