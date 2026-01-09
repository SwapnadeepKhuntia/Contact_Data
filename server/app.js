import express from "express";
import cors from "cors";
import ContactRoutes from "./routes/contact.router.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
        origin:"https://contact-data-1-nmsd.onrender.com",
        credentials:true
}));



app.use("/api/v1/contact",ContactRoutes);


export default app;