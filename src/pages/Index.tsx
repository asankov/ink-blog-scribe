
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Thoughts on Software Engineering
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A collection of insights, lessons learned, and technical deep-dives from the world of software development.
          </p>
        </div>
        
        <div className="space-y-0">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              readTime={post.readTime}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
