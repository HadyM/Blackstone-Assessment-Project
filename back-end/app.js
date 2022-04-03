// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const meetingRoomController = require("./controllers/meetingRoomController");
const bookingController = require("./controllers/bookingController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Meeting Rooms Page</h1>`);
});

app.use("/meetingRooms", meetingRoomController);
app.use("/bookings", bookingController);

app.get("*", ((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
}));

// EXPORT
module.exports = app;
