import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';

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
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
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