const express = require("express");
const bookings = express.Router();
const {
  getAllBookings,
  getBooking,
  addBooking,
  updateBooking,
  deleteBooking,
} = require("../queries/bookings.js");

bookings.get("/", async (req, res) => {
  const allBookings = await getAllBookings();
  res.json(allBookings);
});

bookings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const booking = await getBooking(id);
  res.json(booking);
});

bookings.post("/", async (req, res) => {
  const createdBooking = await addBooking(req.body);
  res.json(createdBooking);
});

bookings.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBooking = await updateBooking(id, req.body);
  res.json(updatedBooking);
});

bookings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBooking = await deleteBooking(id);
  res.json(deletedBooking);
});

module.exports = bookings;
