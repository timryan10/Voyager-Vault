import mongoose from "mongoose";
import { Schema } from "mongoose";

const countrySchema = new Schema({
    userId:{type: String, required:true},
    name: { type: String, required: true },
    capital: { type: String },
    population: { type: Number },
    flag: { type: String } 
});

const Country = mongoose.model('Country', countrySchema);

export default Country;