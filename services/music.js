const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/musicdb', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const musicRoutes = require('../apis/routes/music');


app.use('/musics', musicRoutes);

app.listen(8000, () => {
    console.log('Server running on 8000')
})