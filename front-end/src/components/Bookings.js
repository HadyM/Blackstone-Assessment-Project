import Booking from "./Booking";
import Table from "react-bootstrap/Table";

function Bookings({ booking }) {
  return (
    <div className="Bookings">
      <section>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Meeting Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Attendees</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((bookings) => {
              return <Booking bookings={bookings} key={bookings.id} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Bookings;
