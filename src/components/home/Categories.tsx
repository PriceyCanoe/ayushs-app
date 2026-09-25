const categories = [
  { icon: "💊", name: "Pain Relief" },
  { icon: "🌡️", name: "Fever & Cold" },
  { icon: "🫃", name: "Digestive Health" },
  { icon: "💉", name: "Diabetes Care" },
  { icon: "❤️", name: "Heart Care" },
  { icon: "🌿", name: "Vitamins & Supplements" },
  { icon: "🧴", name: "Skin Care" },
  { icon: "👶", name: "Baby Care" },
];

const Categories = () => {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-slate-800">
            Shop by Category
          </h2>

          <a
            href="#"
            className="text-sm font-semibold text-emerald-500"
          >
            View All →
          </a>

        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

          {categories.map((category) => (
            <button
              key={category.name}
              className="group rounded-xl bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md"
            >

              <div className="text-3xl transition group-hover:scale-110">
                {category.icon}
              </div>

              <p className="mt-3 text-xs font-semibold leading-4 text-slate-700">
                {category.name}
              </p>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;