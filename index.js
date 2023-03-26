const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const app = express()
const route = require('./route')

app.use(express.json())

mongoose.connect("mongodb+srv://Rimsha:RimAtlas@cluster0.ij9mujl.mongodb.net/appointment-form", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(8000, () => {
    console.log("Server Successfully Started!")
})