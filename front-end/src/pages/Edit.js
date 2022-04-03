import MeetingRoomEditForm from "../components/MeetingRoomEditForm";

function Edit({ updateMeetingRoom, room }) {
  return (
    <div className="New Edit">
      <h1>Edit Meeting</h1>
      <MeetingRoomEditForm updateMeetingRoom={updateMeetingRoom} room={room} />
    </div>
  );
}

export default Edit;
