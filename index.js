import  express  from 'express';
import dotenv from "dotenv";
import {connectDB} from "./config/db"
import userRoute from "./routes/userRoute"
// const express = require('express')
dotenv.config({path: "./config/config.env"});
const app = express();
app.use(express.json());
connectDB();

app.use(userRoute);


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})