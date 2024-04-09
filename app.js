const express = require('express');
const CONFIG = require('./config/config');
const bodyParser = require('body-parser');

const app = express();

//Added a middleware
app.use = express.json();
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())


//Home page

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Auth System'})
})

//Routes
// app.use('/auth', require('./routes/auth.routes'))

//Listening
app.listen(CONFIG.PORT, () => console.log(`Server running on http://localhost: ${CONFIG.PORT}`))