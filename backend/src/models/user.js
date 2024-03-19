import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const loginSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})

loginSchema.pre("save", async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

const User = mongoose.model("User", loginSchema);

export default User;