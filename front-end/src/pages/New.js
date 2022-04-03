import MeetingRoomNewForm from "../components/MeetingRoomNewForm";

function New({ addMeetingRoom }) {
  return (
    <div className="NewForm">
      <h1>New Meeting Room</h1>
      <MeetingRoomNewForm addMeetingRoom={addMeetingRoom} />
    </div>
  );
}

export default New;
