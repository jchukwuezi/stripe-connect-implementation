const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

//stripe api with test key
const stripe = require('stripe')(process.env.STRIPE_API_KEY_TEST)

router.post("/register", async (req, res)=> {
    //I'm taking in a name, email, password, businessType


    const {country}
    //I am creating an account for my database and using that information to prefill the account object


    const account = await stripe.accounts.create({
        country: 'IE',
        type: 'express',

    })

})