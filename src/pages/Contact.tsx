
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 fade-in">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold text-chocolate mb-4">
              Visit Our Sweet Haven
            </h1>
            <p className="text-base sm:text-lg text-rose-gold max-w-2xl mx-auto">
              Come experience our artisan bakery in person, or get in touch with any questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Store Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2089&auto=format&fit=crop"
                  alt="Douce Bouchée Bakery"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                  <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Our Bakery</h3>
                  <p className="text-[#D7B899] text-sm sm:text-base">Where magic happens daily</p>
                </div>
              </div>

              {/* Contact Cards - Ensuring 2x2 grid layout */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-0 shadow-lg rounded-2xl hover-lift">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                       <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-rose-gold" />
                    </div>
                    <h3 className="font-semibold text-chocolate mb-2 text-sm sm:text-base">Location</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Haibowal Kalan<br />
                      Ludhiana, Punjab
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl hover-lift">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />
                    </div>
                    <h3 className="font-semibold text-chocolate mb-2 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      +91 7711000776
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl hover-lift">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-chocolate/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-chocolate" />
                    </div>
                    <h3 className="font-semibold text-chocolate mb-2 text-sm sm:text-base">Hours</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Mon-Sat: 7AM-8PM<br />
                      Sunday: 8AM-6PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl hover-lift">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-rose-gold" />
                    </div>
                    <h3 className="font-semibold text-chocolate mb-2 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      douchbouchee1@gmail.com
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Special Note */}
              <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-rose-gold/5 to-gold/5">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-chocolate mb-3">
                    Visit Us Today
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Experience the aroma of fresh-baked goods, watch our artisans at work, 
                    and enjoy complimentary tastings of our newest creations. Free parking 
                    available behind the store.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
                <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-chocolate to-[#5A3E37] text-white p-4 sm:p-6 lg:p-8">
                  <CardTitle className="font-playfair text-xl sm:text-2xl font-bold text-center">
                    Get in Touch
                  </CardTitle>
                  <p className="text-center text-[#D7B899] mt-2 text-sm sm:text-base">
                    We'd love to hear from you
                  </p>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-chocolate mb-2">
                          Your Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="border-0 bg-[#FFF8F0] focus:ring-2 focus:ring-rose-gold rounded-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-chocolate mb-2">
                          Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="border-0 bg-[#FFF8F0] focus:ring-2 focus:ring-rose-gold rounded-full"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Phone Number (Optional)
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="border-0 bg-[#FFF8F0] focus:ring-2 focus:ring-rose-gold rounded-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your inquiry, special orders, or feedback..."
                        rows={5}
                        className="border-0 bg-[#FFF8F0] focus:ring-2 focus:ring-rose-gold rounded-2xl resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-rose-gold hover:bg-[#A55A6B] text-white py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl group"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-gold/10 rounded-2xl">
                    <p className="text-sm text-chocolate text-center">
                      <strong>Custom Orders:</strong> Need something special? We love creating 
                      custom confections for weddings, corporate events, and special occasions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
