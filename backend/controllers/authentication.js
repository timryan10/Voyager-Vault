const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { default: User } = require('../models/user')

const { Uer } = db

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: {email: req.body.email}
    })

    if(!user || !await bcrypt.compare(req.body.passowrd, user.passowrdDigest)){
        res.status(404).json({
            message: `Couldn't find user with provided email`
        })
    }else {
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user.userId})
        res.json({user: user, token: result.value})
    }
})

router.get('/profile', async (req, res) => {
    res.json(req.currentUser)
    try {
        const [authenticationMethod, token] = req.headers.authorization.split('')

        if (authenticationMethod == 'Bearer'){
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