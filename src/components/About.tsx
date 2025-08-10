
import { Users, Clock, MapPin, Utensils } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Years of experience', value: '15+' },
    { icon: Users, label: 'Satisfied customers', value: '2000+' },
    { icon: Utensils, label: 'Artisan recipes', value: '50+' },
    { icon: MapPin, label: 'Monthly deliveries', value: '500+' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title text-left mb-6">Our Story</h2>
            <div className="space-y-6 font-inter text-foreground leading-relaxed">
              <p>
                <strong className="text-chocolate">Douce Bouchée</strong> was born from a passion for 
                French culinary art and love for quality craftsmanship. For over 15 years, we have been 
                perpetuating pastry traditions while bringing a modern touch to our creations.
              </p>
              <p>
                Each product is made with carefully selected ingredients: premium Belgian chocolate, 
                French AOP butter, Madagascar vanilla and roasted nuts. Our artisan workshop respects 
                traditional methods to offer you authentic and intense flavors.
              </p>
              <p>
                Our commitment: to make you discover or rediscover the pleasure of exceptional 
                French pastry, prepared with love and expertise.
              </p>
            </div>

            <div className="mt-8">
              <button className="btn-secondary">
                Discover Our Workshop
              </button>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="space-y-8">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-chocolate/20 to-gold/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <Utensils className="w-24 h-24 text-chocolate/40 mx-auto mb-4" />
                <p className="font-playfair text-2xl text-chocolate/60">Our Workshop</p>
                <p className="font-inter text-chocolate/40">Tradition & Passion</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gold/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-chocolate/20 rounded-full blur-xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-chocolate/10 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-chocolate" />
                  </div>
                  <div className="font-playfair text-2xl font-bold text-chocolate mb-1">
                    {stat.value}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
