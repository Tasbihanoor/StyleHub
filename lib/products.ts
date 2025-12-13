export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: "men" | "women" | "kids"
  images: string[]
  sizes: string[]
  colors: string[]
  inStock: boolean
  featured: boolean
}

export const products: Product[] = [
  // Men's Products
  {
    id: "men-1",
    name: "Classic Denim Jacket",
    price: 89.99,
    description: "Timeless denim jacket with a modern fit. Perfect for layering in any season.",
    category: "men",
    images: ["/men-denim-jacket.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black"],
    inStock: true,
    featured: true,
  },
  {
    id: "men-2",
    name: "Slim Fit Chinos",
    price: 59.99,
    description: "Comfortable chinos with a modern slim fit. Versatile for work or casual wear.",
    category: "men",
    images: ["/men-chino-pants-beige.jpg"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Black"],
    inStock: true,
    featured: false,
  },
  {
    id: "men-3",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    description: "Soft, breathable cotton tee. Essential wardrobe staple.",
    category: "men",
    images: ["/men-white-cotton-t-shirt.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    inStock: true,
    featured: false,
  },
  {
    id: "men-4",
    name: "Leather Sneakers",
    price: 129.99,
    description: "Handcrafted leather sneakers with premium comfort.",
    category: "men",
    images: ["/men-white-leather-sneakers.jpg"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["White", "Black"],
    inStock: true,
    featured: true,
  },
  {
    id: "men-5",
    name: "Wool Blend Coat",
    price: 199.99,
    description: "Elegant wool blend coat for sophisticated style.",
    category: "men",
    images: ["/men-grey-wool-coat.jpg"],
    sizes: ["M", "L", "XL"],
    colors: ["Grey", "Navy", "Camel"],
    inStock: true,
    featured: false,
  },
  {
    id: "men-6",
    name: "Athletic Joggers",
    price: 49.99,
    description: "Comfortable joggers perfect for workouts or leisure.",
    category: "men",
    images: ["/men-black-joggers.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    inStock: true,
    featured: false,
  },

  // Women's Products
  {
    id: "women-1",
    name: "Floral Summer Dress",
    price: 79.99,
    description: "Beautiful floral dress perfect for summer occasions.",
    category: "women",
    images: ["/women-floral-dress.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Blue", "Floral Pink"],
    inStock: true,
    featured: true,
  },
  {
    id: "women-2",
    name: "High-Waisted Jeans",
    price: 69.99,
    description: "Flattering high-waisted jeans with stretch comfort.",
    category: "women",
    images: ["/women-high-waisted-blue-jeans.jpg"],
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    inStock: true,
    featured: false,
  },
  {
    id: "women-3",
    name: "Silk Blouse",
    price: 89.99,
    description: "Elegant silk blouse for professional or evening wear.",
    category: "women",
    images: ["/women-white-silk-blouse.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Ivory", "Blush"],
    inStock: true,
    featured: true,
  },
  {
    id: "women-4",
    name: "Leather Ankle Boots",
    price: 149.99,
    description: "Stylish ankle boots crafted from genuine leather.",
    category: "women",
    images: ["/women-black-leather-ankle-boots.jpg"],
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black", "Brown"],
    inStock: true,
    featured: false,
  },
  {
    id: "women-5",
    name: "Cashmere Sweater",
    price: 159.99,
    description: "Luxuriously soft cashmere sweater for ultimate comfort.",
    category: "women",
    images: ["/women-beige-cashmere-sweater.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Grey", "Navy"],
    inStock: true,
    featured: true,
  },
  {
    id: "women-6",
    name: "Yoga Leggings",
    price: 54.99,
    description: "High-performance leggings for yoga and fitness.",
    category: "women",
    images: ["/women-black-yoga-leggings.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Purple"],
    inStock: true,
    featured: false,
  },

  // Kids Products
  {
    id: "kids-1",
    name: "Cartoon Print T-Shirt",
    price: 19.99,
    description: "Fun cartoon print tee that kids will love.",
    category: "kids",
    images: ["/kids-cartoon-t-shirt.jpg"],
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Blue", "Red", "Yellow"],
    inStock: true,
    featured: true,
  },
  {
    id: "kids-2",
    name: "Denim Overalls",
    price: 39.99,
    description: "Adorable and durable denim overalls for active kids.",
    category: "kids",
    images: ["/kids-denim-overalls.jpg"],
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Blue Denim"],
    inStock: true,
    featured: false,
  },
  {
    id: "kids-3",
    name: "Winter Puffer Jacket",
    price: 59.99,
    description: "Warm and cozy puffer jacket for cold weather.",
    category: "kids",
    images: ["/kids-red-puffer-jacket.jpg"],
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Red", "Navy", "Pink"],
    inStock: true,
    featured: true,
  },
  {
    id: "kids-4",
    name: "Athletic Shorts",
    price: 24.99,
    description: "Comfortable shorts perfect for sports and play.",
    category: "kids",
    images: ["/placeholder.svg?height=500&width=500"],
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Black", "Grey", "Blue"],
    inStock: true,
    featured: false,
  },
  {
    id: "kids-5",
    name: "Sneakers",
    price: 44.99,
    description: "Durable sneakers with velcro straps for easy wear.",
    category: "kids",
    images: ["/placeholder.svg?height=500&width=500"],
    sizes: ["10", "11", "12", "13", "1"],
    colors: ["Multi-color", "White", "Black"],
    inStock: true,
    featured: false,
  },
  {
    id: "kids-6",
    name: "Hooded Sweatshirt",
    price: 34.99,
    description: "Soft hooded sweatshirt for everyday comfort.",
    category: "kids",
    images: ["/placeholder.svg?height=500&width=500"],
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Grey", "Navy", "Pink"],
    inStock: true,
    featured: true,
  },
]

export function getProductsByCategory(category: "men" | "women" | "kids") {
  return products.filter((p) => p.category === category)
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}
