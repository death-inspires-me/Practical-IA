// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientData');

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    // Check if the patient already exists
    const existingPatient = await Patient.findOne({ firstName, lastName });

    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already exists' });
    }

    // If the patient doesn't exist, create a new record
    const newPatient = new Patient({ firstName, lastName /* add other fields */ });
    await newPatient.save();

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
