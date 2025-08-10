
export interface TestimonialData {
  id: number;
  customer_name: string;
  content: string;
  rating: number;
  featured?: boolean;
  created_date?: string;
}

export class Testimonial {
  static async filter(criteria: { featured?: boolean }): Promise<TestimonialData[]> {
    // Mock data for now - replace with actual Supabase integration
    const mockTestimonials: TestimonialData[] = [
      {
        id: 1,
        customer_name: "Sarah Johnson",
        content: "The most incredible chocolates I've ever tasted! Each bite is pure perfection.",
        rating: 5,
        featured: true,
        created_date: "2024-01-15"
      },
      {
        id: 2,
        customer_name: "Mike Chen",
        content: "Douce Bouchée has ruined all other bakeries for me. Nothing compares to their artistry.",
        rating: 5,
        featured: true,
        created_date: "2024-01-14"
      },
      {
        id: 3,
        customer_name: "Emily Rodriguez",
        content: "From the moment you walk in, you know you're somewhere special. The brownies are divine!",
        rating: 5,
        featured: true,
        created_date: "2024-01-13"
      }
    ];

    if (criteria.featured !== undefined) {
      return mockTestimonials.filter(testimonial => testimonial.featured === criteria.featured);
    }
    return mockTestimonials;
  }
}
