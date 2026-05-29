import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/calculator",
});

export const calculate = async (payload) => {
  return api.post("/calculate", payload);
};

export const getHistories = async () => {
  return api.get("/histories");
};
