const mongoose = require('mongoose');
const User = require('../models/user');

module.exports.getAll = (req, res, next) => {
    console.log('users')
    User.find()
        .exec()
        .then(result => {
            console.log('users array')
            console.log(result);
            res.status(200).json({
                count: result.length,
                users: result
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
    const music = new User({
        _id: mongoose.Types.ObjectId(),
        name: name
    })
    music.save()
        .then(result => {
            res.status(201).json({
                message: "user added successfully",
                music: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}