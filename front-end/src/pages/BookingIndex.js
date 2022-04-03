import Bookings from "../components/Bookings";

function BookingIndex({ booking }) {
  return (
    <div className="BookingIndex">
      <h1>Bookings</h1>
      <Bookings booking={booking} />
    </div>
  );
}

export default BookingIndex;
