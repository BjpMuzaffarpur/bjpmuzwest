export default function Hero() {
  const basePath = '/bjpmuzwest';

  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster={`${basePath}/hero-poster.jpg`}
        >
          <source src={`${basePath}/hero-bg.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="container hero-content">
        <div className="hero-card glass-strong">
          <div className="hero-flag-strip"><span></span><span></span><span></span></div>
          <h1>
            <span data-lang="en">Bharatiya Janata Party</span>
            <span data-lang="hi">भारतीय जनता पार्टी</span>
          </h1>
          <p className="tagline">
            <span data-lang="en">Muzaffarpur West District &mdash; Sabka Saath, Sabka Vikas, Sabka Vishwas</span>
            <span data-lang="hi">मुजफ्फरपुर पश्चिमी जिला — सबका साथ, सबका विकास, सबका विश्वास</span>
          </p>
          <p className="desc">
            <span data-lang="en">Working for a developed, self-reliant Muzaffarpur — connecting every booth, every karyakarta and every citizen of the district.</span>
            <span data-lang="hi">विकसित एवं आत्मनिर्भर मुजफ्फरपुर के लिए कार्यरत — जिले के हर बूथ, हर कार्यकर्ता एवं हर नागरिक से जुड़ाव।</span>
          </p>
          <div className="hero-ctas">
            <a href="#organization" className="btn btn-primary">
              <span data-lang="en">Explore Organization</span>
              <span data-lang="hi">संगठन देखें</span>
            </a>
            <a href="#news" className="btn btn-ghost">
              <span data-lang="en">Latest News</span>
              <span data-lang="hi">ताज़ा समाचार</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat glass"><b>6</b><span data-lang="en">Mandals</span><span data-lang="hi">मंडल</span></div>
            <div className="stat glass"><b>150+</b><span data-lang="en">Booths</span><span data-lang="hi">बूथ</span></div>
            <div className="stat glass"><b>10k+</b><span data-lang="en">Karyakartas</span><span data-lang="hi">कार्यकर्ता</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
