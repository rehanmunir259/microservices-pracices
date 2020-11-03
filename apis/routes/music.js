const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music');
router.get('/', musicController.getAll);
router.post('/', musicController.insert);

module.exports = router;