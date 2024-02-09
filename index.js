const Joi = require('joi');
const genres = require('./routes/genres');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/genres')
.then(()=>console.log("connected succesfully to genres database"))
.catch(e=>console.log(e))
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));