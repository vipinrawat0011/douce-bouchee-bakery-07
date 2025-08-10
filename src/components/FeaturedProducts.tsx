
import React from 'react';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: 'Artisan Chocolates',
      description: 'Fine chocolates with unique flavors, handcrafted with premium cocoa.',
      price: 25,
      originalPrice: 35,
      image_url: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=400&auto=format&fit=crop',
      category: 'Chocolates',
      featured: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Gourmet Cookies',
      description: 'Crispy cookies with chocolate chips, nuts and dried fruits.',
      price: 15,
      originalPrice: 20,
      image_url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop',
      category: 'Cookies',
      featured: false,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Fudgy Brownies',
      description: 'Rich dark chocolate brownies, soft in the center with delicate glaze.',
      price: 20,
      originalPrice: 28,
      image_url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop',
      category: 'Brownies',
      featured: true,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Mixed Assortments',
      description: 'Discovery gift boxes blending our finest creations.',
      price: 35,
      originalPrice: 50,
      image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop',
      category: 'Assortments',
      featured: false,
      rating: 4.7
    },
    {
      id: 5,
      name: 'French Macarons',
      description: 'Traditional macarons with classic and original flavors.',
      price: 18,
      originalPrice: 25,
      image_url: 'https://images.unsplash.com/photo-1571506165871-ee72608d3ba4?q=80&w=400&auto=format&fit=crop',
      category: 'Macarons',
      featured: false,
      rating: 4.5
    },
    {
      id: 6,
      name: 'Seasonal Creations',
      description: 'Exclusive products according to seasons and holidays.',
      price: 30,
      originalPrice: 40,
      image_url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop',
      category: 'Seasonal',
      featured: true,
      rating: 4.8
    }
  ];

  const handleWhatsAppOrder = (product) => {
    const WHATSAPP_NUMBER = "15551237938";
    const message = encodeURIComponent(`Hi, I'd like to order: ${product.name} - $${product.price.toFixed(2)}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: 'medium',
      image: product.image_url
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} added to your cart`,
    });
  };

  return (
    <section id="products" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate mb-3 sm:mb-4">
            Featured Delights
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our most beloved creations, crafted with passion and perfected through tradition
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-xl sm:rounded-2xl cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-40 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gold text-chocolate font-medium text-xs sm:text-sm px-3 py-1 rounded-full">
                  {product.category}
                </div>
                
                {/* Hover Actions - Hidden on Mobile */}
                <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-white text-chocolate hover:bg-gold rounded-full" aria-label="View Product">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={(e) => handleWhatsAppOrder(product)} 
                      className="bg-chocolate hover:bg-chocolate-light text-white rounded-full" 
                      aria-label="Order on WhatsApp"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-6">
                <h3 className="font-playfair text-sm sm:text-xl font-semibold text-chocolate mb-1 sm:mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-bold text-chocolate">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button 
                    onClick={(e) => handleWhatsAppOrder(product)} 
                    size="sm" 
                    className="bg-chocolate hover:bg-chocolate-light text-white rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            className="bg-chocolate hover:bg-chocolate-light text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate('/#products')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
