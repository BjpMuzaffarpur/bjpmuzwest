import Image from 'next/image';

const bearers = [
  { id: 1, nameEn: 'Shri [Name]', nameHi: 'श्री [नाम]', titleEn: 'District President', titleHi: 'जिला अध्यक्ष', bg: 'E85D04', color: 'fff' },
  { id: 2, nameEn: 'Shri [Name]', nameHi: 'श्री [नाम]', titleEn: 'General Secretary', titleHi: 'महामंत्री', bg: '128A3E', color: 'fff' },
  { id: 3, nameEn: 'Smt. [Name]', nameHi: 'श्रीमती [नाम]', titleEn: 'Treasurer', titleHi: 'कोषाध्यक्ष', bg: '0B1E3D', color: 'fff' },
  { id: 4, nameEn: 'Shri [Name]', nameHi: 'श्री [नाम]', titleEn: 'Media Incharge', titleHi: 'मीडिया प्रभारी', bg: 'F4C542', color: '0B1E3D' },
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
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(bearer.titleEn)}&background=${bearer.bg}&color=${bearer.color}&size=300`} 
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