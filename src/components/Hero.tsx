import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-coffee-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-coffee-primary">
              Elevate Your Coffee Experience
            </h1>
            <p className="text-xl text-coffee-primary/80">
              Discover our premium filter box, designed for the perfect espresso every time.
              Handcrafted with precision for coffee enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-coffee-primary text-coffee-secondary rounded-md hover:bg-coffee-dark transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative animate-float">
            <img
              src="/lovable-uploads/8f7a2f96-7926-4fd1-8370-15478c355ce8.png"
              alt="Siebträgertraum Filter Box"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;