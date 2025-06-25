
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, date, slug, readTime }: BlogCardProps) => {
  return (
    <article className="group border-b border-gray-100 pb-8 mb-8 last:border-b-0">
      <Link to={`/post/${slug}`} className="block">
        <h2 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors mb-3">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <time>{date}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
