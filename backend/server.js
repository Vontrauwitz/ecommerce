require('dotenv').config();
const express = require('express');
import connectDB from './config/db';

connectDB();
const app = express();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))
