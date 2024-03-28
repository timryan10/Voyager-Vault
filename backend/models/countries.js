import mongoose from "mongoose";
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: { type: String, required: true },
    capital: { type: String },
    population: { type: Number },
    flag: { type: String } // URL to the flag image
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;