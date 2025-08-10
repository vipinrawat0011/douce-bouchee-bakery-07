
export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  available: boolean;
  featured?: boolean;
  created_date?: string;
}

export class Product {
  static async list(sortBy?: string): Promise<ProductData[]> {
    // Mock data for now - replace with actual Supabase integration
    return [
      {
        id: 1,
        name: "Dark Chocolate Truffles",
        description: "Rich, velvety dark chocolate truffles with a smooth ganache center",
        price: 1999,
        category: "chocolates",
        image_url: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=2070&auto=format&fit=crop",
        available: true,
        featured: true,
        created_date: "2024-01-15"
      },
      {
        id: 2,
        name: "Chocolate Chip Cookies",
        description: "Classic homemade cookies with premium chocolate chips",
        price: 1519,
        category: "cookies",
        image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2064&auto=format&fit=crop",
        available: true,
        featured: true,
        created_date: "2024-01-14"
      },
      {
        id: 3,
        name: "Fudge Brownies",
        description: "Decadent fudge brownies with a perfect chewy texture",
        price: 1839,
        category: "brownies",
        image_url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2074&auto=format&fit=crop",
        available: true,
        featured: true,
        created_date: "2024-01-13"
      },
      {
        id: 4,
        name: "Seasonal Macarons",
        description: "Delicate French macarons with seasonal flavors",
        price: 2639,
        category: "seasonal",
        image_url: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=2070&auto=format&fit=crop",
        available: true,
        featured: false,
        created_date: "2024-01-12"
      },
      {
        id: 5,
        name: "White Chocolate Cookies",
        description: "Soft cookies with white chocolate chunks and vanilla",
        price: 1599,
        category: "cookies",
        image_url: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=2070&auto=format&fit=crop",
        available: false,
        featured: false,
        created_date: "2024-01-11"
      },
      {
        id: 6,
        name: "Milk Chocolate Collection",
        description: "Assorted milk chocolate pieces with various fillings",
        price: 2319,
        category: "chocolates",
        image_url: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2064&auto=format&fit=crop",
        available: true,
        featured: false,
        created_date: "2024-01-10"
      }
    ];
  }

  static async filter(criteria: { featured?: boolean }): Promise<ProductData[]> {
    const allProducts = await this.list();
    if (criteria.featured !== undefined) {
      return allProducts.filter(product => product.featured === criteria.featured);
    }
    return allProducts;
  }
}
