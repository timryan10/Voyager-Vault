import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import userController from './controllers/user.js';
import mongoose from "mongoose";
import authenticationController from './controllers/authentication.js';
import defineCurrentUser from './middleware/defineCurrentUser.js';
import countryController from './controllers/country.js'; // Import the country controller

dotenv.config()

const PORT = process.env.PORT || 5050;
const app = express();

mongoose.connect(process.env.ATLAS_URI).then(() => {
    console.log('successfully connected');
}).catch((e) => {
    console.log('not connected');
})

// Allow requests from 'http://localhost:3000'
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(defineCurrentUser)

app.use(express.json());
app.use('/user', userController)
app.use('/authentication', authenticationController)
app.use('/country', countryController); // Mount the country controller under the /country base URL path

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
