import Image from 'next/image';

export default function OfficeBearers() {
  const basePath = '/bjpmuzwest';

  // 1. टॉप - जिला नेतृत्व (1, 2)
  const topLeadership = [
    { id: 1, nameEn: 'Shri Hari Mohan Chaudhary', nameHi: 'श्री हरिमोहन चौधरी', titleEn: 'District President', titleHi: 'जिला अध्यक्ष', image: `${basePath}/hari.png` },
    { id: 2, nameEn: 'Shri Dinakar Pandit', nameHi: 'श्री दिनकर पंडित', titleEn: 'District In-Charge', titleHi: 'जिला प्रभारी', image: `${basePath}/dinkar.jpg` }
  ];

  // 2. टॉप - जिला महामंत्री (11, 12)
  const topSecretaries = [
    { id: 11, nameEn: 'Shri Samrat Kumar Gupta', nameHi: 'श्री सम्राट कुमार गुप्ता', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री सह मुख्यालय प्रभारी', image: `${basePath}/self.png` },
    { id: 12, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' }
  ];

  // 3. मिडल - उपाध्यक्ष (3-10)
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

  // 4. मिडल - मंत्री (14-21)
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

  // 5. बॉटम - शेष (13, 22, 23)
  const bottomOfficials = [
    { id: 13, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District General Secretary', titleHi: 'जिला महामंत्री', image: '#' },
    { id: 22, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'District Treasurer', titleHi: 'जिला कोषाध्यक्ष', image: '#' },
    { id: 23, nameEn: 'Shri', nameHi: 'श्री', titleEn: 'Office Secretary', titleHi: 'कार्यालय मंत्री', image: '#' }
  ];

  // हॉरिजॉन्टल कार्ड कंपोनेंट (इमेज के अनुसार)
  const renderHorizontalCard = (bearer, imageRight = false) => (
    <div key={bearer.id} className={`flex items-center gap-4 ${imageRight ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
      <div className="w-28 h-28 relative flex-shrink-0">
        <Image
          src={bearer.image}
          alt={bearer.titleEn}
          width={112}
          height={112}
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <h4 className="font-bold text-gray-900" data-lang="en">{bearer.nameEn}</h4>
        <h4 className="font-bold text-gray-900" data-lang="hi">{bearer.nameHi}</h4>
        <span className="block text-sm text-gray-600" data-lang="en">{bearer.titleEn}</span>
        <span className="block text-sm text-gray-600" data-lang="hi">{bearer.titleHi}</span>
      </div>
    </div>
  );

  return (
    <section className="section-pad section-alt" id="bearers">
      <div className="container max-w-6xl mx-auto px-4">
        <span className="eyebrow block text-center" data-lang="en">Leadership</span>
        <span className="eyebrow block text-center" data-lang="hi">नेतृत्व</span>
        <h2 className="section-title text-center mb-12">
          <span data-lang="en">Office Bearers</span>
          <span data-lang="hi">पदाधिकारी</span>
        </h2>

        {/* 1. शीर्ष अनुभाग (Top Section) */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          {/* बाईं तरफ: ID 1 & 2 */}
          <div className="flex flex-col gap-8 w-full md:w-5/12">
            {topLeadership.map(item => renderHorizontalCard(item, false))}
          </div>

          {/* दाईं तरफ: ID 11 & 12 */}
          <div className="flex flex-col gap-8 w-full md:w-5/12">
            {topSecretaries.map(item => renderHorizontalCard(item, true))}
          </div>
        </div>

        {/* 2. मध्य अनुभाग: आमने-सामने (Middle Section) */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          {/* बाईं तरफ: ID 3 - 10 (उपाध्यक्ष) */}
          <div className="flex flex-col gap-6 w-full md:w-5/12">
            {vicePresidents.map(item => renderHorizontalCard(item, false))}
          </div>

          {/* दाईं तरफ: ID 14 - 21 (मंत्री) */}
          <div className="flex flex-col gap-6 w-full md:w-5/12">
            {secretaries.map(item => renderHorizontalCard(item, true))}
          </div>
        </div>

        {/* 3. निचला अनुभाग: बॉटम रो (Bottom Section - ID 13, 22, 23) */}
        <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-gray-200">
          {bottomOfficials.map(item => (
            <div key={item.id} className="flex flex-col items-center text-center w-40">
              <div className="w-28 h-28 relative mb-3">
                <Image
                  src={item.image}
                  alt={item.titleEn}
                  width={112}
                  height={112}
                  className="object-cover rounded-md"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-sm" data-lang="en">{item.nameEn}</h4>
              <h4 className="font-bold text-gray-900 text-sm" data-lang="hi">{item.nameHi}</h4>
              <span className="text-xs text-gray-600 block" data-lang="en">{item.titleEn}</span>
              <span className="text-xs text-gray-600 block" data-lang="hi">{item.titleHi}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
