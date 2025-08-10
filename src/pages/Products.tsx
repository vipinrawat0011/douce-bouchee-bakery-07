import React, { useState, useEffect } from 'react';
import { Product } from '@/entities/Product';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, MessageSquare, Search, Filter } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// TODO: Replace with your actual WhatsApp number including country code (e.g., 15551234567)
const WHATSAPP_NUMBER = "15551237938";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchQuery, categoryFilter]);

  const loadProducts = async () => {
    try {
      const data = await Product.list('-created_date');
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
    setLoading(false);
  };

  const filterProducts = () => {
    let filtered = products;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    setFilteredProducts(filtered);
  };

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(`Hi, I'd like to order: ${product.name} - $${product.price.toFixed(2)}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="h-64 sm:h-96 bg-[#D7B899]/20 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 fade-in">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold text-chocolate mb-3 sm:mb-4">
            Our Artisan Collection
          </h1>
          <p className="text-base sm:text-lg text-rose-gold max-w-2xl mx-auto px-4">
            Discover our complete range of handcrafted chocolates, cookies, and brownies
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 sm:pl-10 border-0 bg-[#FFF8F0] focus:ring-2 focus:ring-rose-gold rounded-full text-sm sm:text-base"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="border-0 bg-[#FFF8F0] focus:ring-2 focus:ring-rose-gold rounded-full text-sm sm:text-base">
                <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="chocolates">Chocolates</SelectItem>
                <SelectItem value="cookies">Cookies</SelectItem>
                <SelectItem value="brownies">Brownies</SelectItem>
                <SelectItem value="seasonal">Seasonal</SelectItem>
              </SelectContent>
            </Select>

            {/* Results Count */}
            <div className="flex items-center justify-center md:justify-end">
              <span className="text-gray-600 text-sm sm:text-base">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover-lift bg-white rounded-xl sm:rounded-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-40 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gold text-chocolate font-medium capitalize text-xs sm:text-sm">
                  {product.category}
                </Badge>

                {/* Availability Badge */}
                {!product.available && (
                  <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white text-xs sm:text-sm">
                    Sold Out
                  </Badge>
                )}

                {/* Hover Actions - Hidden on Mobile */}
                <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Link to={createPageUrl(`Product/${product.id}`)}>
                      <Button size="icon" className="bg-white text-chocolate hover:bg-gold rounded-full" aria-label="View Product">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button 
                      size="icon" 
                      onClick={() => handleWhatsAppOrder(product)}
                      className="bg-rose-gold hover:bg-[#A55A6B] text-white rounded-full"
                      disabled={!product.available}
                      aria-label="Order on WhatsApp"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-3 sm:p-6">
                <h3 className="font-playfair text-sm sm:text-lg font-semibold text-chocolate mb-1 sm:mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-rose-gold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button 
                    size="sm" 
                    onClick={() => handleWhatsAppOrder(product)}
                    className="bg-chocolate hover:bg-[#3E2A26] text-white rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                    disabled={!product.available}
                  >
                    {product.available ? 'Buy Now' : 'Sold Out'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-16 sm:py-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-[#D7B899]/20 rounded-full flex items-center justify-center">
              <Search className="h-10 w-10 sm:h-12 sm:w-12 text-[#D7B899]" />
            </div>
            <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-chocolate mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="bg-rose-gold hover:bg-[#A55A6B] text-white rounded-full"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
