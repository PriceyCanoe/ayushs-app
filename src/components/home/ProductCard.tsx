export interface Product {
  name: string;
  category: string;
  price: string;
  unit: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="flex h-48 items-center justify-center bg-slate-50">

        <div className="text-7xl transition group-hover:scale-110">
          {product.image}
        </div>

      </div>

      {/* Details */}
      <div className="p-4">

        <h3 className="font-semibold text-slate-800">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {product.category}
        </p>

        <div className="mt-3 flex items-center gap-1">

          <span className="text-lg font-bold text-slate-800">
            {product.price}
          </span>

          <span className="text-sm text-slate-500">
            {product.unit}
          </span>

        </div>

        <button className="mt-4 w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600">
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;