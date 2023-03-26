const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: Date,
    time: String
}, { timestamps: true });

module.exports = mongoose.model("appointment", appointmentSchema)