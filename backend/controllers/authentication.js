import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// Login user
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({
            token,
            user: { _id: user._id, email: user.email, firstname: user.firstName },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/profile", async (req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(" ");

        if (authenticationMethod === "Bearer") {
            const result = jwt.verify(token, process.env.JWT_SECRET);

            const userId = result.userId;

            const user = await User.findOne({ _id: userId });

            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } else {
            res.status(401).json({ message: "Invalid authentication method" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;