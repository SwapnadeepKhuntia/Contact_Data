import app from "./app.js";
import dotenv from "dotenv";
import dbconnection from "./config/db.js";
import path from "path";
import express from "express";
dotenv.config();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();




app.use(express.static(path.join(__dirname, "./client/dist")));

app.listen(port, async()=>{
    await dbconnection();
    console.log(`app is running at http:localhost:${port}`);
})
