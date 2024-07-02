import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

dotenv.config();

// app config
const app = express();
const PORT = process.env.PORT | 5000;

// middleware
app.use(express.json())
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
    res.send("Api is working!");
})

const start = () => {
    app.listen(PORT, () => {
        console.log(`Server is started on port = ${PORT}`)
    })
}

start();