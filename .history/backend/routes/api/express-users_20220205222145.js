const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const ExpressUser = require('../../models/ExpressUser')

//stripe api with test key
//const stripe = require('stripe')(process.env.STRIPE_API_KEY_TEST)
const stripe = require('stripe')('sk_test_51KKuOdJ7ft6dkEBZKGJsyfVHTuNqGM81ydV7bRsqF6YssCuWRq0PogOI0jwQeShc9VCiKkvhUFnGnVBAzwQl4MZZ00Q8Lv5Faa')

router.post("/register", async (req, res)=> {
    //I'm taking in a name, email, password, businessType
    const {name, email, description, businessType, password} = req.body;

    if(!name || !email || !password || !businessType){
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
                password
            })

            //hasing the password
            bcrypt.genSalt((err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(()=>{
                    res.status(200).send({successful: `${newUser.name} has been added to the database`})

                    //creating express account in stripe
                    const account = await stripe.accounts.create({
                        email: newUser.email,
                        country: 'IE',
                        type: 'express',
                        capabilties: {
                            card_payments: {requested: true},
                            transfers: {requested: true}
                        },
                        business_type: newUser.businessType,
                        business_profile.

                
                    })
                })


            }))
        }
        
    })


  
    
})