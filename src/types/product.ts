export interface Product {
  id: number;   // ✅ change this
  name: string;
  price: number;
  image: string;
  status: "active" | "inactive";
}