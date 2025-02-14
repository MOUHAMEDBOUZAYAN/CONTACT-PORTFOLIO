const express = require("express");
const router = express.Router();
const Data = require('./model');

// Retrieve all users
router.get("/", (req, res) => {
  Data.find()
    .then(users => res.json(users))
    .catch(err => {
      console.error("Error fetching users:", err);
      res.status(500).json({ message: "Internal server error" });
    });
});

// Create a new user
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  const contact = new Data({
    firstName,
    lastName,
    email,
    phone,
    message
  });

  try {
    const savedContact = await contact.save();
    console.log('Contact saved:', savedContact);
    res.status(201).json(savedContact);
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(400).json({ message: "Failed to save contact" });
  }
});

module.exports = router;