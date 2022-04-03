const express = require("express");
const meetingRooms = express.Router();
const {
  getAllMeetingRooms,
  getMeetingRoom,
  addMeetingRoom,
  updateMeetingRoom,
  deleteMeetingRoom,
} = require("../queries/meetingRooms.js");

meetingRooms.get("/", async (req, res) => {
  const allMeetingRooms = await getAllMeetingRooms();
  res.json(allMeetingRooms);
});

meetingRooms.get("/:id", async (req, res) => {
  const { id } = req.params;
  const meetingRoom = await getMeetingRoom(id);
  res.json(meetingRoom);
});

meetingRooms.post("/", async (req, res) => {
  const createdRoom = await addMeetingRoom(req.body);
  res.json(createdRoom);
});

meetingRooms.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedRoom = await updateMeetingRoom(id, req.body);
  res.json(updatedRoom);
});

meetingRooms.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRoom = await deleteMeetingRoom(id);
  res.json(deletedRoom);
});

module.exports = meetingRooms;
