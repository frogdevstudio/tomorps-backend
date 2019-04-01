const express = require('express');
const router = express.Router();
const game_controller = require('../controllers/game.controller');

router.post('/join', game_controller.join);

module.exports = router;