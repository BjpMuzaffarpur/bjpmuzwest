import Image from 'next/image';

export default function Organization() {
  const basePath = '/bjpmuzwest';

  const wings = [
    { id: 1, titleEn: 'Youth Wing (Yuva Morcha)', titleHi: 'युवा मोर्चा', descEn: 'Empowering young leaders across all booths.', descHi: 'सभी बूथों पर युवा नेतृत्व का सशक्तिकरण।' },
    { id: 2, titleEn: 'Women Wing (Mahila Morcha)', titleHi: 'महिला मोर्चा', descEn: 'Driving women empowerment and grassroots reach.', descHi: 'महिला सशक्तिकरण एवं ज़मीनी पहुँच को बढ़ावा।' },
    { id: 3, titleEn: 'scheduled caste Morcha', titleHi: 'अनुसूचित जाति मोर्चा', descEn: 'Working for the welfare of scheduled caste in the district.', descHi: 'जिले के कअनुसूचित जाति के कल्याण हेतु कार्यरत।' },
    { id: 4, titleEn: 'OBC Morcha', titleHi: 'ओबीसी मोर्चा', descEn: 'Ensuring inclusive development and representation.', descHi: 'समावेशी विकास एवं प्रतिनिधित्व सुनिश्चित करना।' },
    { id: 5, titleEn: 'Kisan Morcha', titleHi: 'किसान मोर्चा', descEn: 'Working for the welfare of farmers in the district.', descHi: 'जिले के किसानों के कल्याण हेतु कार्यरत।' },
    { id: 6, titleEn: 'Minority Morcha', titleHi: 'कअल्पसंख्यक मोर्चा', descEn: 'Working for the welfare of Minority in the district.', descHi: 'जिले के कअल्पसंख्यक के कल्याण हेतु कार्यरत।' },
  ];

  return (
    <section className="section-pad" id="organization">
      <div className="container">
        <span className="eyebrow" data-lang="en">Structure</span>
        <span className="eyebrow" data-lang="hi">ढांचा</span>
        <h2 className="section-title">
          <span data-lang="en">Party Fronts & Morchas</span>
          <span data-lang="hi">पार्टी के मोर्चे एवं आयाम</span>
        </h2>

        <div className="org-grid">
          {wings.map((wing) => (
            <div key={wing.id} className="glass org-card">
              <h3 data-lang="en">{wing.titleEn}</h3>
              <h3 data-lang="hi">{wing.titleHi}</h3>
              <p data-lang="en">{wing.descEn}</p>
              <p data-lang="hi">{wing.descHi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
