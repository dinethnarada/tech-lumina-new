import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogData';

export const metadata = {
  title: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today | Blog',
  description: 'Stay updated with the latest trends and insights in web development, technology, and digital innovation.',
};

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
      <div className="mx-auto max-w-5xl px-4 pt-24 sm:pt-32">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center text-white">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Insights and updates from our tech experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pb-16 sm:pb-24 md:pb-32">
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
