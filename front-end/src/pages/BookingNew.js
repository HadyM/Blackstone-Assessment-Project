import BookingNewForm from "../components/BookingNewForm";

function BookingNew({ addBooking }) {
  return (
    <div className="NewBookingForm">
      <h1>New Booking Form</h1>
      <BookingNewForm addBooking={addBooking} />
    </div>
  );
}

export default BookingNew;
