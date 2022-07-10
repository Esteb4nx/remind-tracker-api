const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const user = require('./routes/user')
const auth = require('./routes/auth')


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
user(app);
auth(app);


//routes
app.get('/',(req,res) => {
    res.send("Welcompe to my API")
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to mongodb atlas'))
.catch((error) => console.error('error'));



app.listen(port,()=> console.log('server listening on port', port));
