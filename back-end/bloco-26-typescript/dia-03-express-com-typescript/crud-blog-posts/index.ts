import express, { Request, Response, Application } from 'express';
import blogPostRouter from './routes/blogPosts';

const app: Application = express();
app.use(express.json());

const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript')
});

app.use(blogPostRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
