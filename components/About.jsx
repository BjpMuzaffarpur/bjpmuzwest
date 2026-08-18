export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <span className="eyebrow" data-lang="en">Who We Are</span>
        <span className="eyebrow" data-lang="hi">हमारा परिचय</span>
        <h2 className="section-title">
          <span data-lang="en">About the District Unit</span>
          <span data-lang="hi">जिला इकाई के बारे में</span>
        </h2>
        <p className="section-sub">
          <span data-lang="en">BJP Muzaffarpur West carries forward the party's mission of good governance, cultural pride and inclusive development at the grassroots level.</span>
          <span data-lang="hi">भाजपा मुजफ्फरपुर पश्चिम, सुशासन, सांस्कृतिक गौरव एवं समावेशी विकास के पार्टी मिशन को जमीनी स्तर पर आगे बढ़ाती है।</span>
        </p>

        <div className="about-grid">
          <div className="glass about-card">
            <p data-lang="en">Bharatiya Janata Party, Muzaffarpur West District, works under the guidance of the state and national leadership to strengthen the party organization booth by booth, and to take government schemes to every household of the district.</p>
            <p data-lang="hi">भारतीय जनता पार्टी, मुजफ्फरपुर पश्चिमी जिला, प्रदेश एवं राष्ट्रीय नेतृत्व के मार्गदर्शन में बूथ स्तर तक संगठन को मजबूत करने एवं सरकारी योजनाओं को जिले के हर घर तक पहुँचाने के लिए कार्यरत है।</p>
          </div>
          <ul className="about-list">
            <li className="glass">
              <span className="ico"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.4-9.5-9C.7 8 2.5 4 6.5 4c2 0 3.5 1.1 5.5 3.2C14 5.1 15.5 4 17.5 4 21.5 4 23.3 8 21.5 12 19 16.6 12 21 12 21z"/></svg></span>
              <div>
                <h4 data-lang="en">Seva hi Sangathan</h4><h4 data-lang="hi">सेवा ही संगठन</h4>
                <p data-lang="en">Continuous public service and welfare camps across all mandals.</p>
                <p data-lang="hi">सभी मंडलों में निरंतर जनसेवा एवं कल्याण शिविर।</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}