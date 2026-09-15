import axios from "axios";
import type { getProductsQuery, getProductsResponse } from "../types";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export async function getProducts({ limit, skip }: getProductsQuery) {
  const { data } = await api.get<getProductsResponse>("/products", {
    params: { limit, skip },
  });
  return data;
}
