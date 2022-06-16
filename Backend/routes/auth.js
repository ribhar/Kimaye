const authM = require('../models/authM')
const { Router } = require('express')
const { v4} = require('uuid');
const authRoute = Router()

authRoute.post("/signup", async (req, res) => {
    const token = v4()
    const user = new authM(req.body)
    user.save((err, success) => {
        if (err) res.status(500).send({ Message: "Error occured" })
        else res.status(201).send({ Message: "Signup Success", token: token, ...success })
    })
})
authRoute.post("/login", async (req, res) => {
    const { Email, Password } = req.body
    const valid = await User.find({ Email, Password })
    if (valid.length < 1) res.status(401).end({ Message: "Invalid credentials" })
    else res.send(valid)
})
module.exports = authRoute