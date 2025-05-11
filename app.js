const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/drives', require('./routes/driveRoutes'));

module.exports = app;
