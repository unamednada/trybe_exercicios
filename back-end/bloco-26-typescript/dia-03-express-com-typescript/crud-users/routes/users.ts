import { Router, Request, Response } from 'express';
import fs from 'fs/promises';
import User from '../interfaces/User';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
  const data = await fs.readFile('./data/users.json', 'utf-8');

  const users: User[] = JSON.parse(data);

  return res.status(200).json(users);
});

export default router;