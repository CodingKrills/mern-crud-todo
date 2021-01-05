const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 5000

// cors
app.use(cors())

// parse application/json
app.use(bodyParser.json())

// Connection to MongoDB
mongoose
    .connect(
        'mongodb+srv://MyUsername:MyPassword@mycluster-rkncu.mongodb.net/MERN_TEST?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// routes 
app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})