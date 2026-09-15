import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

interface getProductsQuery {
  limit: number;
  skip: number;
}
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}
interface getProductsResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export async function getProducts({ limit, skip }: getProductsQuery) {
  const { data } = await api.get<getProductsResponse>("/products", {
    params: { limit, skip },
  });
  return data;
}
