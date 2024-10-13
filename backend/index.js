import express from 'express';
import dotenv from 'dotenv';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT;

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.use('/books', booksRoute);
app.use(booksRoute);

app.listen(port, () => {
  console.log(`App is listening to port: ${port}`);
});

