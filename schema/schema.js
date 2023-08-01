// models/reservation.js
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    numberp: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
