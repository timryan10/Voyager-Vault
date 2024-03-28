import express from "express";
import User from "../models/user";
import { check, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

const router = express.Router();

// CORS configuration
router.use(cors());

// Register Route
router.post(
    "/register",
    [
        check("firstName", "First name is required").isString(),
        check("lastName", "Last name is required").isString(),
        check("email", "Email is required").isEmail(),
        check(
            "password",
            "Password with 5 or more characters is required"
        ).isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { firstName, lastName, email, password } = req.body;

            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });

            await user.save();

            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: "Server Error" });
        }
    }
);

// Login Route
router.post(
    "/login",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;

            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: "Invalid Credentials" });
            }

            // Verify password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Invalid Credentials" });
            }

            // Generate JWT token
            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: 3600 }, // 1 hour
                (err, token) => {
                    if (err) {
                        console.error(err.message);
                        return res.status(500).json({ message: "Server Error" });
                    }
                    res.json({ token });
                }
            );
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: "Server Error" });
        }
    }
);

export default router;
