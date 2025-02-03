const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-coffee-primary">Unsere Geschichte</h2>
            <p className="text-lg text-coffee-primary/80">
              Geboren aus der Leidenschaft für perfekten Espresso, begann Siebträgertraum Anfang 2024 mit einer einfachen Mission: das Kaffeeerlebnis für Enthusiasten zu verbessern.
            </p>
            <p className="text-lg text-coffee-primary/80">
              Unsere Filterbox repräsentiert den Höhepunkt sorgfältigen Designs und Handwerkskunst, geschaffen von Kaffeeliebhabern für Kaffeeliebhaber.
            </p>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/8f7a2f96-7926-4fd1-8370-15478c355ce8.png"
              alt="Unser Produkt"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;