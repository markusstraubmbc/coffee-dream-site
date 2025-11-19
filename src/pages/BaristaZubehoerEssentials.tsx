import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Coffee, Scale, Thermometer, Clock } from "lucide-react";

const BaristaZubehoerEssentials = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-primary mb-4">
              Barista-Zubehör Essentials: Was Sie wirklich brauchen
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Die wichtigsten Werkzeuge für perfekten Espresso – vom Einsteiger bis zum Profi
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6">
              Die Grundausstattung für jeden Heimbarista
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Guter Espresso beginnt mit der richtigen Ausrüstung. Doch was braucht man wirklich, und worauf kann man am Anfang verzichten? Dieser Guide hilft Ihnen, die richtigen Investitionen zu tätigen.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Coffee className="w-8 h-8" />
              Must-Have Zubehör für Einsteiger
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">1. Präzisions-Kaffeemühle</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Die wichtigste Investition überhaupt. Eine gute Mühle mit Kegelmahlwerk oder Scheibenmahlwerk ist entscheidender als die Espressomaschine selbst.
                </p>
                <p className="text-coffee-primary/80 italic">
                  Warum? Nur frisch gemahlener Kaffee mit gleichmäßiger Körnung liefert konstant guten Espresso.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">2. Präzisionswaage</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Eine Waage mit 0,1g Genauigkeit ist unerlässlich für reproduzierbare Ergebnisse. Messen Sie sowohl die Kaffeemenge als auch die Ausgabemenge.
                </p>
                <p className="text-coffee-primary/80 italic">
                  Tipp: Modelle mit eingebautem Timer sind besonders praktisch.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">3. Tamper</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Ein guter Tamper mit passendem Durchmesser (meist 58mm) und ergonomischem Griff. Das Gewicht sollte zwischen 450-500g liegen für optimalen Druck.
                </p>
                <p className="text-coffee-primary/80 italic">
                  Investieren Sie in Qualität – ein guter Tamper hält ein Leben lang.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">4. Reinigungsbürste und -mittel</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Eine Gruppenbürste für die Duschplatte und spezielles Espressomaschinenreinigungspulver sind essentiell für die Maschinenpflege.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8" />
              Fortgeschrittenes Zubehör für bessere Ergebnisse
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">WDT-Tool (Weiss Distribution Technique)</h3>
                <p className="text-coffee-primary/80">
                  Feine Nadeln zum Auflockern und gleichmäßigen Verteilen des Kaffeepulvers im Sieb. Reduziert Channeling drastisch.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Leveler / Distributor</h3>
                <p className="text-coffee-primary/80">
                  Verteilt das Kaffeemehl gleichmäßig vor dem Tampen. Besonders nützlich für Einsteiger, um konsistente Ergebnisse zu erzielen.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Milchkännchen (Pitcher)</h3>
                <p className="text-coffee-primary/80">
                  Wenn Sie Milchgetränke lieben: Ein hochwertiges Edelstahl-Kännchen mit Thermometer für perfekte Mikroschaum-Textur.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Dosierring</h3>
                <p className="text-coffee-primary/80">
                  Verhindert Kaffeeverlust beim Befüllen des Siebträgers und sorgt für sauberes Arbeiten.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Thermometer className="w-8 h-8" />
              Pro-Level Zubehör für Perfektionisten
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Präzisions-Thermometer</h3>
                <p className="text-coffee-primary/80">
                  Für Maschinen ohne PID: Ein Thermometer zur Kontrolle der Brühtemperatur. Optimal sind 92-96°C.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Druckmanometer</h3>
                <p className="text-coffee-primary/80">
                  Misst den Brühdruck in Echtzeit. Hilft bei der Optimierung von Mahlgrad und Dosierung.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Refraktometer</h3>
                <p className="text-coffee-primary/80">
                  Misst die Extraktionsrate (TDS - Total Dissolved Solids). Das ultimative Werkzeug für wissenschaftliche Espresso-Optimierung.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8" />
              Der Geheimtipp: Papierfilter und Aufbewahrung
            </h2>
            <div className="bg-coffee-primary/10 p-8 rounded-lg">
              <p className="text-coffee-primary/80 leading-relaxed mb-6">
                Ein oft übersehenes, aber extrem nützliches Zubehör sind Papierfilter für den Siebträger. Sie verbessern nicht nur die Extraktion und den Geschmack, sondern erleichtern auch die Reinigung enorm.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Vorteile von Papierfiltern</h3>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Klarerer, reinerer Espresso-Geschmack</li>
                  <li>Reduzierung von Channeling</li>
                  <li>Deutlich weniger Reinigungsaufwand</li>
                  <li>Schutz der Maschine vor Ablagerungen</li>
                </ul>
              </div>
              <p className="text-coffee-primary/80 leading-relaxed mb-4">
                Für die hygienische und praktische Aufbewahrung Ihrer Papierfilter empfehlen wir unsere Premium Filterbox – perfekt designt für die moderne Kaffeeküche.
              </p>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6">Investitionsempfehlung nach Budget</h2>
            <div className="space-y-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Einsteiger (bis 200€)</h3>
                <p className="text-coffee-primary/80">
                  Präzisionswaage, guter Tamper, Reinigungsmittel, Papierfilter mit Aufbewahrungsbox
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Fortgeschritten (200-500€)</h3>
                <p className="text-coffee-primary/80">
                  + WDT-Tool, Distributor, hochwertiges Milchkännchen, Dosierring
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Profi (500€+)</h3>
                <p className="text-coffee-primary/80">
                  + Präzisions-Thermometer, Druckmanometer, Refraktometer, Premium-Zubehör
                </p>
              </div>
            </div>
          </section>

          <section className="bg-coffee-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihre Barista-Reise richtig</h2>
            <p className="text-lg mb-6">
              Mit dem richtigen Zubehör und unserer Premium Filterbox für perfekte Organisation erreichen Sie konstant bessere Espresso-Ergebnisse.
            </p>
            <a 
              href="/"
              className="inline-block bg-white text-coffee-primary px-8 py-3 rounded-lg font-semibold hover:bg-coffee-secondary/10 transition-colors"
            >
              Filterbox entdecken
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BaristaZubehoerEssentials;
