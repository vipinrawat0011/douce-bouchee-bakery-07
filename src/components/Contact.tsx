
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Gourmandise Street', '75001 Paris, France']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+33 1 42 36 85 12']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@doucebouchee.fr']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 8am-7pm', 'Sunday: 9am-5pm']
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question? A special order? We're here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-chocolate/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-chocolate" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-chocolate mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-inter text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-lg font-semibold text-chocolate mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-chocolate/10 rounded-lg flex items-center justify-center hover:bg-chocolate hover:text-cream transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-chocolate/10 rounded-lg flex items-center justify-center hover:bg-chocolate hover:text-cream transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video bg-gradient-to-br from-chocolate/10 to-gold/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-chocolate/40 mx-auto mb-2" />
                <p className="font-playfair text-lg text-chocolate/60">Our Store</p>
                <p className="font-inter text-chocolate/40 text-sm">Interactive map</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-sm">
            <h3 className="font-playfair text-2xl font-semibold text-chocolate mb-6">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-chocolate/20 focus:border-chocolate outline-none transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-chocolate/20 focus:border-chocolate outline-none transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-chocolate/20 focus:border-chocolate outline-none transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-chocolate/20 focus:border-chocolate outline-none transition-colors duration-200">
                  <option>Custom order</option>
                  <option>Product information</option>
                  <option>Delivery</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-chocolate/20 focus:border-chocolate outline-none transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
