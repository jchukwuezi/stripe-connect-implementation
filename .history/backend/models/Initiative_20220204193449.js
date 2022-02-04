const mongoose = require('mongoose')

const InitiativeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    goalAmount: {
        type: Number,
        required:[true, 'Please enter a number']
    },

    totalAmountDonated:{
        type: Number,
        default: 0
    },

    creationDate:{
        type: Date,
        default: Date.now
    },

    endedAt:{
        type: Date,
    },

    donationHistory: [
        {
            amount: Number,
            email: String,
            date: Date
        }
    ]





    
})