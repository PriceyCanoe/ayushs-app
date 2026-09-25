import ProductCard, {type Product } from "./ProductCard";

const products: Product[] = [
  {
    name: "Paracetamol 500mg",
    category: "Pain Relief, Fever",
    price: "₹25",
    unit: "/ strip",
    image: "💊",
  },
  {
    name: "Amoxicillin 500mg",
    category: "Antibiotic",
    price: "₹120",
    unit: "/ strip",
    image: "💊",
  },
  {
    name: "Metformin 500mg",
    category: "Diabetes Care",
    price: "₹80",
    unit: "/ strip",
    image: "💊",
  },
  {
    name: "Vitamin D3 1000 IU",
    category: "Bone & Immunity",
    price: "₹150",
    unit: "/ bottle",
    image: "🧴",
  },
  {
    name: "Cetirizine 10mg",
    category: "Allergy Relief",
    price: "₹70",
    unit: "/ strip",
    image: "💊",
  },
];

const PopularMedicines = () => {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-slate-800">
            Popular Medicines
          </h2>

          <a
            href="#"
            className="text-sm font-semibold text-emerald-500"
          >
            View All →
          </a>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default PopularMedicines;