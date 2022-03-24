import express from 'express';
import dotenv from 'dotenv';
import PlantsRouter from './PlantsRouter';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/plants', PlantsRouter);

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
