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

    // Map the audios and construct the full URL for each audio file
    const audioData = audios.map(audio => {
      return {
        ...audio.get(),  // Convert Sequelize model instance to plain object
        url: `${req.protocol}://${req.get('host')}/uploads/audio/${audio.file_path}`, // Construct the full URL
      };
    });
    
    res.status(200).json({
      success: true,
      data: audioData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch audio',
    });
  }
};

