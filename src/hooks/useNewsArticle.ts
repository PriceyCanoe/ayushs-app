import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "../mocks/data/newsData";

const fetchNewsArticle = async (
  id: string
): Promise<NewsArticle> => {
  const response = await fetch(`/api/news/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch news article");
  }

  return response.json();
};

export const useNewsArticle = (id: string) => {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => fetchNewsArticle(id),
    enabled: !!id,
  });
};