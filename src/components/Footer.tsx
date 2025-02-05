const Footer = () => {
  return (
    <footer className="bg-coffee-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm">© 2024 Siebträgertraum. Alle Rechte vorbehalten.</span>
          </div>
          <div className="flex space-x-6">
            <a href="/impressum" className="text-sm hover:underline">Impressum</a>
            <a href="/datenschutz" className="text-sm hover:underline">Datenschutzerklärung</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;