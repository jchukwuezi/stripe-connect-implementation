const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

//load config path
dotenv.config({path: './config/config.env'})

connectDB()

const app = express();
const PORT = process.env.PORT || 5690

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' //connecting to the frontend
}))