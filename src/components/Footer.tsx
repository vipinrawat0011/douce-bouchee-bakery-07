
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Douce Bouchée</h3>
            <p className="font-inter text-cream/80 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
              The art of French pastry, with passion and artisanal know-how for over 15 years.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current" />
              <span>in Paris</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-base sm:text-lg font-semibold mb-2 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 font-inter text-xs sm:text-sm">
              <li><a href="#home" className="text-cream/80 hover:text-gold transition-colors duration-200">Home</a></li>
              <li><a href="#products" className="text-cream/80 hover:text-gold transition-colors duration-200">Our Products</a></li>
              <li><a href="#about" className="text-cream/80 hover:text-gold transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="text-cream/80 hover:text-gold transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors duration-200">Special Orders</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors duration-200">Delivery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-base sm:text-lg font-semibold mb-2 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 font-inter text-xs sm:text-sm">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-cream/80">
                  <div>123 Gourmandise Street</div>
                  <div>75001 Paris, France</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                <span className="text-cream/80">+33 1 42 36 85 12</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                <span className="text-cream/80">contact@doucebouchee.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="font-inter text-cream/60 text-xs sm:text-sm">
            © 2024 Douce Bouchée. All rights reserved. | 
            <a href="#" className="hover:text-gold transition-colors duration-200 ml-1">Legal notice</a> | 
            <a href="#" className="hover:text-gold transition-colors duration-200 ml-1">Privacy policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
