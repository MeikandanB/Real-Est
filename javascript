// Sample endpoint for posting a property
const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); // Mongoose model

router.post('/property', async (req, res) => {
  const { place, area, bedrooms, bathrooms, hospitalsNearby, collegesNearby } = req.body;

  try {
    const newProperty = new Property({
      place,
      area,
      bedrooms,
      bathrooms,
      hospitalsNearby,
      collegesNearby,
      postedBy: req.user.id // Assuming user is authenticated
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
