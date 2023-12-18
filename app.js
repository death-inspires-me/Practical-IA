// app.js
const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./patientRoutes/patientRoutes');
const app = express();

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB Connection Error: ', err));

app.use(express.json());

// Use the patient registration routes
app.use('/patients', patientRoutes);

app.listen(3001, () => {
  console.log('Server Listening on PORT 3001');
});
