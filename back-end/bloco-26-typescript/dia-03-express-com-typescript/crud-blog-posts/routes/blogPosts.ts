import { Router, Request, Response } from 'express';
import BlogPost from '../interfaces/BlogPost';
import { readBlogPosts, writeBlogPosts } from '../utils/functions';
import StatusCode from '../utils/Status';

const router: Router = Router();

router.get('/blogposts', async (req: Request, res: Response) => {
  const blogPosts = await readBlogPosts();
  return res.status(StatusCode.OK).json(blogPosts);
});

export default router;