import axios from "axios";

const http = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/",
  headers: { "Content-Type": "application/json", "X-Api-Key": "4de5e85c-9084-435b-9fff-0a7202c6703b" },
});

export default http;
