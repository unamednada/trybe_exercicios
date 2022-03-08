// ./index.ts

import express, { Request, Response, Application } from 'express';

const app: Application = express();

const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
