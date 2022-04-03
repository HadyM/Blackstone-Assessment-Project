import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function BookingEditForm(props) {
  let { id } = useParams();
  let history = useHistory();

  const [booking, setBookings] = useState({
    meetingname: "",
    startdate: "",
    enddate: "",
    attendees: "",
  });

  const handleInputChange = (event) => {
    setBookings({ ...booking, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBooking(booking, id);
    history.push("/bookings");
  };

  const handleCancel = () => {
    history.push(`/bookings/${id}`);
  };

  useEffect(() => {
    axios.get(`${API_BASE}/bookings/${id}`).then(
      (response) => {
        const { payload } = response.data;
        setBookings(payload);
      },
      (error) => {
        history.push("/not-found");
      },
    );
  }, [id, history]);

  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit} className="EditForm">
        <Form.Group>
          <Form.Label> Booking Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={booking.meetingname}
            onChange={handleInputChange}
            placeholder="Enter Name of Booking Room"
            required
          />
          <Form.Text className="text-muted">
            Please enter Name of Booking Room"
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            id="startdate"
            type="date"
            value={booking.startdate}
            onChange={handleInputChange}
            placeholder="Enter Date & Time"
            required
          />
          <Form.Text className="text-muted">
            Please enter Start Date & Time of Booking Room"
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            id="enddate"
            type="date"
            value={booking.enddate}
            onChange={handleInputChange}
            placeholder="Enter Date & Time"
            required
          />
          <Form.Text className="text-muted">
            Please enter End Date & Time of Booking Room"
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Attendees</Form.Label>
          <Form.Control
            id="attendees"
            type="text"
            value={booking.attendees}
            onChange={handleInputChange}
            placeholder="Enter Names of Attendees"
            required
          />
          <Form.Text className="text-muted">
            Please enter Names of Attendees
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        <Button variant="primary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default BookingEditForm;
