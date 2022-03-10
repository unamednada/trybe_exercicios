import { NextFunction, Request, Response } from "express";
import blogPostSchema from "../schemas/blogPostSchema";
import BlogPost from "../interfaces/BlogPost";
import StatusCode from "../utils/Status";

export default async function validateBlogPost(req: Request, res: Response, next: NextFunction) {
  const blogPost: BlogPost = req.body;

  const { error } = blogPostSchema(req.body);

  if (error) return res.status(StatusCode.BAD_REQUEST).send(error.message);

  next();
};
