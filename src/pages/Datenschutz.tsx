import Footer from "../components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-medium mb-2">Datenschutz</h3>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-medium mb-2">Kontaktformular</h3>
              <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben aus der E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;