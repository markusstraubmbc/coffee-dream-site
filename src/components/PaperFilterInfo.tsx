import { Coffee, Droplets, Sparkles, RefreshCw, ArrowDown, ArrowUp } from "lucide-react";

const PaperFilterInfo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-coffee-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-primary mb-6">
            Papierfilter im Siebträger – kleine Idee, großer Unterschied
          </h2>
          <p className="text-lg text-coffee-primary/80 max-w-3xl mx-auto">
            Papierfilter kennt man eigentlich aus der AeroPress oder vom Handaufguss – aber auch in der Siebträgermaschine können sie wahre Wunder wirken. Viele Baristas und Kaffeefans schwören inzwischen darauf, weil sie den Geschmack und die Reinigung spürbar verbessern.
          </p>
        </div>

        {/* Vorteile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <Coffee className="w-12 h-12 text-coffee-primary" />
              <h3 className="text-xl font-semibold text-coffee-primary">Reiner, klarer Geschmack</h3>
              <p className="text-coffee-primary/80">
                Der Filter hält winzige Kaffeepartikel und überschüssige Öle zurück, die sonst in der Tasse landen würden. Das Ergebnis: ein sauberer, runder Espresso mit mehr Klarheit und oft einer angenehmen Süße – besonders bei helleren Röstungen richtig lecker.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <Droplets className="w-12 h-12 text-coffee-primary" />
              <h3 className="text-xl font-semibold text-coffee-primary">Gleichmäßiger Bezug</h3>
              <p className="text-coffee-primary/80">
                Ein Papierfilter sorgt dafür, dass das Wasser gleichmäßig durch den Kaffeepuck fließt. So entsteht weniger Channeling, und der Espresso wird konstanter und ausgewogener – ganz ohne Barista-Magie.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <Sparkles className="w-12 h-12 text-coffee-primary" />
              <h3 className="text-xl font-semibold text-coffee-primary">Weniger Sauerei, weniger Aufwand</h3>
              <p className="text-coffee-primary/80">
                Wer den Filter benutzt, merkt schnell: Das Sieb bleibt deutlich sauberer, und auch die Duschplatte der Maschine setzt sich weniger zu. Das spart Zeit beim Reinigen und schont auf Dauer die Maschine.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <RefreshCw className="w-12 h-12 text-coffee-primary" />
              <h3 className="text-xl font-semibold text-coffee-primary">Einfach ausprobieren</h3>
              <p className="text-coffee-primary/80">
                Der Filter kann unter oder über dem Kaffeepuck eingesetzt werden – je nachdem, was dir besser gefällt. Viele nutzen ihn im Sieb, um den Durchfluss zu verbessern und gleichmäßigere Ergebnisse zu erzielen.
              </p>
            </div>
          </div>
        </div>

        {/* Anwendung: Über oder unter dem Kaffeepuck */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-coffee-primary text-center mb-12">
            📍 Anwendung: Über oder unter dem Kaffeepuck?
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Unter dem Kaffeepuck */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-coffee-primary">
              <div className="flex items-center gap-3 mb-6">
                <ArrowDown className="w-8 h-8 text-coffee-primary" />
                <h4 className="text-2xl font-bold text-coffee-primary">
                  Papierfilter unter dem Kaffeepuck
                </h4>
              </div>
              
              <p className="text-coffee-primary/80 mb-6">
                Wird direkt ins Sieb gelegt, bevor du den Kaffee einfüllst.
              </p>

              <div className="space-y-4">
                <h5 className="font-semibold text-coffee-primary text-lg">Vorteile:</h5>
                <ul className="space-y-3 text-coffee-primary/80">
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Sorgt für gleichmäßigeren Wasserfluss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Reduziert Channeling (also ungleichmäßige Extraktion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Hält Kaffeepartikel davon ab, das Sieb zu verstopfen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Der Siebträger bleibt nach dem Bezug viel sauberer</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-coffee-secondary/30 rounded-lg">
                  <p className="text-coffee-primary font-semibold">
                    👉 Ideal für alle, die Wert auf eine saubere Maschine und konstante Ergebnisse legen.
                  </p>
                </div>
              </div>
            </div>

            {/* Über dem Kaffeepuck */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-coffee-light">
              <div className="flex items-center gap-3 mb-6">
                <ArrowUp className="w-8 h-8 text-coffee-primary" />
                <h4 className="text-2xl font-bold text-coffee-primary">
                  Papierfilter über dem Kaffeepuck
                </h4>
              </div>
              
              <p className="text-coffee-primary/80 mb-6">
                Wird nach dem Tampen oben auf den Kaffee gelegt, bevor du den Siebträger einspannst.
              </p>

              <div className="space-y-4">
                <h5 className="font-semibold text-coffee-primary text-lg">Vorteile:</h5>
                <ul className="space-y-3 text-coffee-primary/80">
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Schützt die Duschplatte und die Maschine vor Kaffeerückständen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Verhindert, dass der Puck beim Ausspannen aufreißt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-coffee-primary font-bold mt-1">✓</span>
                    <span>Sorgt für gleichmäßigen Druckaufbau von oben</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-coffee-secondary/30 rounded-lg">
                  <p className="text-coffee-primary font-semibold">
                    👉 Perfekt für Baristas, die ihre Maschine schonen und besonders saubere Bezüge möchten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fazit */}
        <div className="bg-gradient-to-r from-coffee-primary to-coffee-dark text-white p-10 rounded-2xl shadow-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">✅ Fazit</h3>
          <p className="text-lg leading-relaxed">
            Egal ob oben, unten – oder beides: Mit einem Papierfilter im Siebträger holst du das Beste aus deinem Espresso heraus. Der Geschmack wird klarer, die Extraktion gleichmäßiger, und du sparst dir einiges an Reinigungsarbeit. Eine kleine Ergänzung mit großem Effekt!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaperFilterInfo;