import moviesRouter from "./routes/movies";
import mongoose from "mongoose";
import {Connection} from "mongoose";
import express, {Application} from "express";
import dotenv from "dotenv";

dotenv.config();
if (process.env.DATABASE_URL !== undefined)
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db: Connection = mongoose.connection;
db.on('error', (error: any) => console.error(error));
db.once('open', () => console.log('connected to database'));
const app: Application = express();
app.use(express.json());
app.use('/movies', moviesRouter);

export default app;