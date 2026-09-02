export const metadata = {
  title: "Impressum | Praxis Dr. Vlachou-Vaterrodt",
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="wordmark" href="/"><span className="wordmark-kicker">Augenheilkunde</span><span>Praxis Dr. Vlachou-Vaterrodt</span></a>
        <a href="/">Zur Startseite ←</a>
      </header>
      <article className="legal-content">
        <p className="eyebrow ink">Rechtliches</p>
        <h1>Impressum und rechtliche Hinweise</h1>
        <p className="legal-lead">Anbieterangaben und rechtliche Hinweise für den Webauftritt.</p>
        <section>
          <h2>Impressum</h2>
          <p><strong>Angaben gemäß § 5 DDG</strong></p>
          <p>Dr. med. Vassiliki Vlachou-Vaterrodt<br />Südliche Münchner Straße 20<br />82031 Grünwald<br />T <a href="tel:+49896492969">089 6492969</a><br />E-Mail: <a href="mailto:info@augen-arzt.de">info@augen-arzt.de</a></p>
          <p>Wir möchten Sie darauf hinweisen, dass unter der angegebenen E-Mail-Adresse keine Beratung zu medizinischen Behandlungen erfolgt. Sollten Sie diesbezüglich Fragen haben, kontaktieren Sie bitte die jeweils angegebene Einrichtung telefonisch.</p>
        </section>
        <section>
          <h2>Gesetzliche Berufsbezeichnung</h2>
          <p>Facharzt für Augenheilkunde (verliehen in Deutschland)</p>
        </section>
        <section>
          <h2>Zuständige Aufsichtsbehörde</h2>
          <p>KVB Kassenärztliche Vereinigung Bayern<br />Elsenheimerstraße 39<br />80687 München<br />Tel.: 089 57093-0<br />E-Mail: <a href="mailto:info@kvb.de">info@kvb.de</a><br /><a href="https://www.kvb.de" target="_blank" rel="noreferrer">https://www.kvb.de</a></p>
        </section>
        <section>
          <h2>Zuständige Ärztekammer</h2>
          <p>Bayerische Landesärztekammer<br />Mühlbaurstraße 16<br />81677 München<br />Tel.: 089 4147-0<br />E-Mail: <a href="mailto:info@blaek.de">info@blaek.de</a><br /><a href="https://www.blaek.de" target="_blank" rel="noreferrer">https://www.blaek.de</a></p>
        </section>
        <section>
          <h2>Berufsrechtliche Regelungen</h2>
          <p>Bundesärzteordnung (BÄO)<br />Berufsordnung für die Ärzte Bayerns<br />Heilberufe-Kammergesetz (HKaG)<br />Gebührenordnung für Ärzte (GOÄ)</p>
          <p>Die Berufsordnung für die Ärzte Bayerns ist abrufbar über die Bayerische Landesärztekammer unter <a href="https://www.blaek.de" target="_blank" rel="noreferrer">https://www.blaek.de</a>. Die Bundesärzteordnung, das Heilberufe-Kammergesetz und die Gebührenordnung für Ärzte sind über die amtlichen Gesetzesportale des Bundes bzw. des Freistaats Bayern abrufbar.</p>
        </section>
        <section>
          <h2>Berufshaftpflichtversicherung</h2>
          <p>Deutsche Ärzteversicherung<br />Allgemeine Zweigniederlassung der AXA Versicherung AG<br />Colonia-Allee 10-20<br />51067 Köln<br />Telefon: 0221/148-22700<br />Fax: 0221/148-21442<br />Räumlicher Geltungsbereich: Deutschland</p>
        </section>
        <section>
          <h2>Rechtliche Hinweise</h2>
          <h3>Urheberrecht</h3>
          <p>Diese Website einschließlich aller Teile, Texte und Bilder ist urheberrechtlich geschützt. Vervielfältigungen und Veröffentlichungen von Teilen, Texten oder Bildern bedürfen einer vorherigen schriftlichen Genehmigung.</p>
          <h3>Verantwortlichkeit für eigene Inhalte</h3>
          <p>Als Diensteanbieter ist der Verantwortliche nach den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Die Inhalte dieser Website wurden sorgfältig erstellt; eine Gewähr für Aktualität, Vollständigkeit und Richtigkeit wird jedoch nicht übernommen.</p>
          <h3>Verantwortlichkeit für externe Inhalte</h3>
          <p>Diese Website enthält Verknüpfungen zu Websites Dritter. Auf deren Inhalte besteht kein Einfluss; für diese fremden Inhalte wird daher keine Gewähr übernommen. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Bei Bekanntwerden entsprechender Rechtsverletzungen werden derartige Links entfernt.</p>
          <h3>Verbraucherstreitbeilegung</h3>
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <h3>Medizinischer Disclaimer</h3>
          <p>Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information. Sie ersetzen keine individuelle ärztliche Beratung, Untersuchung oder Behandlung. Bei akuten Beschwerden oder medizinischen Fragen sollte stets eine augenärztliche Untersuchung erfolgen.</p>
        </section>
      </article>
      <footer><span>© {new Date().getFullYear()} Praxis Dr. Vlachou-Vaterrodt</span><div><a href="/datenschutz">Datenschutz</a><a href="/">Startseite</a></div></footer>
    </main>
  );
}
