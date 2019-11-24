const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Load route file
const bootcapms = require("./routes/bootcamp");

// Load express framwork
const app = express();

// Mount bootcamp route
app.use('/api/v1/bootcamp', bootcapms);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(` Server is running ${process.env.NODE_ENV} mode and port number ${PORT}`));