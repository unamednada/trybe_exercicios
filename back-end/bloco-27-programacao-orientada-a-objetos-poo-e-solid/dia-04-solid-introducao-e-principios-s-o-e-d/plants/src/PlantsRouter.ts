import { Router, Request, Response } from 'express';

const PlantsRouter = Router();

PlantsRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello from PlantsRouter');
});

export default PlantsRouter;