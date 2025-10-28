export const categories =  [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Automotive"
]

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}

export const productsData: Product[] = [
  { id: 1, name: "Shirt", image: "product.png", price: 1200, rating: 4.5, category: "Men" },
  { id: 2, name: "T-Shirt", image: "product.png", price: 800, rating: 4.2, category: "Men" },
  { id: 3, name: "Jeans", image: "product.png", price: 1800, rating: 4.6, category: "Men" },
  { id: 4, name: "Jacket", image: "product.png", price: 2500, rating: 4.7, category: "Men" },
  { id: 5, name: "Sneakers", image: "product.png", price: 3200, rating: 4.8, category: "Shoes" },
  { id: 6, name: "Watch", image: "product.png", price: 2800, rating: 4.9, category: "Accessories" },
  { id: 7, name: "Backpack", image: "product.png", price: 1500, rating: 4.4, category: "Bags" },
  { id: 8, name: "Sunglasses", image: "product.png", price: 1000, rating: 4.3, category: "Accessories" },
  { id: 9, name: "Hat", image: "product.png", price: 700, rating: 4.0, category: "Men" },
  { id: 10, name: "Perfume", image: "product.png", price: 2300, rating: 4.8, category: "Beauty" },
  { id: 11, name: "Wallet", image: "product.png", price: 900, rating: 4.1, category: "Accessories" },
  { id: 12, name: "Belt", image: "product.png", price: 850, rating: 4.2, category: "Accessories" },
  { id: 13, name: "Hoodie", image: "product.png", price: 1600, rating: 4.5, category: "Men" },
  { id: 14, name: "Scarf", image: "product.png", price: 600, rating: 4.0, category: "Women" },
  { id: 15, name: "Blazer", image: "product.png", price: 3000, rating: 4.6, category: "Men" },
  { id: 16, name: "Shorts", image: "product.png", price: 900, rating: 4.1, category: "Men" },
  { id: 17, name: "Socks", image: "product.png", price: 300, rating: 3.9, category: "Men" },
  { id: 18, name: "Suit", image: "product.png", price: 5500, rating: 4.9, category: "Men" },
  { id: 19, name: "Tie", image: "product.png", price: 500, rating: 4.0, category: "Accessories" },
  { id: 20, name: "Boots", image: "product.png", price: 2800, rating: 4.7, category: "Shoes" },
];
