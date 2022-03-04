import { Router, Request, Response } from 'express';
import { readUsers } from '../utils/functions';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
  const users = await readUsers();
  return res.status(200).json(users);
});

router.get('/users/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;

  const users = await readUsers();
  const user = users.find(user => user.id === id);

  if (!user) return res.status(404).send('User not found');

  return res.status(200).json(user);
})

export default router;