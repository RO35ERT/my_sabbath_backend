const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadAudio');
const audioController = require('../controller/AudioController');

// Route to upload audio
router.post('/upload', upload.single('file'), audioController.uploadAudio);

// Route to fetch all audio records
router.get('/', audioController.getAllAudio);

module.exports = router;
