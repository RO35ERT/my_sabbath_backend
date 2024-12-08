const { Audio } = require('../models');

exports.uploadAudio = async (req, res) => {
  try {
    const { posted_by, title } = req.body;
    const file_path = req.file.path;

    const newAudio = await Audio.create({
      posted_by,
      title,
      file_path,
    });

    res.status(201).json({
      success: true,
      data: newAudio,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to upload audio',
    });
  }
};

exports.getAllAudio = async (req, res) => {
  try {
    const audios = await Audio.findAll();
    res.status(200).json({
      success: true,
      data: audios,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch audio',
    });
  }
};
