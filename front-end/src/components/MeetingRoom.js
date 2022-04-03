import { Link } from "react-router-dom";

function MeetingRoom({ rooms }) {
  return (
    <tr>
      <td>
        <Link to={`/meetingRooms/${rooms.id}`}>
          <h4>{rooms.name}</h4>
        </Link>
      </td>
      <td>
        <h4>{rooms.floor}</h4>
      </td>
      <td>
        <h4>{rooms.capacity}</h4>
      </td>
    </tr>
  );
}

export default MeetingRoom;
