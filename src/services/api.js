import axios from "axios";

const TOKEN = "aa0a7403e8e148e7acbc6bf277d97db5"

export const api = axios.create({ // Setting base URL
  baseURL: `https://crudcrud.com/api/${TOKEN}`
})