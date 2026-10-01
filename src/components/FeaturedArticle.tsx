const FeaturedArticle = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200"
          alt="City skyline"
          className="h-72 w-full rounded-xl object-cover md:h-96"
        />

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-red-600">
            World News
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Global leaders meet to discuss climate change and future action
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Leaders from around the world gather to discuss environmental
            challenges, sustainability, and plans for the future.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            By NewsHub Editorial · September 24, 2026
          </p>

          <button className="mt-6 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
            Read Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;