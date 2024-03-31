import jwt from 'jsonwebtoken';
import User from '../models/user.js'; 

async function defineCurrentUser(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            req.currentUser = null; 
            return next();
        }
        
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { id } = decoded;
            const user = await User.findById(id);
            if (!user) {
                req.currentUser = null; 
                return next();
            }
            req.currentUser = user;
            return next();
        } catch (err) {
            if (err.name === 'JsonWebTokenError') {
                req.currentUser = null; 
                return next();
            } else {
                return next(err); 
            }
        }
    } catch (err) {
        next(err); 
    }
}

export default defineCurrentUser;
