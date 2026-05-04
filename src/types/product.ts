export interface Product {
  id: number;   
  name: string;
  price: number;
  image: string;
  status: "active" | "inactive";
  category: string; 
}