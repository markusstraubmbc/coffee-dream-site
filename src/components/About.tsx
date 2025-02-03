const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-coffee-primary">Our Story</h2>
            <p className="text-lg text-coffee-primary/80">
              Born from a passion for perfect espresso, Siebträgertraum began in early 2024 with a simple mission: to enhance the coffee experience for enthusiasts everywhere.
            </p>
            <p className="text-lg text-coffee-primary/80">
              Our filter box represents the culmination of meticulous design and craftsmanship, created by coffee lovers for coffee lovers.
            </p>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/8f7a2f96-7926-4fd1-8370-15478c355ce8.png"
              alt="Our Product"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;