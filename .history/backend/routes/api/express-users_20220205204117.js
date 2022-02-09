const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

//stripe api with test key
const stripe = require('stripe')(process.env.STRIPE_API_KEY_TEST)

router.post("/register", async (req, res)=> {

    
    const account = await stripe.accounts.create({
        
    })

})