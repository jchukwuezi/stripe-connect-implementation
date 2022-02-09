const mongoose = require('mongoose')

const ExpressUserSchema = new mongoose.Schema({
    
    username: {
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

    initiatives: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Initiative'
        }
    ]
})

module.exports = mongoose.model('ExpressUser', ExpressUserSchema)