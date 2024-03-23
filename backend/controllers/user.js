import express from "express";
import User from "../models/user.js";
const router = express.Router();


// need post: Login & post: Register
router.post('/register', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

export default router