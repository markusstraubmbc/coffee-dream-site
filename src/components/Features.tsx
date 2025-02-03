import { Coffee, Package, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-coffee-secondary/20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          Crafted for Coffee Perfection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Coffee className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Premium Quality</h3>
            <p className="text-coffee-primary/80">
              Handcrafted from premium materials for the perfect espresso experience every time.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Elegant Design</h3>
            <p className="text-coffee-primary/80">
              Sleek and sophisticated design that enhances your coffee preparation ritual.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-coffee-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-coffee-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-primary">Built to Last</h3>
            <p className="text-coffee-primary/80">
              Durable construction ensures your filter box remains a lasting part of your coffee journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;