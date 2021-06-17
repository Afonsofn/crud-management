import axios from "axios";

const TOKEN = "826dc7db2385435aa031c97b35792220"

export const api = axios.create({ // Setting base URL
  baseURL: `https://crudcrud.com/api/${TOKEN}`
})