import { Link, useParams } from "react-router-dom";
import { useNewsArticle } from "../hooks/useNewsArticle";

const NewsDetailPage = () => {
  const { id } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useNewsArticle(id ?? "");

  if (isLoading) {
    return (
      <div className="py-20 text-center text-gray-600">
        Loading article...
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">
          Article not found
        </h2>

        <Link to="/" className="mt-4 inline-block text-red-600">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link to="/" className="text-2xl font-bold text-red-600">
            NewsHub
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{article.category}</span>
        </div>

        {/* Category */}
        <span className="rounded bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
          {article.category.toUpperCase()}
        </span>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          {article.title}
        </h1>

        {/* Description */}
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {article.description}
        </p>

        {/* Author */}
        <div className="mt-6 border-y py-5">
          <p className="font-semibold text-gray-900">
            By {article.author}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {article.date} · 5 min read
          </p>
        </div>

        {/* Image */}
        <img
          src={article.image}
          alt={article.title}
          className="mt-8 h-64 w-full rounded-xl object-cover md:h-[450px]"
        />

        {/* Article Content */}
        <article className="mt-10 space-y-6 text-lg leading-8 text-gray-700">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        {/* Back */}
        <div className="mt-12 border-t pt-6">
          <Link
            to="/"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            ← Back to Homepage
          </Link>
        </div>

      </main>

      <footer className="mt-12 bg-gray-900 py-8 text-center text-sm text-gray-400">
        © 2026 NewsHub. All rights reserved.
      </footer>
    </div>
  );
};

export default NewsDetailPage;
