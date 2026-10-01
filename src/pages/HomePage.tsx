import Navbar from "../components/Navbar";
import BreakingNews from "../components/BreakingNews";
import FeaturedArticle from "../components/FeaturedArticle";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";

import useNews from "../hooks/useNews";

const HomePage = () => {
  const { data: news, isLoading, isError } = useNews();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <BreakingNews />

      <main>
        <FeaturedArticle />

        <section className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="mb-7 text-2xl font-bold text-gray-900">
            Latest News
          </h2>

          {isLoading && (
            <p className="text-gray-500">Loading news...</p>
          )}

          {isError && (
            <p className="text-red-600">
              Failed to load news.
            </p>
          )}

          {news && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;