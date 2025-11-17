import { Coffee, Package, Shield, Paintbrush } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-coffee-secondary/20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          Entwickelt für Kaffeeperfektionisten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Coffee className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Premium Qualität</h3>
            <p className="text-coffee-primary/80">
              Aus hochwertigen Materialien gefertigt für das perfekte Espresso-Erlebnis.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Elegantes Design</h3>
            <p className="text-coffee-primary/80">
              Schlichtes und modernes Design, das Ihr Kaffeeritual bereichert.
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
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Paintbrush className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Individualisierung</h3>
            <p className="text-coffee-primary/80">
              Personalisieren Sie Ihre Filterbox mit individuellen Gravuren - perfekt für Ihr Café oder als besonderes Geschenk.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/d80ad383-49e3-4419-a9dd-96cdd6b2b76d.png"
              alt="Personalisierte Gravur Barista"
              className="rounded-lg shadow-xl w-48"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/3a21772d-d686-4f48-8a44-66f30d22a464.png"
              alt="Personalisierte Gravur Kaffeebohnen"
              className="rounded-lg shadow-xl w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;