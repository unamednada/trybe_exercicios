import { Router, Request, Response } from 'express';
import BlogPost from '../interfaces/BlogPost';
import { readBlogPosts, writeBlogPosts } from '../utils/functions';
import StatusCode from '../utils/Status';

const router: Router = Router();

router.get('/blogposts', async (req: Request, res: Response) => {
  const blogPosts = await readBlogPosts();
  return res.status(StatusCode.OK).json(blogPosts);
});

router.get('/blogposts/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;

  const blogPosts = await readBlogPosts();
  const blogPost = blogPosts.find(blogPost => blogPost.id === id);

  if (!blogPost) return res.status(StatusCode.NOT_FOUND).send('BlogPost not found');
  return res.status(StatusCode.OK).json(blogPost);
});

router.post('/blogposts', async (req: Request, res: Response) => {
  const blogPost: BlogPost = req.body;

  const blogPosts = await readBlogPosts();

  let id = blogPosts[blogPosts.length -1].id;
  if (typeof id === 'number') id += 1;

  const createdAt = new Date().toISOString().slice(0, 10);

  blogPosts.push({ ...blogPost, id, createdAt });

  await writeBlogPosts(blogPosts);
  return res.status(StatusCode.CREATED).json({ ...blogPost, id, createdAt });
});

export default router;