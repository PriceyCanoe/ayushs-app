import { http, HttpResponse } from "msw";
import { newsData } from "./data/newsData";

export const handlers = [
  // Get all news
  http.get("/api/news", () => {
    return HttpResponse.json(newsData);
  }),

  // Get one article by ID
  http.get("/api/news/:id", ({ params }) => {
    const article = newsData.find(
      (news) => news.id === params.id
    );

    if (!article) {
      return HttpResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json(article);
  }),
];