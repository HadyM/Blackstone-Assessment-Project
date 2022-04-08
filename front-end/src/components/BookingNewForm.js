import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BookingNewForm(props) {
  let history = useHistory();

  const [booking, setBooking] = useState({
    meetingname: "",
    startdate: "",
    enddate: "",
    attendees: "",
  });

  const handleInputChange = (event) => {
    setBooking({ ...booking, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBooking(booking);
    props.history.push("/bookings");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="NewBooking">
      <Form onSubmit={handleSubmit} className="Form">
        <Form.Group>
          <Form.Label>Meeting Name</Form.Label>
          <Form.Control
            id="meetingname"
            type="text"
            value={booking.name}
            onChange={handleInputChange}
            placeholder="Enter Name of Meeting"
            required
          />
          <Form.Text className="text-muted">
            Please enter the Name of Meeting
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            id="startdate"
            type="datetime-local"
            value={booking.startdate}
            onChange={handleInputChange}
            placeholder="Enter Start Date"
            required
          />
          <Form.Text className="text-muted">
            Please enter the start date and time of the meeting
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            id="enddate"
            type="datetime-local"
            value={booking.enddate}
            onChange={handleInputChange}
            placeholder="Enter End Date"
            required
          />
          <Form.Text className="text-muted">
            Please enter the end date and time of the meeting
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Attendees</Form.Label>
          <Form.Control
            id="attendees"
            type="text"
            value={booking.attendees}
            onChange={handleInputChange}
            placeholder="Enter Number of Attendees"
          />
          <Form.Text className="text-muted">
            Please enter Number of Attendees
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

export default withRouter(BookingNewForm);
