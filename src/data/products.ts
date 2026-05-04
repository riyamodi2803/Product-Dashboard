import type { Product } from "../types/product";

export const productsData: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: 100000 + i,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  status: i % 2 === 0 ? "active" : "inactive",
  image: `https://picsum.photos/60?random=${i}`,
  category: i % 2 === 0 ? "electronics" : "fashion",
}));