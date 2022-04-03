import BookingEditForm from "../components/BookingEditForm";

function BookingEdit({ updateBooking, booking }) {
  return (
    <div className="New Edit Booking">
      <h1>Edit Booking</h1>
      <BookingEditForm updateBooking={updateBooking} booking={booking} />
    </div>
  );
}

export default BookingEdit;
