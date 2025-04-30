// Portfolio types
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

// Blog types
export interface BlogPost {
  title: string;
  content: string;
  imageSrc: string;
  slug: string;
  date: string;
  readTime: string;
}

// Service types
export interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
  priority?: boolean;
}
