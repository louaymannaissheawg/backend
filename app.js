const express = require("express");
const mongoose = require("mongoose");
const reservationRoutes = require("./routes/reservation");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect("mongodb+srv://louaymanai23:7y6JugrRSsaCr6gw@cluster0.qxsjqwf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use the reservation routes
app.use("/api", reservationRoutes);

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});