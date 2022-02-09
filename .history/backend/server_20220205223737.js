const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const ExpressUsers = require('./routes/api/express-users')

//load config path
dotenv.config({path: './config/config.env'})

connectDB()

const app = express();
const PORT = process.env.PORT || 5690

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' //connecting to the frontend
}))
app.use(express.json())

app.use("/api/express-users", ExpressUsers)

app.listen(
    PORT,
    console.log(`Server is running on port ${PORT}`)
)