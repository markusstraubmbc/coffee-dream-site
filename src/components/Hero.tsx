import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const images = [
    "/lovable-uploads/69875246-1dc0-4ef2-b360-6621b9d3328d.png", // Black product first
    "/lovable-uploads/0d1142e8-6482-4330-8b31-8ecc2aec79d7.png",
    "/lovable-uploads/0c4b5481-4107-472e-aa09-543a6d23eb5c.png",
    "/lovable-uploads/0e0f3bef-4eec-4e24-aae3-0cddf255fbd3.png",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-coffee-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-coffee-primary">
              Perfektionieren Sie Ihr Kaffeeerlebnis
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Entdecken Sie unsere Premium-Filterbox, entwickelt für den perfekten Espressogenuss. Mit Detailverliebtheit gefertigt für Kaffeeliebhaber, die Wert auf Ordnung legen. Bringen Sie Ihre Kaffeeecke zu neuem Glanz – die eleganten Aufbewahrungsboxen für Papierfilter sorgen für perfekte Ordnung und Sauberkeit an und in Ihrer Kaffeemaschine.
            </p>
          </div>
          <div className="relative">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`Siebträgertraum Filter Box Ansicht ${index + 1}`}
                        className="w-full rounded-lg shadow-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;