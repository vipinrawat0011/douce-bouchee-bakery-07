
import React from 'react';
import { Leaf, Clock, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description: 'Only the finest organic and ethically-sourced ingredients make it into our creations.'
  },
  {
    icon: Clock,
    title: 'Traditional Methods',
    description: 'Time-honored techniques passed down through generations of master craftspeople.'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Every product undergoes rigorous quality checks to ensure absolute perfection.'
  },
  {
    icon: Star,
    title: 'Artisan Crafted',
    description: 'Hand-made with love and attention to detail in small, carefully monitored batches.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate mb-3 sm:mb-4">
            Why Choose Douce Bouchée
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover what sets our confections apart in a world of mass-produced sweets
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 p-4 sm:p-6 rounded-2xl hover:bg-cream/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-chocolate/10 to-gold/20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-chocolate" />
              </div>
              
              <h3 className="font-playfair text-lg sm:text-xl font-semibold text-chocolate mb-2 sm:mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center space-x-2 text-gold">
            <div className="w-8 sm:w-12 h-px bg-gold"></div>
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Experience the difference</span>
            <div className="w-8 sm:w-12 h-px bg-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
