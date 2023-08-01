
const express = require("express");
const router = express.Router();
const Reservation = require("../schema/schema");

// Create a new reservation
router.post("/addreservations", async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all reservations
router.get("/reservations", async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});// Get a single reservation by ID
router.get("/reservations/:id", async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ error: "Reservation not found" });
        }
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a reservation
router.put("/updatereservations/:id", async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
//search for a reservation of today
router.get('/searchtoday', async (req, res) => {
    try {
        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0]; // Get today's date in "YYYY-MM-DD" format

        const reservations = await Reservation.find({ date: { $gte: formattedToday, $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] } });

        res.status(200).json({reservations: reservations})
    ;
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Delete a reservation
router.delete("/reservations/:id", async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        res.status(200).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;