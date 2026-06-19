import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

interface Article {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

interface ArticlesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Article[];
}

export const fetchfriends = async () => {
  const response = await axios.get("/friends");
  return response;
};

export const fetchnews = async () => {
  const response = await axios.get<ArticlesResponse>("/news");
  return response;
};
