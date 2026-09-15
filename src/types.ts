export interface getProductsQuery {
  limit: number;
  skip: number;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}
export interface getProductsResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}
