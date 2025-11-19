import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles, Droplets, Clock, Shield } from "lucide-react";

const SiebtraegerReinigungTipps = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-primary mb-4">
              Siebträger richtig reinigen: Profitipps für Langlebigkeit und Geschmack
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Warum regelmäßige Reinigung entscheidend ist und wie Papierfilter Ihnen dabei helfen können
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Warum ist die Reinigung so wichtig?
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Eine saubere Espressomaschine ist nicht nur eine Frage der Hygiene – sie ist entscheidend für den Geschmack Ihres Espressos. Kaffeeöle und -rückstände werden mit der Zeit ranzig und beeinflussen negativ das Aroma. Zudem können Ablagerungen die Maschine beschädigen und die Lebensdauer verkürzen.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Geschmackliche Vorteile</h3>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Keine ranzigen Öle im Espresso</li>
                  <li>Reinere, klarere Aromen</li>
                  <li>Konsistenter Geschmack</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Technische Vorteile</h3>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Längere Lebensdauer der Maschine</li>
                  <li>Weniger Wartungsaufwand</li>
                  <li>Gleichbleibender Brühdruck</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8" />
              Tägliche Reinigungsroutine
            </h2>
            <div className="bg-coffee-light/10 p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Nach jedem Bezug</h3>
              <ol className="list-decimal list-inside text-coffee-primary/80 space-y-3">
                <li>Siebträger ausklopfen und Kaffeepuck entfernen</li>
                <li>Siebträger unter heißem Wasser ausspülen</li>
                <li>Blindbezug durchführen (Wasser ohne Kaffee durchlaufen lassen)</li>
                <li>Duschplatte mit feuchtem Tuch abwischen</li>
              </ol>
            </div>

            <div className="bg-coffee-light/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-coffee-primary mb-4">Am Ende des Tages</h3>
              <ol className="list-decimal list-inside text-coffee-primary/80 space-y-3">
                <li>Sieb mit Bürste reinigen und einweichen</li>
                <li>Dichtung der Brühgruppe reinigen</li>
                <li>Abtropfschale leeren und säubern</li>
                <li>Dampflanze mit feuchtem Tuch abwischen</li>
              </ol>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8" />
              Wöchentliche Tiefenreinigung
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Rückspülung (Backflushing)</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Einmal pro Woche sollten Sie eine Rückspülung mit speziellem Espressomaschinenreiniger durchführen:
                </p>
                <ol className="list-decimal list-inside text-coffee-primary/80 space-y-2">
                  <li>Blindsieb einsetzen (Sieb ohne Löcher)</li>
                  <li>Reinigungspulver auf das Blindsieb geben</li>
                  <li>Siebträger einspannen und mehrmals kurz Wasser durchlaufen lassen</li>
                  <li>Vorgang 3-5 Mal wiederholen</li>
                  <li>Mit klarem Wasser nachspülen</li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Siebe und Dichtungen</h3>
                <p className="text-coffee-primary/80 mb-4">
                  Siebe und Dichtungen benötigen besondere Aufmerksamkeit:
                </p>
                <ul className="list-disc list-inside text-coffee-primary/80 space-y-2">
                  <li>Siebe in heißem Wasser mit Reinigungsmittel einweichen</li>
                  <li>Mit Bürste gründlich schrubben</li>
                  <li>Dichtungen auf Risse und Verschleiß prüfen</li>
                  <li>Bei Bedarf Dichtungen austauschen</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Wie Papierfilter die Reinigung erleichtern
            </h2>
            <p className="text-coffee-primary/80 leading-relaxed mb-6">
              Papierfilter im Siebträger sind ein Game-Changer für die Reinigung Ihrer Espressomaschine:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Weniger Kaffeerückstände</h3>
                <p className="text-coffee-primary/80">
                  Der Filter hält feine Kaffeepartikel zurück, die sonst das Sieb und die Duschplatte verschmutzen würden. Ergebnis: deutlich weniger Reinigungsaufwand.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Schutz der Maschine</h3>
                <p className="text-coffee-primary/80">
                  Weniger Ablagerungen in der Brühgruppe bedeuten längere Wartungsintervalle und eine längere Lebensdauer Ihrer Espressomaschine.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Einfacheres Ausklopfen</h3>
                <p className="text-coffee-primary/80">
                  Der Kaffeepuck lässt sich mit Filter viel einfacher und sauberer aus dem Sieb entfernen – keine festgeklebten Rückstände mehr.
                </p>
              </div>
              <div className="bg-coffee-light/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-primary mb-3">Konstante Qualität</h3>
                <p className="text-coffee-primary/80">
                  Eine sauberere Maschine liefert konstant bessere Ergebnisse – Papierfilter helfen dabei, diese Sauberkeit mit weniger Aufwand zu erreichen.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-coffee-primary mb-6">Reinigungsmittel und Werkzeuge</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-coffee-primary mb-4">Empfohlene Reinigungsprodukte</h3>
              <ul className="space-y-3 text-coffee-primary/80">
                <li><strong className="text-coffee-primary">Espressomaschinenreiniger:</strong> Spezielles Pulver für Rückspülung (z.B. Puly Caff)</li>
                <li><strong className="text-coffee-primary">Gruppenbürste:</strong> Für Duschplatte und Brühgruppendichtung</li>
                <li><strong className="text-coffee-primary">Blindsieb:</strong> Für Rückspülung</li>
                <li><strong className="text-coffee-primary">Mikrofasertücher:</strong> Für äußere Reinigung</li>
                <li><strong className="text-coffee-primary">Entkalker:</strong> Für regelmäßige Entkalkung (je nach Wasserhärte)</li>
              </ul>
            </div>
          </section>

          <section className="bg-coffee-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Weniger Reinigungsaufwand mit unserer Filterbox</h2>
            <p className="text-lg mb-6">
              Kombinieren Sie Papierfilter mit unserer eleganten Aufbewahrungsbox für maximale Hygiene und minimalen Reinigungsaufwand.
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

export default SiebtraegerReinigungTipps;
