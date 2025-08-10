
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus, ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');

  const products = [
    {
      id: 1,
      name: 'Artisan Chocolates',
      description: 'Fine chocolates with unique flavors, handcrafted with premium cocoa.',
      longDescription: 'Our signature artisan chocolates are crafted with the finest Belgian cocoa and premium ingredients sourced from around the world. Each piece is hand-molded and decorated with precision, offering a luxurious taste experience that melts perfectly on your palate.',
      price: 25,
      originalPrice: 35,
      image: 'chocolate',
      featured: true,
      rating: 4.8,
      reviews: 124,
      ingredients: ['Premium Belgian Cocoa', 'Madagascar Vanilla', 'Organic Cane Sugar', 'Fresh Cream'],
      sizes: [
        { name: 'small', label: 'Small Box (6 pieces)', price: 25 },
        { name: 'medium', label: 'Medium Box (12 pieces)', price: 45 },
        { name: 'large', label: 'Large Box (24 pieces)', price: 85 }
      ]
    },
    {
      id: 2,
      name: 'Gourmet Cookies',
      description: 'Crispy cookies with chocolate chips, nuts and dried fruits.',
      longDescription: 'Baked fresh daily using our grandmother\'s secret recipe, these gourmet cookies combine the perfect balance of crispy edges and chewy centers. Made with premium butter, organic flour, and the finest chocolate chips.',
      price: 15,
      originalPrice: 20,
      image: 'cookies',
      featured: false,
      rating: 4.6,
      reviews: 89,
      ingredients: ['Organic Flour', 'Premium Butter', 'Dark Chocolate Chips', 'Sea Salt'],
      sizes: [
        { name: 'small', label: 'Half Dozen', price: 15 },
        { name: 'medium', label: 'Dozen', price: 28 },
        { name: 'large', label: 'Two Dozen', price: 50 }
      ]
    },
    {
      id: 3,
      name: 'Fudgy Brownies',
      description: 'Rich dark chocolate brownies, soft in the center with delicate glaze.',
      longDescription: 'Indulgent fudgy brownies made with premium dark chocolate and a hint of espresso. Each brownie is topped with our signature chocolate glaze and optional nuts for the perfect texture contrast.',
      price: 20,
      originalPrice: 28,
      image: 'brownies',
      featured: true,
      rating: 4.9,
      reviews: 156,
      ingredients: ['Dark Chocolate', 'Espresso', 'Premium Butter', 'Free-Range Eggs'],
      sizes: [
        { name: 'small', label: '4 pieces', price: 20 },
        { name: 'medium', label: '9 pieces', price: 42 },
        { name: 'large', label: '16 pieces', price: 75 }
      ]
    },
    {
      id: 4,
      name: 'Mixed Assortments',
      description: 'Discovery gift boxes blending our finest creations.',
      longDescription: 'A curated selection of our most popular items, perfect for gifting or trying multiple flavors. Each box contains a variety of chocolates, cookies, and brownies beautifully arranged.',
      price: 35,
      originalPrice: 50,
      image: 'assortment',
      featured: false,
      rating: 4.7,
      reviews: 203,
      ingredients: ['Variety of Premium Ingredients', 'Seasonal Selections', 'Gift Box Included'],
      sizes: [
        { name: 'small', label: 'Tasting Box', price: 35 },
        { name: 'medium', label: 'Family Box', price: 65 },
        { name: 'large', label: 'Celebration Box', price: 120 }
      ]
    },
    {
      id: 5,
      name: 'Seasonal Creations',
      description: 'Exclusive products according to seasons and holidays.',
      longDescription: 'Limited-time seasonal specialties that celebrate the flavors of each season. From pumpkin spice in fall to peppermint during winter holidays, these exclusive creations are available for a limited time only.',
      price: 30,
      originalPrice: 40,
      image: 'seasonal',
      featured: true,
      rating: 4.8,
      reviews: 167,
      ingredients: ['Seasonal Fruits', 'Holiday Spices', 'Limited Edition Flavors'],
      sizes: [
        { name: 'small', label: 'Sample Pack', price: 30 },
        { name: 'medium', label: 'Holiday Box', price: 55 },
        { name: 'large', label: 'Celebration Pack', price: 95 }
      ]
    },
    {
      id: 6,
      name: 'French Macarons',
      description: 'Traditional macarons with classic and original flavors.',
      longDescription: 'Delicate French macarons made with almond flour and filled with premium ganaches, jams, and buttercreams. Each macaron is carefully aged to achieve the perfect texture and flavor balance.',
      price: 18,
      originalPrice: 25,
      image: 'macarons',
      featured: false,
      rating: 4.5,
      reviews: 134,
      ingredients: ['Almond Flour', 'Premium Ganache', 'Natural Food Coloring', 'Fresh Butter'],
      sizes: [
        { name: 'small', label: '6 Macarons', price: 18 },
        { name: 'medium', label: '12 Macarons', price: 34 },
        { name: 'large', label: '24 Macarons', price: 65 }
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-chocolate mb-4">Product not found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const selectedSizeData = product.sizes.find(size => size.name === selectedSize);
  const currentPrice = selectedSizeData?.price || product.price;

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} (${selectedSizeData?.label}) added to cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} added to your wishlist`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <button onClick={() => navigate('/')} className="hover:text-chocolate transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate('/#products')} className="hover:text-chocolate transition-colors">
              Products
            </button>
            <span>/</span>
            <span className="text-chocolate font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Detail */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-chocolate/10 to-gold/20 rounded-2xl overflow-hidden group">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingBag className="w-24 h-24 text-chocolate/40 mx-auto mb-4" />
                    <p className="font-playfair text-2xl text-chocolate/60">{product.name}</p>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="aspect-square bg-gradient-to-br from-chocolate/5 to-gold/10 rounded-lg border-2 border-gold/20 cursor-pointer hover:border-gold transition-colors">
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-chocolate/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  {product.featured && (
                    <span className="bg-gold text-chocolate px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-3 h-3 inline mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                <h1 className="font-playfair text-4xl font-bold text-chocolate mb-2">{product.name}</h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="font-medium text-chocolate">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="font-playfair text-3xl font-bold text-chocolate">${currentPrice}</span>
                {product.originalPrice > currentPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice > currentPrice && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    Save ${product.originalPrice - currentPrice}
                  </span>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-medium text-chocolate mb-3">Size Options</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.sizes.map((size) => (
                    <label key={size.name} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-gold transition-colors">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="size"
                          value={size.name}
                          checked={selectedSize === size.name}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="text-gold focus:ring-gold"
                        />
                        <span className="font-medium">{size.label}</span>
                      </div>
                      <span className="font-bold text-chocolate">${size.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium text-chocolate mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button onClick={handleAddToCart} className="flex-1 bg-chocolate hover:bg-chocolate/90">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart - ${(currentPrice * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" onClick={handleAddToWishlist}>
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Details */}
              <div className="space-y-4 pt-6 border-t">
                <div>
                  <h3 className="font-medium text-chocolate mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-chocolate mb-2">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span key={index} className="bg-gold/10 text-chocolate px-3 py-1 rounded-full text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
