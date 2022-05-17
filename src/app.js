import express from 'express';
import router from './routes';
import { createTable } from '../src/controller/Task';

const app = express();
app.use(express.json());
app.use(router);

createTable();

app.listen(3000, console.log('API rodando'));