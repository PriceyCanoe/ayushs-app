export type NewsArticle = {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string[];
  image: string;
  author: string;
  date: string;
};

export const newsData: NewsArticle[] = [
  {
    id: "101",
    category: "Technology",
    title: "The Future of Artificial Intelligence",
    description:
      "Artificial intelligence is transforming industries and changing how people work.",
    content: [
      "Artificial intelligence has become one of the most important technological developments of our time.",
      "Businesses are using AI to automate repetitive tasks, analyze information, and improve decision-making.",
      "As AI continues to evolve, responsible development and data privacy remain important considerations.",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400",
    author: "NewsHub Editorial",
    date: "September 24, 2026",
  },
  {
    id: "102",
    category: "Sports",
    title: "Major Sporting Events Draw Global Attention",
    description:
      "Athletes prepare for a series of important international competitions.",
    content: [
      "International sporting events continue to bring athletes and fans together.",
      "Teams are preparing through training, strategy, and competitive fixtures.",
      "Fans around the world are following the latest developments.",
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400",
    author: "Sports Desk",
    date: "September 23, 2026",
  },
  {
    id: "103",
    category: "Business",
    title: "Markets Respond to New Economic Updates",
    description:
      "Investors follow the latest developments in the global economy.",
    content: [
      "Financial markets continue to respond to economic developments.",
      "Investors are monitoring business performance and economic indicators.",
      "Market conditions can change as new information becomes available.",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400",
    author: "Business Desk",
    date: "September 22, 2026",
  },
];