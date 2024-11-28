import { json } from 'body-parser';
import express from 'express';
import clientesRouter from './routes/clientesRouter';

const app = express();
const port = 3000;

app.use(json());
app.use('/clientes', clientesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
