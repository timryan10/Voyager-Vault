import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user: { _id: user._id, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/profile', async (req, res) => {
    res.json(req.currentUser)
    try {
        const [authenticationMethod, token] = req.headers.authorization.split('')
        
        if(authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            const { id } = result.value

            let user = await User.findOne({
                where: {
                    userId: id
                }
            })
            res.json(user)
        }
    } catch (error) {
        res.json(null)
    }
})

export default router;