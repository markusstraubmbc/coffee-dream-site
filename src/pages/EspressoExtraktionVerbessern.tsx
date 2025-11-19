import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TrendingUp, Target, Clock, Thermometer } from "lucide-react";

const EspressoExtraktionVerbessern = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-primary mb-4">
              Espresso-Extraktion verbessern: Profitipps für perfekte Ergebnisse
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Wie Sie mit einfachen Methoden und dem richtigen Zubehör eine gleichmäßige, schmackhafte Espresso-Extraktion erreichen
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Was bedeutet gute Extraktion?
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Eine gute Espresso-Extraktion bedeutet, dass das Wasser gleichmäßig durch den Kaffeepuck fließt und dabei die optimale Menge an Aromastoffen aus dem Kaffee löst. Das Ziel: ein ausgewogener, komplexer Espresso ohne bittere oder saure Noten.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-coffee-primary mb-3">Kennzeichen perfekter Extraktion</h3>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                <li>Gleichmäßiger, stabiler Fluss während des Bezugs</li>
                <li>Haselnussbraune Crema mit feiner Textur</li>
                <li>Ausgewogenes Geschmacksprofil: süß, fruchtig, komplex</li>
                <li>Keine bittere oder saure Dominanz</li>
                <li>Sauberer, langer Nachgeschmack</li>
              </ul>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Häufige Extraktionsprobleme und Lösungen
            </h2>
            <div className="space-y-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Channeling</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Channeling entsteht, wenn Wasser ungleichmäßige Kanäle durch den Kaffee bildet. Resultat: unterextrahierter, saurer Espresso.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Kaffeepuck gleichmäßig verteilen (WDT-Tool verwenden)</li>
                  <li>Konsistenten Anpressdruck beim Tampen</li>
                  <li>Papierfilter verwenden für gleichmäßigeren Wasserfluss</li>
                  <li>Mahlgrad anpassen – ggf. etwas feiner mahlen</li>
                </ul>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Überextraktion</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Zu viel Kontaktzeit zwischen Wasser und Kaffee führt zu bitteren, adstringierenden Aromen.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Mahlgrad gröber einstellen</li>
                  <li>Weniger Kaffee dosieren</li>
                  <li>Bezugszeit reduzieren (Ziel: 25-30 Sekunden)</li>
                  <li>Wassertemperatur leicht senken</li>
                </ul>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-coffee-primary mb-3">Problem: Unterextraktion</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Zu kurze Kontaktzeit oder zu grober Mahlgrad führen zu saurem, wässrigem Espresso ohne Körper.
                </p>
                <h4 className="text-lg font-semibold text-coffee-primary mb-2">Lösungen:</h4>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Mahlgrad feiner einstellen</li>
                  <li>Mehr Kaffee dosieren</li>
                  <li>Bezugszeit erhöhen</li>
                  <li>Wassertemperatur erhöhen (optimal: 92-96°C)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8" />
              Die Rolle von Papierfiltern bei der Extraktion
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Papierfilter sind ein unterschätztes Werkzeug zur Verbesserung der Extraktion. Sie bieten mehrere Vorteile:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Gleichmäßiger Wasserfluss</h3>
                <p className="text-coffee-primary/80">
                  Der Filter sorgt für eine gleichmäßige Verteilung des Wassers über den gesamten Kaffeepuck, reduziert Channeling und sorgt für konsistentere Ergebnisse.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Sauberer Geschmack</h3>
                <p className="text-coffee-primary/80">
                  Feine Kaffeepartikel und überschüssige Öle werden zurückgehalten, was zu einem klareren, definierteren Geschmacksprofil führt.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Thermometer className="w-8 h-8" />
              Optimale Parameter für perfekte Extraktion
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4 text-coffee-primary/80">
                <li><strong className="text-coffee-primary">Kaffeemenge:</strong> 18-20g für doppelten Espresso</li>
                <li><strong className="text-coffee-primary">Ausgabemenge:</strong> 36-40g (1:2 Ratio)</li>
                <li><strong className="text-coffee-primary">Bezugszeit:</strong> 25-30 Sekunden</li>
                <li><strong className="text-coffee-primary">Wassertemperatur:</strong> 92-96°C</li>
                <li><strong className="text-coffee-primary">Brühdruck:</strong> 9 bar</li>
                <li><strong className="text-coffee-primary">Mahlgrad:</strong> Fein, aber nicht zu fein (ähnlich Tafelsalz)</li>
              </ul>
            </div>
          </section>

          <section className="bg-coffee-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Verbessern Sie Ihre Extraktion heute</h2>
            <p className="text-lg mb-6">
              Mit der richtigen Technik und hochwertigem Zubehör wie unserer Premium Filterbox erreichen Sie konstant bessere Espresso-Ergebnisse.
            </p>
            <a 
              href="/"
              className="inline-block bg-white text-coffee-primary px-8 py-3 rounded-lg font-semibold hover:bg-coffee-secondary/10 transition-colors"
            >
              Mehr erfahren
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EspressoExtraktionVerbessern;
