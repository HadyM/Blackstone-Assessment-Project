import MeetingRooms from "../components/MeetingRooms";

function Index({ room }) {
  return (
    <div className="Index">
      <h1>Meeting Rooms</h1>
      <MeetingRooms room={room} />
    </div>
  );
}

export default Index;
