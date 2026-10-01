import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "../mocks/data/newsData";

const fetchNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch("/api/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  return response.json();
};

const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });
};

export default useNews;