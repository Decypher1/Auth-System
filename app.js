const express = require('express');
const CONFIG = require('./config/config');
const bodyParser = require('body-parser');
const connectDB = require('./db/db');
const app = express();
const authMW = require('./validator/auth.validator')

//Connect to DB
connectDB()
//Added a middleware
app.use = express.json();
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())


//Home page

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Auth System'})
})

//error handler
app.use((err, req, res, next) => {
    console.log(err)
    const errStatus = err.status || 500
    res.status(errStatus).send("An error occured")
    next()
})


//Routes
// app.use('/auth', require('./routes/auth.routes'))

//Listening
app.listen(CONFIG.PORT, () => console.log(`Server running on http://localhost: ${CONFIG.PORT}`))