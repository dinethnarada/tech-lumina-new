import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    title: "CMS vs Custom Coding: What's the Best Fit for Your Website?",
    content: "Explore the pros and cons of using a CMS versus custom coding for your website. Learn which approach best suits your business needs, considering factors like scalability, security, and maintenance.",
    imageSrc: "/blog/cms-vs-custom.jpg",
    slug: "cms-vs-custom-coding",
    date: "April 15, 2025",
    readTime: "6 min read"
  },
  {
    title: 'Service Level Agreement (SLA) – Explained with a Real-world Example',
    content: "Let's say a client approaches us to build a website for their bakery that sells products across the entire country. This isn't just any small website. It's a large-scale platform that will handle lots of traffic and transactions. For projects like this, it's important to clearly define expectations between the client and the development team. This is where a Service Level Agreement (SLA) comes in.",
    imageSrc: '/blog/sla.jpg',
    slug: 'service-level-agreement',
    date: 'April 18, 2025',
    readTime: '7 min read'
  },
];

export const metadata = {
  title: 'Blog | Tech Lumina',
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
