const authM = require('../models/authM')
const { Router } = require('express')
const { v4} = require('uuid');
const authRoute = Router()

authRoute.post("/signup", async (req, res) => {
    const user = new authM(req.body)
    try {
        const search = await authM.find({ Email: user.Email })
        if (search.length >0) return res.end({ Message: "Account Exist" })
        else user.save((err, success) => {
            if (err) res.status(500).send({ Message: "Signup error" })
            else res.status(201).send({ Message: "Signup Success", ...success })
        }) 
    }
    catch (err) {
        res.send({ Message: "Account Exist" })
    }
    
})
authRoute.post("/login", async (req, res) => {
    const token = v4()
    const { Email, Password } = await req.body
    try {
        var valid = []
        valid = await authM.find({ Email: Email, Password: Password })
        if (valid.length > 0) return res.send({ valid:valid, token: token })
        else res.send({ Message: "Invalid credentials" })
    }
    catch (e) {
        return res.end({ Message: "Invalid credentials" })
    }
})
module.exports = authRoute