import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Scale, Coffee, Sparkles, TrendingUp } from "lucide-react";

const PapierfilterVsMetallsieb = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-primary mb-4">
              Papierfilter vs. Metallsieb: Der große Vergleich für Siebträger
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Welche Methode liefert besseren Espresso? Ein objektiver Vergleich aller Vor- und Nachteile
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8" />
              Die zwei Methoden im Überblick
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Die Diskussion zwischen Papierfilter und klassischem Metallsieb spaltet die Barista-Community. Beide Methoden haben ihre Berechtigung – doch welche ist die richtige für Sie?
            </p>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Coffee className="w-8 h-8" />
              Klassisches Metallsieb
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Vorteile</h3>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-3 mb-6">
                <li><strong>Traditioneller Geschmack:</strong> Mehr Öle und Körper im Espresso, volleres Mundgefühl</li>
                <li><strong>Keine laufenden Kosten:</strong> Einmal kaufen, dauerhaft nutzen</li>
                <li><strong>Umweltfreundlich:</strong> Kein Verbrauchsmaterial, keine Abfälle</li>
                <li><strong>Authentische Crema:</strong> Dickere, dunklere Crema durch mehr gelöste Öle</li>
                <li><strong>Klassische Zubereitung:</strong> So wie Espresso traditionell zubereitet wird</li>
              </ul>

              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Nachteile</h3>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-3">
                <li><strong>Mehr Reinigungsaufwand:</strong> Sieb, Duschplatte und Brühgruppe setzen sich schneller zu</li>
                <li><strong>Channeling-anfällig:</strong> Ungleichmäßige Extraktion bei suboptimaler Vorbereitung</li>
                <li><strong>Trübere Tasse:</strong> Feine Kaffeepartikel gelangen in den Espresso</li>
                <li><strong>Höherer Verschleiß:</strong> Mehr Ablagerungen in der Maschine</li>
                <li><strong>Inkonsistenter:</strong> Schwieriger, gleichbleibende Ergebnisse zu erzielen</li>
              </ul>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Papierfilter im Siebträger
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Vorteile</h3>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-3 mb-6">
                <li><strong>Klarerer Geschmack:</strong> Sauberer, definierter Espresso mit mehr Geschmacksnuancen</li>
                <li><strong>Gleichmäßigere Extraktion:</strong> Reduziert Channeling deutlich, konsistentere Ergebnisse</li>
                <li><strong>Weniger Reinigung:</strong> Siebträger, Duschplatte und Maschine bleiben viel sauberer</li>
                <li><strong>Längere Maschinenlebensdauer:</strong> Weniger Verschleiß durch Ablagerungen</li>
                <li><strong>Mehr Süße:</strong> Besonders bei hellen Röstungen werden mehr natürliche Zucker extrahiert</li>
                <li><strong>Einfacheres Ausklopfen:</strong> Kaffeepuck löst sich sauberer aus dem Sieb</li>
              </ul>

              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Nachteile</h3>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-3">
                <li><strong>Laufende Kosten:</strong> Filter müssen nachgekauft werden (allerdings sehr günstig)</li>
                <li><strong>Weniger Körper:</strong> Leichteres Mundgefühl durch weniger Öle</li>
                <li><strong>Zusätzlicher Schritt:</strong> Filter muss vor jedem Bezug eingelegt werden</li>
                <li><strong>Geschmacksveränderung:</strong> Nicht der traditionelle italienische Espresso-Stil</li>
                <li><strong>Hellere Crema:</strong> Durch weniger Öle optisch weniger beeindruckend</li>
              </ul>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Direkter Vergleich: Kategorie für Kategorie
            </h2>
            <div className="space-y-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">🎯 Geschmack & Klarheit</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Papierfilter</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Klarerer, sauberer Geschmack mit mehr definierten Noten. Ideal für hochwertige Specialty-Coffee-Bohnen. Metallsieb liefert mehr Körper und traditionellen Geschmack.
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">⚡ Konsistenz & Fehlerverzeihung</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Papierfilter</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Deutlich konsistentere Ergebnisse, verzeiht mehr Fehler bei der Vorbereitung. Perfekt für Einsteiger und für busy mornings.
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">🧼 Reinigung & Wartung</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Papierfilter (deutlich)</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Massiv weniger Reinigungsaufwand, Maschine bleibt deutlich länger sauber. Spart täglich mehrere Minuten Zeit.
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">💰 Kosten</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Metallsieb (langfristig)</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Keine laufenden Kosten. Allerdings sind Papierfilter sehr günstig (ca. 2-3 Cent pro Filter), sodass der Unterschied minimal ist.
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">🌍 Umwelt</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Metallsieb</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Kein Abfall. Papierfilter sind zwar biologisch abbaubar, erzeugen aber dennoch Müll. Allerdings ist die Umweltauswirkung minimal.
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">☕ Körper & Mundgefühl</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Metallsieb</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Vollerer, öliger Körper. Traditionelles Espresso-Mundgefühl mit mehr Textur und Schwere.
                </p>
              </div>

              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">🎓 Lernkurve</h3>
                <p className="text-coffee-primary/80 mb-2">
                  <strong>Gewinner: Papierfilter</strong>
                </p>
                <p className="text-coffee-primary/80">
                  Einfacher zu meistern, verzeiht mehr Fehler. Ideal für Einsteiger, die schnell gute Ergebnisse wollen.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6">Welche Methode ist die richtige für Sie?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-4">Wählen Sie Papierfilter, wenn:</h3>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Sie Wert auf Klarheit und Sauberkeit legen</li>
                  <li>Sie weniger Zeit für Reinigung haben</li>
                  <li>Sie Specialty Coffee mit komplexen Aromen trinken</li>
                  <li>Sie konsistente Ergebnisse bevorzugen</li>
                  <li>Sie Einsteiger sind oder wenig Zeit zum Üben haben</li>
                  <li>Sie helle bis mittlere Röstungen bevorzugen</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-4">Wählen Sie Metallsieb, wenn:</h3>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Sie traditionellen, vollmundigen Espresso lieben</li>
                  <li>Sie keine laufenden Kosten möchten</li>
                  <li>Sie Umweltauswirkungen minimieren wollen</li>
                  <li>Sie die Barista-Kunst perfektionieren möchten</li>
                  <li>Sie dunklere Röstungen bevorzugen</li>
                  <li>Sie viele Milchgetränke zubereiten (Körper wichtig)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6">Die Hybrid-Lösung: Das Beste aus beiden Welten</h2>
            <div className="bg-coffee-primary/10 p-8 rounded-lg">
              <p className="text-coffee-primary/80 leading-relaxed mb-4">
                Die beste Lösung? Nutzen Sie beide Methoden je nach Situation:
              </p>
              <ul className="list-disc list-inside text-coffee-primary/80 space-y-3">
                <li><strong>Morgens unter der Woche:</strong> Papierfilter für schnelle, saubere, konsistente Ergebnisse</li>
                <li><strong>Wochenende:</strong> Traditionelles Metallsieb, wenn Sie Zeit haben zum Experimentieren</li>
                <li><strong>Specialty Coffee:</strong> Papierfilter für maximale Geschmacksklarheit</li>
                <li><strong>Milchgetränke:</strong> Metallsieb für mehr Körper</li>
                <li><strong>Nach Wartung/Reinigung:</strong> Papierfilter, um die Maschine länger sauber zu halten</li>
              </ul>
              <p className="text-coffee-primary/80 leading-relaxed mt-6">
                Mit unserer Premium Filterbox haben Sie Ihre Papierfilter immer griffbereit und können flexibel zwischen beiden Methoden wechseln.
              </p>
            </div>
          </section>

          <section className="bg-coffee-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Probieren Sie beide Methoden aus</h2>
            <p className="text-lg mb-6">
              Mit unserer Premium Filterbox können Sie einfach zwischen Papierfilter und Metallsieb wechseln und selbst entscheiden, was Ihnen besser schmeckt.
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

export default PapierfilterVsMetallsieb;
