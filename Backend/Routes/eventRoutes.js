const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// ✅ Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ Create a new event (For Admins)
router.post("/", async (req, res) => {
  const { title, description, date, location, price } = req.body;
  try {
    const event = new Event({ title, description, date, location, price });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
