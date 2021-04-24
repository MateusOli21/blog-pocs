export interface PostTypes {
  id: number;
  banner: {
    ext: string;
    url: string;
    name: string;
    width: number;
    height: number;
  };
  blogText: string;
  blogTitle: string;
  slug: string;
  readTime: number;
  videoLink?: string;
  create_at: string;
  published_at: string;
  updated_at: string;
}
