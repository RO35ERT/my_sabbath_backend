const express = require('express');
const router = express.Router();
const announcementController = require('../controller/AnnouncementController');

// Create a new announcement
router.post('/', announcementController.createAnnouncement);

// Get all announcements
router.get('/', announcementController.getAnnouncements);

// Get a single announcement by ID
router.get('/:id', announcementController.getAnnouncementById);

// Update an announcement
router.put('/:id', announcementController.updateAnnouncement);

// Delete an announcement
router.delete('/:id', announcementController.deleteAnnouncement);

module.exports = router;
