import fs from 'fs/promises';
import BlogPost from '../interfaces/BlogPost';

async function readBlogPosts(): Promise<BlogPost[]> {
  const data = await fs.readFile('./data/blogPosts.json', 'utf-8');

  const BlogPosts: BlogPost[] = JSON.parse(data);

  return BlogPosts;
};

async function writeBlogPosts(data: BlogPost[]): Promise<void> {
  await fs.writeFile('./data/blogPosts.json', JSON.stringify(data));
}

export {
  readBlogPosts,
  writeBlogPosts,
};
