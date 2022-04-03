const db = require("../db/dbConfig.js");

const getAllBookings = async (meetingRoomId) => {
  try {
    const allBookings = await db.any("SELECT * FROM bookings");
    return { success: true, payload: allBookings };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getBooking = async (id) => {
  try {
    const oneBooking = await db.one("SELECT * FROM bookings WHERE id = $1", id);
    return { success: true, payload: oneBooking };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const addBooking = async (booking) => {
  const { meetingName, startDate, endDate, attendees, meetingRoomId } = booking;
  try {
    const newBooking = await db.one(
      "INSERT INTO bookings (meetingName, startDate, endDate, attendees, meetingRoomId) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [meetingName, startDate, endDate, attendees, meetingRoomId],
    );
    return { success: true, payload: newBooking };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateBooking = async (id, booking) => {
  const { meetingName, startDate, endDate, attendees, meetingRoomId } = booking;
  try {
    const updatedBooking = await db.one(
      "UPDATE bookings SET meetingName = $1, startDate = $2, endDate = $3, attendees = $4, meetingRoomId = $5 WHERE id = $6 RETURNING *",
      [meetingName, startDate, endDate, attendees, meetingRoomId, id],
    );
    return { success: true, payload: updatedBooking };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteBooking = async (id) => {
  try {
    const deletedBooking = await db.one(
      "DELETE FROM bookings WHERE id = $1 RETURNING *",
      id,
    );
    return { success: true, payload: deletedBooking };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllBookings,
  getBooking,
  addBooking,
  updateBooking,
  deleteBooking,
};
