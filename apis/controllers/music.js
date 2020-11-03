const mongoose = require('mongoose');
const Music = require('../models/music');

module.exports.getAll = (req, res, next) => {
    Music.find()
        .exec()
        .then(result => {
            res.status(200).json({
                count: result.length,
                musics: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}


module.exports.insert = (req, res, next) => {
    const name = req.body.name;
    const music = new Music({
        _id: mongoose.Types.ObjectId(),
        name: name
    })
    music.save()
        .then(result => {
            res.status(201).json({
                message: "music added successfully",
                music: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}