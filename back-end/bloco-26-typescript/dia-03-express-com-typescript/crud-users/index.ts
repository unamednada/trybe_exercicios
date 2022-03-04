import express, { Request, Response } from 'express';
import UsersRoutes from './routes/users';

const app = express();

const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript');
});

app.use(UsersRoutes);

app.listen(PORT, () => {
  console.log('Server is running at http://localhost:' + PORT);
});
