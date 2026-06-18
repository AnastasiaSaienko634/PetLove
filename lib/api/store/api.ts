import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const fetchfriends = async () => {
  const response = await axios.get("/friends");
  return response;
};
