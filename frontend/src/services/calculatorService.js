import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const calculate = async (payload) => {
  return api.post("/calculate", payload);
};
