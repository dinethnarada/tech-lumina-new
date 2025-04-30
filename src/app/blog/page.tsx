import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogData';

export const metadata = {
  title: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today | Blog',
  description: 'Stay updated with the latest trends and insights in web development, technology, and digital innovation.',
};

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50 pb-32">
      <div className="mx-auto max-w-5xl md:px-4 pt-32">
        <div className="px-6 md:px-0 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300">
            Insights and updates from our tech experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              content={post.content}
              imageSrc={post.imageSrc}
              slug={post.slug}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
