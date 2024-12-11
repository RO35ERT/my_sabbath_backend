const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadVideo');
const videoController = require('../controller/VideoController');

// Route to upload audio
router.post('/upload', upload.single('file'), videoController.uploadVideo);

// Route to fetch all audio records
router.get('/', videoController.getAllVideo);

module.exports = router;
