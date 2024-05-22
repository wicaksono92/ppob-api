import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
 
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(router);
 
app.listen(8085, ()=> console.log('Server running at port 8085'));