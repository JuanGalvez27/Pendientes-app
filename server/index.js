import express from 'express';
import { PORT } from './config.js';
import pendRoutes from './routes/pendientes.routes.js';


const app = express();

app.use(express.json()); // res as a JSON
app.use(pendRoutes);


app.listen(PORT);
console.log(PORT)
console.log(`Server running on port ${PORT}`);