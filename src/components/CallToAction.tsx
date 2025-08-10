
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CallToAction() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-chocolate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #B76E79 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Indulge?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#D7B899] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the finest artisan confections. Order online for delivery 
            or visit our charming bakery for the full sensory experience.
          </p>

          {/* Action Button */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <Link to={createPageUrl("Products")}>
              <Button className="bg-gold hover:bg-[#B8941F] text-chocolate px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
                <ShoppingBag className="mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Order Online
              </Button>
            </Link>
          </div>

          {/* Special Offer */}
          <div className="inline-block bg-rose-gold rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider mb-1 sm:mb-2">
              Limited Time Offer
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
              Free Delivery on Orders Over $50
            </div>
            <div className="text-xs sm:text-sm text-white/90">
              Valid until the end of this month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
