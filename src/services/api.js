import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000
});

export const getProducts = async () => (await api.get("/products?limit=100")).data.products;
export const getProduct = async (id) => (await api.get(`/products/${id}`)).data;