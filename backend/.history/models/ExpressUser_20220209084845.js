const mongoose = require('mongoose')

const ExpressUserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    country:{
        type: 'String',
        default: 'IE'
    },

    password:{
        type: 'String',
        required: true
    },

    businessType:{
        type: 'String',
        required: true
    },

    stripeAccountId:{
        type: 'String',
        required: true
    },

    initiatives: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Initiative'
        }
    ],

    accountStatus : {
        type: String,
        default: 'Inactive'
    }
})

module.exports = mongoose.model('ExpressUser', ExpressUserSchema)