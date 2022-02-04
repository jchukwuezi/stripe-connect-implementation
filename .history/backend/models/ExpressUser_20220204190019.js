const mongoose = require('mongoose')

const ExpressUserSchema = new mongoose.Schema({
    country:{
        type: 'String',
        default: 'IE'
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