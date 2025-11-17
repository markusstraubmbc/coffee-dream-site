import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Start", section: "hero" },
    { name: "Funktionen", section: "features" },
    { name: "Jetzt kaufen", section: "amazon", isExternal: true, url: "https://amzn.eu/d/ffVGgZh" },
    { name: "Wissenswertes", section: "paper-filter-info" },
    { name: "Über uns", section: "about" },
    { name: "Kontakt", section: "contact" },
  ];

  const scrollToSection = (sectionId: string, url?: string, isExternal?: boolean) => {
    if (isExternal && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span onClick={() => scrollToSection('hero')} className="text-coffee-primary font-bold text-xl cursor-pointer">
              Siebträgertraum
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section, item.url, item.isExternal)}
                className="text-coffee-primary hover:text-coffee-light transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-primary hover:text-coffee-light transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section, item.url, item.isExternal)}
                className="block w-full text-left px-3 py-2 text-coffee-primary hover:text-coffee-light transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;