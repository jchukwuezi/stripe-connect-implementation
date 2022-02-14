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

            //hasing the password
            bcrypt.genSalt((err, salt) => 
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                //res.status(200).send({successful: `${newUser.name} has been added to the database`})

                //creating express account in stripe
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
                .catch((err) => {
                    console.error(err)
                })

                console.log(account)
                newUser.stripeAccountId = account.id;
                await newUser.save()
                res.send(account)
            }))
        }
    })
})

router.post("/login" , async (req, res) => {
    //for the first login status will be changed and account link will be created
    const {email, password} = req.body;
    console.log(req.body)

    ExpressUser.findOne({email}).then((user) => {
        if(!user){
            return res.status(400).send('User was not found')
        }

        console.log(user.stripeAccountId)

        //if the user is found
        bcrypt.compare(password, user.password)
        .then(async (isMatch) => {
            if(!isMatch) {
                return res.status(400).send('Invalid credentials')
            }

            //if user is found create account link to redirect user to
            const accountLink = await stripe.accountLinks.create({
                account: user.accountId,
                refresh_url: 'http://localhost:3000/failure' ,
                return_url: 'http://localhost:3000/success' ,
                type: 'account_onboarding' 
            })

            console.log(accountLink)
            console.log("account link : " +  accountLink.url)
            res.send(accountLink.url)
        })
    })
})


module.exports = router;