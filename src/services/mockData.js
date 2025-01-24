const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    reviews: 1250,
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    popularity: 95
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    rating: 4.6,
    reviews: 850,
    description: "Track your fitness goals with precision. Includes heart rate monitoring, GPS, and 7-day battery life.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500"
    ],
    popularity: 88
  },
  {
    id: 3,
    name: "4K Drone Camera",
    price: 799.99,
    rating: 4.9,
    reviews: 425,
    description: "Capture stunning aerial footage with our 4K drone camera. Features 30-minute flight time and advanced stabilization.",
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
    images: [
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500"
    ],
    popularity: 92
  },
  {
    id: 4,
    name: "Portable Power Bank",
    price: 49.99,
    rating: 4.5,
    reviews: 2100,
    description: "Never run out of power with this 20,000mAh portable charger. Supports fast charging for all devices.",
    image: "https://images.unsplash.com/photo-1609592807597-7e1d57a9378d?w=500",
    images: [
      "https://images.unsplash.com/photo-1609592807597-7e1d57a9378d?w=500",
      "https://images.unsplash.com/photo-1619489646924-b4fce76b2d3e?w=500",
      "https://images.unsplash.com/photo-1547479117-da9abbff3fa0?w=500"
    ],
    popularity: 85
  },
];

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async (sortBy = 'popularity') => {
  await delay(800); // Simulate network delay
  
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return b.popularity - a.popularity;
  });
  
  return sortedProducts;
};

export const fetchProductById = async (id) => {
  await delay(500);
  const product = products.find(p => p.id === parseInt(id));
  if (!product) throw new Error('Product not found');
  return product;
};
