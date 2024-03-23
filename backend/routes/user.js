import express from "express";
const { Request, Response } = express;
import User from "../models/user";
import { check, validationResult } from "express-validator";

const router = express.Router()

router.post("/register", [
    check("firstName", "First name is required").isString(),
    check("lastName", "Last name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 5 or more characters is required").isLength({
            min: 6,
        })
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({message: errors.array()})
        }
        try {
            let user = await User.findOne({
                email: req.body.email,
            });

            if (user){
                return res.status(400).json({message: "User already exists"})
            }

            user = new User(req.body);
            await user.save();
        } catch(error){
            console.log(error);
            res.status(500).send({message: "Something went wrong"})
        }
    }
)

export default router;