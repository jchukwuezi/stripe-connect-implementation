const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const ExpressUser = require('../../models/ExpressUser')

//stripe api with test key
const stripe = require('stripe')(process.env.STRIPE_API_KEY_TEST)

router.post("/register", async (req, res)=> {
    //I'm taking in a name, email, password, businessType
    console.log('Printing out the request')
    console.log(req.body)
    const {name, email, description, businessType, password} = req.body;
    if(!name || !email || !password || !businessType || !description){
        return res.status(400).send('Please enter all fields')
    }

    //making sure the same email isn't entered
    ExpressUser.findOne({email: email}).then((user) => {
        if(user){
            return res.status(400).send({error: 'This email already exists in the database'});
        }

        else{
            const newUser = new ExpressUser({
                name,
                email, 
                businessType,
                description,
                password
            })

            //hashing password
            bcrypt.genSalt((err, salt) => 
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                try {
                    console.log('creating stripe connect account')
                    const account = await stripe.accounts.create({
                        email: newUser.email,
                        country: 'IE',
                        type: 'express',
                        capabilities: {
                            card_payments: {requested: true},
                            transfers: {requested: true}
                        },
                        business_type: newUser.businessType,
                        business_profile: {
                            name: newUser.name,
                            product_description: newUser.description
                        }
                    })
                    .then(async ()=> {
                        await newUser.save()
                    })
                } catch (error) {
                    console.log(error)
                }
            }))
        }      
    })
})

module.exports = router;