import { Coffee, Package, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-coffee-secondary/20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          Entwickelt für Kaffeeperfektionisten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Coffee className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Premium Qualität</h3>
            <p className="text-coffee-primary/80">
              Handgefertigt aus hochwertigen Materialien für das perfekte Espresso-Erlebnis.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Elegantes Design</h3>
            <p className="text-coffee-primary/80">
              Schlichtes und sophistiziertes Design, das Ihr Kaffeeritual bereichert.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Langlebig</h3>
            <p className="text-coffee-primary/80">
              Robuste Konstruktion garantiert, dass Ihre Filterbox ein dauerhafter Begleiter bleibt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;