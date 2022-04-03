const db = require("../db/dbConfig.js");

const getAllMeetingRooms = async () => {
  try {
    const allMeetingRooms = await db.any("SELECT * FROM meeting_rooms");
    return { success: true, payload: allMeetingRooms };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getMeetingRoom = async (id) => {
  try {
    const meetingRoom = await db.one(
      "SELECT * FROM meeting_rooms WHERE id = $1",
      id,
    );
    return { success: true, payload: meetingRoom };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const addMeetingRoom = async (room) => {
  const { name, capacity, floor } = room;
  try {
    const newMeetingRoom = await db.one(
      "INSERT INTO meeting_rooms (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *",
      [name, capacity, floor],
    );
    return { success: true, payload: newMeetingRoom };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateMeetingRoom = async (id, room) => {
  const { name, capacity, floor } = room;
  try {
    const updatedMeetingRoom = await db.one(
      "UPDATE meeting_rooms SET name = $1, capacity = $2, floor = $3 WHERE id = $4 RETURNING *",
      [name, capacity, floor, id],
    );
    return { success: true, payload: updatedMeetingRoom };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteMeetingRoom = async (id) => {
  try {
    const deletedMeetingRoom = await db.one(
      "DELETE FROM meeting_rooms WHERE id = $1 RETURNING *",
      id,
    );
    return { success: true, payload: deletedMeetingRoom };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllMeetingRooms,
  getMeetingRoom,
  addMeetingRoom,
  updateMeetingRoom,
  deleteMeetingRoom,
};
