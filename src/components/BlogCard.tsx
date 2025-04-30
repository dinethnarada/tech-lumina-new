import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

type BlogCardProps = BlogPost;

const BlogCard = ({ title, content, imageSrc, slug, date, readTime }: BlogCardProps) => {
  // Get first 150 characters of content for preview
  const contentPreview = content ? (content.length > 150 ? content.slice(0, 150) + '...' : content) : '';

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx3/2wBDAR0XFx8dHx8dHx8dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx0dHx3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white hover:text-violet-400 transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <p className="text-gray-300 mb-6">
          {contentPreview}
        </p>
        <Link 
          href={`/blog/${slug}`}
          className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#806c00] to-[#6B17ED] text-white rounded-md font-medium text-sm transform transition-transform duration-300 hover:opacity-90"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
