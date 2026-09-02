export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Praxis Dr. Vlachou-Vaterrodt, Startseite">
          <span className="wordmark-kicker">Augenheilkunde</span>
          <span>Praxis Dr. Vlachou-Vaterrodt</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#praxis">Die Praxis</a>
          <a href="#sprechzeiten">Sprechzeiten</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-call" href="tel:+49896492969">089 649 29 69</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-tint" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Grünwald · München Süd</p>
          <h1 id="hero-title">Persönliche Augenheilkunde.<br /><em>Für gutes Sehen.</em></h1>
          <p className="hero-intro">Sorgfältige Diagnostik, individuelle Beratung und ambulante Operationen – in vertrauter Atmosphäre.</p>
          <div className="hero-contact-block">
            <p>Termin direkt vereinbaren:</p>
            <div className="hero-actions">
              <a className="hero-contact-link" href="tel:+49896492969" aria-label="Anrufen: 089 649 29 69">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5 4.2 4.6c-.7.3-1 1.1-.8 1.8 1.7 6.5 6.8 11.6 13.3 13.3.7.2 1.5-.1 1.8-.8l1.1-2.4c.3-.7.1-1.5-.6-1.9l-2.5-1.4c-.6-.3-1.4-.2-1.8.4l-1 1.2c-2.3-1.1-4.1-3-5.2-5.2l1.2-1c.5-.4.7-1.2.4-1.8L8.5 4.1c-.4-.6-1.2-.9-1.9-.6Z" /></svg>
                <span>089 649 29 69</span>
              </a>
              <a className="hero-contact-link" href="mailto:info@augen-arzt.de" aria-label="E-Mail schreiben an info@augen-arzt.de">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4.5 7 7.5 5.8L19.5 7" /></svg>
                <span>info@augen-arzt.de</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-caption">Praxis Dr. Vlachou-Vaterrodt<br />Südliche Münchner Str. 20</div>
      </section>

      <section className="intro-section" id="praxis">
        <p className="eyebrow ink">Willkommen</p>
        <div className="intro-grid">
          <h2>Mit Zeit für das, was Ihnen wichtig ist.</h2>
          <div>
            <p>In unserer Praxis in Grünwald verbinden wir moderne Augenheilkunde mit persönlicher Zuwendung. Wir begleiten Sie von der ersten Untersuchung bis zur Nachsorge – kompetent, verständlich und auf Ihre Bedürfnisse abgestimmt.</p>
            <p>Wir behandeln gesetzlich und privat Versicherte.</p>
          </div>
        </div>
      </section>

      <section className="service-band" aria-label="Leistungsspektrum">
        <p>Vorsorge</p><span />
        <p>Diagnostik</p><span />
        <p>Ambulante Operationen</p><span />
        <p>Individuelle Beratung</p>
      </section>

      <section className="details-section" id="sprechzeiten">
        <div className="section-title">
          <p className="eyebrow ink">Sprechzeiten</p>
          <h2>Für Sie da.</h2>
          <p>Bitte vereinbaren Sie Ihren Termin vorab telefonisch oder per E-Mail.</p>
        </div>
        <dl className="hours-list">
          <div><dt>Montag</dt><dd>nach Vereinbarung</dd></div>
          <div><dt>Dienstag</dt><dd>09:00–13:00 · 14:00–18:00</dd></div>
          <div><dt>Mittwoch</dt><dd>09:00–14:00</dd></div>
          <div><dt>Donnerstag</dt><dd>09:00–13:00 · 14:00–18:00</dd></div>
          <div><dt>Freitag</dt><dd>09:00–15:00</dd></div>
        </dl>
      </section>

      <section className="doctors-section" aria-labelledby="doctors-title">
        <div className="doctors-heading">
          <p className="eyebrow ink">Ihre Ärzte</p>
          <h2 id="doctors-title">Persönlich für Sie da.</h2>
        </div>
        <div className="doctors-grid">
          <article className="doctor-card">
            <img src="/dr-vlachou-vaterrodt.jpeg" alt="Dr. med. Vassiliki Vlachou-Vaterrodt" />
            <h3>Dr. med. Vassiliki Vlachou-Vaterrodt</h3>
          </article>
          <article className="doctor-card">
            <img src="/prof-siedlecki.jpeg" alt="Prof. Dr. med. Jakob Siedlecki" />
            <h3>Prof. Dr. med. Jakob Siedlecki</h3>
          </article>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Wir freuen uns auf Sie.</h2>
        </div>
        <div className="contact-grid">
          <address>
            Südliche Münchner Str. 20<br />
            82031 Grünwald
            <a href="https://maps.google.com/?q=S%C3%BCdliche+M%C3%BCnchner+Str.+20,+82031+Gr%C3%BCnwald" target="_blank" rel="noreferrer">Anfahrt planen <span>↗</span></a>
          </address>
          <div className="contact-links">
            <a href="tel:+49896492969">T 089 649 29 69</a>
            <a href="fax:+49896412930">F 089 641 29 30</a>
            <a href="mailto:info@augen-arzt.de">info@augen-arzt.de</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Praxis Dr. Vlachou-Vaterrodt</span>
        <div><a href="#top">Nach oben ↑</a><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div>
      </footer>
    </main>
  );
}
