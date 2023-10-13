const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;

app.use(
    cors({
        origin: "*"
    })
);

app.use(bodyParser.json());

const connectDB = require('./db/db');
const userRoutes = require('./routes/userRoutes');

connectDB();

app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log("Listening on Localhost: 5000");
});