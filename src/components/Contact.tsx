import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-coffee-secondary/20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-primary">Kontakt</h2>
          <p className="mt-4 text-lg text-coffee-primary/80">
            Haben Sie Fragen? Kontaktieren Sie uns gerne.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-coffee-primary" />
            <span className="text-coffee-primary">info@siebtragertraum.de</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-coffee-primary" />
            <span className="text-coffee-primary">+49 170 2811594</span>
          </div>
          <div className="text-center mt-8">
            <p className="text-coffee-primary/80">
              Ansprechpartner: Marvin Ehrle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;