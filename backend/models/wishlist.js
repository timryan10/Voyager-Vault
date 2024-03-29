import mongoose from "mongoose";
import { Schema } from "mongoose";

const wishSchema = new Schema({
    userId:{type: String, required:true},
    name: { type: String, required: true },
    capital: { type: String },
    population: { type: Number },
    flag: { type: String } 
});

const Wishlist = mongoose.model('wishlist', wishSchema);

export default Wishlist;