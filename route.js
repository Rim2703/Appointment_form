const express = require('express')
const router = express.Router()
const appointmentModel = require('./schema')

// Create API endpoint for appointment 
router.post('/appointments', async (req, res) => {
    const { name, email, phone, date, time } = req.body
    const newAppointment = new appointmentModel({ name, email, phone, date, time })
    try {
        newAppointment.save()
        res.send('Appointment registered successfully')
    }
    catch (error) {
        return res.status(500).json({ message: error })
    }
});

module.exports = router