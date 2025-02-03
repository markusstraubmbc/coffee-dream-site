import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-coffee-secondary/20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-primary">Get in Touch</h2>
          <p className="mt-4 text-lg text-coffee-primary/80">
            We'd love to hear from you. Contact us for any inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-coffee-primary" />
              <span className="text-coffee-primary">contact@siebtragertraum.de</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-coffee-primary" />
              <span className="text-coffee-primary">+49 123 456 789</span>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-coffee-primary/20 focus:outline-none focus:ring-2 focus:ring-coffee-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-coffee-primary/20 focus:outline-none focus:ring-2 focus:ring-coffee-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-coffee-primary/20 focus:outline-none focus:ring-2 focus:ring-coffee-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-coffee-primary text-coffee-secondary py-2 px-6 rounded-md hover:bg-coffee-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;