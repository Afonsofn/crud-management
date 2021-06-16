import axios from "axios";

const TOKEN = "d8b37dc774c74523b7d332be7e1bc1ba"

export const api = axios.create({ // Setting base URL
  baseURL: `https://crudcrud.com/api/${TOKEN}`
})