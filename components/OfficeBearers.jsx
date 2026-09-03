import Image from 'next/image';

export default function OfficeBearers() {
  const basePath = '/bjpmuzwest';

  // 1. शीर्ष नेतृत्व (Top Row - IDs 1, 2, 11, 12)
  const topRowLeft = [
    { id: 1, nameEn: 'Shri Hari Mohan Chaudhary', nameHi: 'श्री हरिमोहन चौधरी', titleEn: 'District President', titleHi: 'जिला अध्यक्ष', image: `${basePath}/hari.png` },
    { id: 2, nameEn: 'Shri Dinakar Pandit', nameHi: 'श्री दिनकर पंडित', titleEn: 'District In-Charge', titleHi: 'जिला प्रभारी', image: `${basePath}/dinkar.jpg` }
  ];

  const topRowRight = [
    { id: 11, nameEn: 'Shri Samrat Kumar Gupta', nameHi: 'श्री सम्राट कुमार गुप्ता', titleEn: 'District General Secretary-cum-HQ In-charge', titleHi: 'जिला महामंत्री सह मुख्यालय प्रभारी', image: `${basePath}/self.png` },
    { id: 12, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' }
  ];

  // 2. मध्य श्रेणी: उपाध्यक्ष (IDs 3-10) एवं मंत्री (IDs 14-21)
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

  // कार्ड रेंडरर कंपोनेंट
  const renderBearerCard = (bearer) => (
    <div key={bearer.id} className="glass bearer-card flex flex-col items-center text-center p-4 rounded-xl shadow-md bg-white/70">
      <div className="bearer-photo w-32 h-32 relative mb-3 overflow-hidden rounded-lg">
        <Image 
          src={bearer.image} 
          alt={bearer.titleEn} 
          width={128} 
          height={128} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="bearer-info">
        <h4 className="font-bold text-gray-900" data-lang="en">{bearer.nameEn}</h4>
        <h4 className="font-bold text-gray-900" data-lang="hi">{bearer.nameHi}</h4>
        <span className="text-xs text-amber-600 font-semibold block" data-lang="en">{bearer.titleEn}</span>
        <span className="text-xs text-amber-600 font-semibold block" data-lang="hi">{bearer.titleHi}</span>
      </div>
    </div>
  );

  return (
    <section className="section-pad section-alt" id="bearers">
      <div className="container max-w-7xl mx-auto px-4">
        <span className="eyebrow block text-center" data-lang="en">Leadership</span>
        <span className="eyebrow block text-center" data-lang="hi">नेतृत्व</span>
        <h2 className="section-title text-center mb-12">
          <span data-lang="en">Office Bearers</span>
          <span data-lang="hi">पदाधिकारी</span>
        </h2>

        {/* 1. टॉप लीडरशिप (ID 1, 2 [बाएं] एवं ID 11, 12 [दाएं]) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* कॉलम 1: बाएं कार्ड्स (ID 1, 2) */}
          <div className="flex flex-col gap-6">
            {topRowLeft.map(renderBearerCard)}
          </div>

          {/* कॉलम 2 एवं 3: बीच में खाली स्थान */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* कॉलम 4: दाएं कार्ड्स (ID 11, 12) */}
          <div className="flex flex-col gap-6">
            {topRowRight.map(renderBearerCard)}
          </div>
        </div>

        {/* 2. मुख्य सूची (ID 3-10 [बाएं] एवं ID 14-21 [दाएं]) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* कॉलम 1: उपाध्यक्ष (ID 3-10) */}
          <div className="flex flex-col gap-6">
            {vicePresidents.map(renderBearerCard)}
          </div>

          {/* कॉलम 2 एवं 3: बीच में खाली स्थान */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* कॉलम 4: मंत्री (ID 14-21) */}
          <div className="flex flex-col gap-6">
            {secretaries.map(renderBearerCard)}
          </div>
        </div>

        {/* 3. बॉटम रो: शेष पदाधिकारी (ID 13, 22, 23) */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-200">
          {bottomOfficials.map((bearer) => (
            <div key={bearer.id} className="w-full sm:w-64">
              {renderBearerCard(bearer)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
