import mongoose from "mongoose";
import User from "../models/user"
import jwt from "jsonwebtoken"

//const { User } = db;

async function defineCurrentUser(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { id } = decoded;
            const user = await User.findById(id);
            req.currentUser = user;
        } else {
            req.currentUser = null;
        }
        next();
    } catch (err) {
        req.currentUser = null;
        next(err);
    }
}

export default defineCurrentUser