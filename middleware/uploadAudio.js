const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Define storage strategy
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/audio'; // Path where audio files will be saved

    // Ensure the directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Create folder if it doesn't exist
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// Configure Multer
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const fileTypes = /mp3|wav|m4a/; // Accept only audio formats
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (extname) {
      cb(null, true);
    } else {
      cb(new Error('Audio files only!'));
    }
  },
});

module.exports = upload;
