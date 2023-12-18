// models/patientData.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // Add other fields as needed
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
