import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import dotenv from 'dotenv';
import userController from './controllers/user.js';
import mongoose from "mongoose";
import e from "express";


dotenv.config()

const PORT = process.env.PORT || 5050;
const app = express();

mongoose.connect(process.env.ATLAS_URI).then(() => {
    console.log('succesfully connected');
}).catch((e) => {
    console.log('not connected')
})

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use('/user', userController)

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});