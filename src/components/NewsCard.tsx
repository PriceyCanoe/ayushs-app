import { Link } from "react-router-dom";

type NewsCardProps = {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
};

const NewsCard = ({
  id,
  image,
  category,
  title,
  description,
}: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`} className="block h-full">
      <article className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-xl border bg-white transition hover:shadow-md">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />

        <div className="flex flex-1 flex-col p-5">
          <span className="text-xs font-bold uppercase text-red-600">
            {category}
          </span>

          <h3 className="mt-2 text-lg font-bold text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>

          <p className="mt-auto pt-4 text-sm font-semibold text-red-600">
            Read More →
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;