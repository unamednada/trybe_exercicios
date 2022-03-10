import { Router, Request, Response } from 'express';
import BlogPost from '../interfaces/BlogPost';
import validateBlogPost from '../middlewares/validateBlogPost';
import { readBlogPosts, writeBlogPosts } from '../utils/functions';
import StatusCode from '../utils/Status';

const router: Router = Router();

router.get('/blogposts/search', async (req: Request, res: Response) => {
  const searchTerm = req.query.term;
  const blogPosts = await readBlogPosts();
  let returnBlogPosts: BlogPost[] = [];

  if (typeof searchTerm === 'string') {
    returnBlogPosts = blogPosts.filter(({ author, category, createdAt}) => author.toLowerCase().includes(searchTerm)
    || category.toLowerCase().includes(searchTerm)
    || createdAt?.includes(searchTerm))
  }
  if (returnBlogPosts.length === 0) return res.status(StatusCode.NOT_FOUND).send('No posts found');
  return res.status(StatusCode.OK).json(returnBlogPosts);
});

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

router.post('/blogposts', validateBlogPost, async (req: Request, res: Response) => {
  const blogPost: BlogPost = req.body;

  const blogPosts = await readBlogPosts();

  let id = blogPosts[blogPosts.length -1].id;
  if (typeof id === 'number') id += 1;

  const createdAt = new Date().toISOString().slice(0, 10);

  blogPosts.push({ ...blogPost, id, createdAt });

  await writeBlogPosts(blogPosts);
  return res.status(StatusCode.CREATED).json({ ...blogPost, id, createdAt });
});

router.put('/blogposts/:id', validateBlogPost, async (req: Request, res: Response) => {
  const id = +req.params.id;
  let createdAt;
  let blogPostIndex;

  const blogPosts = await readBlogPosts();

  const editedBlogPost = blogPosts.find(blogPost => blogPost.id === id);
  
  if (!editedBlogPost) return res.status(StatusCode.NOT_FOUND).send('Blogpost not found');
  else {
    createdAt = editedBlogPost.createdAt;
    blogPostIndex = blogPosts.findIndex(blogPost => blogPost.id === id);
  }

  const newBlogPost: BlogPost = { ...req.body, id, createdAt };

  blogPosts.splice(blogPostIndex, 1, newBlogPost);

  await writeBlogPosts(blogPosts);
  return res.status(StatusCode.OK).json(newBlogPost);
});

router.delete('/blogposts/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;

  const blogPosts = await readBlogPosts();

  const blogPostIndex = blogPosts.findIndex(blogPost => blogPost.id === id);
  if (blogPostIndex === -1) return res.status(StatusCode.NOT_FOUND).send('Blogpost not found');

  blogPosts.splice(blogPostIndex, 1);

  await writeBlogPosts(blogPosts);
  return res.status(StatusCode.NO_CONTENT).end();
});

export default router;