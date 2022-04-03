import { useState } from "react";
import { useParams } from "react-router-dom";
import BookingDetails from "../components/BookingDetails";

function BookingShow({ booking }) {
  let { id } = useParams();
  const [bookings] = useState(booking[id]);
  return (
    <div className="BookingShow">
      <h1>Booking Details</h1>
      <section>
        <BookingDetails booking={bookings} />
      </section>
    </div>
  );
}

export default BookingShow;
