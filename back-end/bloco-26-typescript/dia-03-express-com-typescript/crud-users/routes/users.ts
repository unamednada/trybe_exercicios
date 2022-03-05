import { Router, Request, Response } from 'express';
import User from '../interfaces/User';
import validateUser from '../middlewares/validateUser';
import { readUsers, writeUsers } from '../utils/functions';
import StatusCode from '../utils/Status';

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
});

router.post('/users', validateUser, async (req: Request, res: Response) => {
  const user: User = req.body;

  const users = await readUsers();
  const id = users.length + 1;

  users.push({ ...user, id });

  await writeUsers(users);

  return res.status(StatusCode.CREATED).json({ ...user, id });
});

router.put('/users/:id', validateUser, async (req: Request, res: Response) => {
  const id = +req.params.id;
  const editedUser: User = { ...req.body, id };

  const users = await readUsers();

  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return res.status(StatusCode.NOT_FOUND).send('User not found');

  users.splice(userIndex, 1, editedUser);

  await writeUsers(users);

  return res.status(StatusCode.OK).json(editedUser);
});

export default router;