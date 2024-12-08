const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const audioController = require('../controller/AudioController');

// Route to upload audio
router.post('/upload', upload.single('audio'), audioController.uploadAudio);

// Route to fetch all audio records
router.get('/', audioController.getAllAudio);

module.exports = router;
