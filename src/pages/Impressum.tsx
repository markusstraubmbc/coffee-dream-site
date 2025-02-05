import Footer from "../components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
              <p>Marvin Ehrle</p>
              <p>Siebträgertraum</p>
              <p>Adresse auf Anfrage</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
              <p>Telefon: +49 170 2811594</p>
              <p>E-Mail: Info@siebtraegertraum.de</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>[Ihre USt-IdNr.]</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/</p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;