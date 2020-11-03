const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const userRoutes = require('../apis/routes/user');

app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('server running on port 3000');
})