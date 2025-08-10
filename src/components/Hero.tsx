
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[75vh] md:h-[85vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(78, 52, 46, 0.4), rgba(78, 52, 46, 0.4)), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 fade-in">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
          Indulge in Sweet
          <span className="block text-gold">Perfection</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-[#D7B899] font-light leading-relaxed max-w-2xl mx-auto px-2">
          Handcrafted artisan chocolates, cookies, and brownies made with love and the finest ingredients
        </p>
        
        <div className="flex justify-center">
          <Link to={createPageUrl("Products")} className="w-full sm:w-auto">
            <Button className="bg-rose-gold hover:bg-[#A55A6B] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 group w-full sm:w-auto">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
