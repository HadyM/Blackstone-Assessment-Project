import { Link } from "react-router-dom";

function Booking({ bookings }) {
  return (
    <tr>
      <td>
        <Link to={`/bookings/${bookings.id}`}>
          <h4>{bookings.meetingname}</h4>
        </Link>
      </td>
      <td>
        <h4>{bookings.startdate}</h4>
      </td>
      <td>
        <h4>{bookings.enddate}</h4>
      </td>
      <td>
        <h4>{bookings.attendees}</h4>
      </td>
    </tr>
  );
}

export default Booking;
