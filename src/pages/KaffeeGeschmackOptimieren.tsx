import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles, Target, Flame, Droplet } from "lucide-react";

const KaffeeGeschmackOptimieren = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-primary mb-4">
              Kaffee-Geschmack optimieren: Der komplette Guide für besseren Espresso
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Entdecken Sie, wie Sie mit einfachen Anpassungen und dem richtigen Zubehör deutlich besseren Kaffee zubereiten
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Die Grundlagen des Kaffee-Geschmacks
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Der Geschmack von Espresso wird von vielen Faktoren beeinflusst: Bohnenqualität, Röstung, Mahlgrad, Wasserqualität, Temperatur und Extraktionszeit. Um Ihren Kaffee zu optimieren, müssen Sie verstehen, wie diese Faktoren zusammenspielen.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Süße</h3>
                <p className="text-coffee-primary/80">
                  Natürliche Süße entsteht bei optimaler Extraktion. Zeichen: angenehme Rundung, keine Bitterkeit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Säure</h3>
                <p className="text-coffee-primary/80">
                  Lebendige, fruchtige Säure ist wünschenswert. Zu viel deutet auf Unterextraktion hin.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Körper</h3>
                <p className="text-coffee-primary/80">
                  Die Textur und das Mundgefühl. Sollte voll und cremig sein, nicht wässrig oder überwältigend ölig.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Häufige Geschmacksprobleme und Lösungen
            </h2>
            <div className="space-y-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Bitterer Espresso</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Bitterkeit deutet meist auf Überextraktion hin – zu viel wurde aus dem Kaffee herausgelöst.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Mahlgrad gröber stellen</li>
                  <li>Bezugszeit verkürzen (Ziel: 25-30 Sekunden)</li>
                  <li>Wassertemperatur senken (auf 91-93°C)</li>
                  <li>Weniger Kaffee dosieren</li>
                  <li>Kaffeebohnen wechseln – zu dunkle Röstung vermeiden</li>
                </ul>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Saurer Espresso</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Zu viel Säure ist ein Zeichen von Unterextraktion – nicht genug Aromen wurden extrahiert.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Mahlgrad feiner stellen</li>
                  <li>Bezugszeit verlängern</li>
                  <li>Wassertemperatur erhöhen (auf 94-96°C)</li>
                  <li>Mehr Kaffee dosieren</li>
                  <li>Gleichmäßigere Extraktion durch WDT-Tool oder Papierfilter</li>
                </ul>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Wässriger, flacher Geschmack</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Fehlt dem Espresso Körper und Intensität, liegt das oft an schlechter Extraktion oder minderer Bohnenqualität.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Frischere Bohnen verwenden (idealerweise 7-21 Tage nach Röstung)</li>
                  <li>Hochwertigere Bohnen mit komplexerem Aromaprofil wählen</li>
                  <li>Dosierung erhöhen (z.B. von 18g auf 19-20g)</li>
                  <li>Sicherstellen, dass die Mühle gleichmäßig mahlt</li>
                </ul>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Inkonsistente Ergebnisse</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Mal gut, mal schlecht? Das deutet auf Channeling oder ungleichmäßige Vorbereitung hin.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>WDT-Technik anwenden für gleichmäßige Kaffeverteilung</li>
                  <li>Papierfilter verwenden zur Reduktion von Channeling</li>
                  <li>Konsistenten Tamping-Druck entwickeln</li>
                  <li>Waage benutzen für präzise Dosierung</li>
                  <li>Maschine regelmäßig reinigen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Flame className="w-8 h-8" />
              Die Rolle der Bohnenröstung
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Die Röstung hat enormen Einfluss auf den Geschmack. Verstehen Sie die Unterschiede, um die richtige Bohne für Ihren Geschmack zu finden:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Helle Röstung</h3>
                <p className="text-coffee-primary/80 mb-3">
                  Fruchtig, blumig, lebendige Säure
                </p>
                <p className="text-sm text-coffee-primary/60">
                  Perfekt für: Filter, AeroPress, moderne Third-Wave-Espresso. Erfordert präzise Zubereitung.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Mittlere Röstung</h3>
                <p className="text-coffee-primary/80 mb-3">
                  Ausgewogen, nussig, karamellig
                </p>
                <p className="text-sm text-coffee-primary/60">
                  Perfekt für: Allrounder, einfacher zu extrahieren, süß und rund. Ideal für Einsteiger.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Dunkle Röstung</h3>
                <p className="text-coffee-primary/80 mb-3">
                  Kräftig, schokoladig, wenig Säure
                </p>
                <p className="text-sm text-coffee-primary/60">
                  Perfekt für: Traditionellen italienischen Espresso, Milchgetränke. Kann aber bitter werden.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Droplet className="w-8 h-8" />
              Der Einfluss der Wasserqualität
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Espresso besteht zu 90% aus Wasser – dessen Qualität ist also entscheidend. Doch was macht gutes Wasser für Espresso aus?
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-coffee-primary mb-4">Optimale Wassereigenschaften</h3>
              <ul className="space-y-3 text-coffee-primary/80">
                <li><strong className="text-coffee-primary">Gesamthärte:</strong> 4-6 °dH (leicht hart)</li>
                <li><strong className="text-coffee-primary">Karbonathärte:</strong> 3-4 °dH</li>
                <li><strong className="text-coffee-primary">pH-Wert:</strong> 7-8 (leicht alkalisch)</li>
                <li><strong className="text-coffee-primary">Geschmack:</strong> Neutral, ohne Chlor oder Chemikalien</li>
              </ul>
            </div>
            <div className="bg-coffee-light/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-coffee-primary mb-3">Lösungen für besseres Wasser</h3>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                <li>Wasserfilter installieren (z.B. BWT, Brita)</li>
                <li>Mineralwasser in Flaschen für Espresso verwenden</li>
                <li>Destilliertes Wasser mit Mineralmischung aufbereiten</li>
                <li>Regelmäßig entkalken bei hartem Wasser</li>
              </ul>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6">Papierfilter: Der Geheimtipp für besseren Geschmack</h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Ein oft übersehener Faktor für besseren Espresso-Geschmack: Papierfilter im Siebträger. Sie bieten mehrere geschmackliche Vorteile:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Klarerer Geschmack</h3>
                <p className="text-coffee-primary/80">
                  Papierfilter entfernen feine Partikel und überschüssige Öle, die den Geschmack trüben können. Das Ergebnis: ein sauberer, definierter Espresso mit mehr Klarheit.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Gleichmäßigere Extraktion</h3>
                <p className="text-coffee-primary/80">
                  Der Filter sorgt für gleichmäßigeren Wasserfluss und reduziert Channeling – ein Hauptgrund für inkonsistente Ergebnisse.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Mehr Süße</h3>
                <p className="text-coffee-primary/80">
                  Durch die gleichmäßigere Extraktion werden mehr natürliche Zucker gelöst, was zu einem süßeren, runderen Espresso führt – besonders bei hellen Röstungen.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Konsistenz</h3>
                <p className="text-coffee-primary/80">
                  Papierfilter helfen, Shot für Shot konsistentere Ergebnisse zu erzielen – besonders wichtig, wenn Sie noch an Ihrer Technik feilen.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-coffee-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Perfektionieren Sie Ihren Espresso-Geschmack</h2>
            <p className="text-lg mb-6">
              Mit den richtigen Techniken, hochwertigem Zubehör und unserer Premium Filterbox erreichen Sie konstant bessere, schmackhaftere Espresso-Ergebnisse.
            </p>
            <a 
              href="/"
              className="inline-block bg-white text-coffee-primary px-8 py-3 rounded-lg font-semibold hover:bg-coffee-secondary/10 transition-colors"
            >
              Premium Filterbox entdecken
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default KaffeeGeschmackOptimieren;
