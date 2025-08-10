
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: 'Artisan Chocolates',
      description: 'Fine chocolates with unique flavors, handcrafted with premium cocoa.',
      price: 'From ₹2000',
      basePrice: 2000,
      originalPrice: 2800,
      image: 'chocolate',
      featured: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Gourmet Cookies',
      description: 'Crispy cookies with chocolate chips, nuts and dried fruits.',
      price: 'From ₹1200',
      basePrice: 1200,
      originalPrice: 1600,
      image: 'cookies',
      featured: false,
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'Fudgy Brownies',
      description: 'Rich dark chocolate brownies, soft in the center with delicate glaze.',
      price: 'From ₹1600',
      basePrice: 1600,
      originalPrice: 2240,
      image: 'brownies',
      featured: true,
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: 'Mixed Assortments',
      description: 'Discovery gift boxes blending our finest creations.',
      price: 'From ₹2800',
      basePrice: 2800,
      originalPrice: 4000,
      image: 'assortment',
      featured: false,
      rating: 4.7,
      reviews: 203
    },
    {
      id: 5,
      name: 'Seasonal Creations',
      description: 'Exclusive products according to seasons and holidays.',
      price: 'Variable pricing',
      basePrice: 2400,
      originalPrice: 3200,
      image: 'seasonal',
      featured: true,
      rating: 4.8,
      reviews: 167
    },
    {
      id: 6,
      name: 'French Macarons',
      description: 'Traditional macarons with classic and original flavors.',
      price: 'From ₹1440',
      basePrice: 1440,
      originalPrice: 2000,
      image: 'macarons',
      featured: false,
      rating: 4.5,
      reviews: 134
    }
  ];

  const handleQuickAdd = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.basePrice,
      size: 'medium',
      image: product.image
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} added to your cart`,
    });
  };

  const handleAddToWishlist = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to Wishlist",
      description: `${product.name} added to your wishlist`,
    });
  };

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Delights</h2>
          <p className="section-subtitle">
            A refined selection of artisanal pastries, created with passion and French craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.featured && (
                <div className="absolute top-4 left-4 bg-gold text-chocolate px-3 py-1 rounded-full text-sm font-medium z-10">
                  <Star className="w-3 h-3 inline mr-1" />
                  Popular
                </div>
              )}
              
              {/* Sale Badge */}
              {product.originalPrice > product.basePrice && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                  Save ₹{product.originalPrice - product.basePrice}
                </div>
              )}
              
              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-chocolate/10 to-gold/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingBag className="w-16 h-16 text-chocolate/40 mx-auto mb-2" />
                    <p className="font-playfair text-lg text-chocolate/60">{product.name}</p>
                  </div>
                </div>
                
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-chocolate/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="bg-white text-chocolate hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-transform duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${product.id}`);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-white/90 hover:bg-white transform scale-90 group-hover:scale-100 transition-transform duration-200"
                      onClick={(e) => handleQuickAdd(product, e)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-white/90 hover:bg-white transform scale-90 group-hover:scale-100 transition-transform duration-200"
                      onClick={(e) => handleAddToWishlist(product, e)}
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  {product.name}
                </h3>
                <p className="font-inter text-muted-foreground mb-2 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    Made In India 🇮🇳
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-playfair text-lg font-semibold text-chocolate">
                      {product.price}
                    </span>
                    {product.originalPrice > product.basePrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button 
                    className="font-inter text-sm text-chocolate hover:text-chocolate-light transition-colors duration-200 font-medium opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            className="btn-primary"
            onClick={() => navigate('/#products')}
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
