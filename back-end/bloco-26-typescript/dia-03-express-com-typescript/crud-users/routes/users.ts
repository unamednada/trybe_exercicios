import { Router, Request, Response } from 'express';
import { readUsers } from '../utils/functions';
import StatusCode from '../utils/StatusCode';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
  const users = await readUsers();
  return res.status(StatusCode.OK).json(users);
});

router.get('/users/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;

  const users = await readUsers();
  const user = users.find(user => user.id === id);

  if (!user) return res.status(StatusCode.NOT_FOUND).send('User not found');

  return res.status(StatusCode.OK).json(user);
})

export default router;