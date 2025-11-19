import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Coffee, Filter, Droplets, Sparkles } from "lucide-react";

const SiebtraegerPapierfilterGuide = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-primary mb-4">
              Papierfilter im Siebträger: Der ultimative Guide für perfekten Espresso
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Alles was Sie über Papierfilter in der Siebträgermaschine wissen müssen – von der richtigen Anwendung bis zur optimalen Aufbewahrung
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Filter className="w-8 h-8" />
              Was sind Papierfilter für den Siebträger?
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Papierfilter für Siebträgermaschinen sind dünne, kreisrunde Filter aus speziellem Kaffeefilterpapier, die ursprünglich aus der AeroPress-Welt stammen. Sie werden direkt im Siebträger verwendet – entweder unter oder über dem Kaffeepuck – und haben in den letzten Jahren die Barista-Szene revolutioniert.
            </p>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Die Verwendung von Papierfiltern im Siebträger ist keine neue Erfindung, erlebt aber gerade eine Renaissance. Immer mehr Kaffeeprofis und Heimbaristas entdecken die Vorteile dieser simplen, aber effektiven Methode zur Verbesserung der Espresso-Qualität.
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Vorteile von Papierfiltern im Siebträger
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Reinerer Geschmack</h3>
                <p className="text-coffee-primary/80">
                  Papierfilter entfernen feine Kaffeepartikel und überschüssige Öle, die sonst in der Tasse landen. Das Ergebnis ist ein klarerer, sauberer Espresso mit mehr Geschmacksnuancen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Gleichmäßige Extraktion</h3>
                <p className="text-coffee-primary/80">
                  Der Filter sorgt für einen gleichmäßigeren Wasserfluss durch den Kaffeepuck und reduziert Channeling – ungleichmäßige Wasserkanäle, die zu bitterer oder saurer Extraktion führen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Einfachere Reinigung</h3>
                <p className="text-coffee-primary/80">
                  Das Sieb bleibt deutlich sauberer, die Duschplatte setzt sich weniger zu. Das spart Zeit und schont die Maschine langfristig.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Längere Maschinenlebensdauer</h3>
                <p className="text-coffee-primary/80">
                  Weniger Kaffeerückstände bedeuten weniger Verschleiß an empfindlichen Maschinenteilen wie Dichtungen und Duschplatten.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8" />
              Richtige Anwendung: Unter oder über dem Kaffee?
            </h2>
            <div className="bg-coffee-light/10 p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Filter unter dem Kaffeepuck</h3>
              <p className="text-coffee-primary/80 mb-4">
                Der Filter wird direkt ins Sieb gelegt, bevor der Kaffee eingefüllt wird. Diese Methode ist besonders beliebt für:
              </p>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-2 mb-4">
                <li>Reduktion von Channeling und gleichmäßigere Extraktion</li>
                <li>Verhinderung von Kaffeepartikeln im Sieb</li>
                <li>Saubereren Siebträger nach dem Bezug</li>
                <li>Konsistentere Espresso-Ergebnisse</li>
              </ul>
              <p className="text-coffee-primary/80 italic">
                Ideal für Baristas, die Wert auf Reproduzierbarkeit und Sauberkeit legen.
              </p>
            </div>

            <div className="bg-coffee-light/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Filter über dem Kaffeepuck</h3>
              <p className="text-coffee-primary/80 mb-4">
                Der Filter wird nach dem Tampen auf den Kaffee gelegt. Vorteile dieser Methode:
              </p>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-2 mb-4">
                <li>Schutz der Duschplatte vor Verkrustungen</li>
                <li>Verhinderung des Aufreißens des Pucks beim Ausspannen</li>
                <li>Gleichmäßiger Druckaufbau von oben</li>
                <li>Längere Lebensdauer der Maschinenteile</li>
              </ul>
              <p className="text-coffee-primary/80 italic">
                Perfekt für die Maschinenpflege und besonders saubere Bezüge.
              </p>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Coffee className="w-8 h-8" />
              Die richtige Aufbewahrung: Unsere Premium Filterbox
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Papierfilter richtig aufzubewahren ist entscheidend für die Hygiene und Effizienz Ihrer Kaffee-Routine. Lose Filter in Schubladen sind unpraktisch und unhygienisch. Unsere Premium Filterbox bietet die ideale Lösung:
            </p>
            <ul className="list-disc list-inside text-coffee-primary/80 space-y-3 mb-6">
              <li>Hygienische Aufbewahrung direkt neben der Maschine</li>
              <li>Schneller Zugriff – Filter immer griffbereit</li>
              <li>Elegantes Design, das zu jeder Kaffeeecke passt</li>
              <li>Schützt Filter vor Feuchtigkeit und Verschmutzung</li>
              <li>Perfekt abgestimmt auf gängige Filtergrößen</li>
            </ul>
            <p className="text-coffee-primary/80 leading-relaxed">
              Mit einer Premium Filterbox von Siebträgertraum bringen Sie Ordnung in Ihre Kaffee-Routine und sorgen dafür, dass Ihre Filter immer einsatzbereit sind – für den perfekten Espresso, jeden Tag.
            </p>
          </section>

          <section className="bg-coffee-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Bereit für besseren Espresso?</h2>
            <p className="text-lg mb-6">
              Entdecken Sie unsere Premium Filterbox und perfektionieren Sie Ihr Kaffeeerlebnis mit der richtigen Aufbewahrung für Ihre Papierfilter.
            </p>
            <a 
              href="/"
              className="inline-block bg-white text-coffee-primary px-8 py-3 rounded-lg font-semibold hover:bg-coffee-secondary/10 transition-colors"
            >
              Zur Startseite
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SiebtraegerPapierfilterGuide;
