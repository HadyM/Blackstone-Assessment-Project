import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MeetingRoomNewForm(props) {
  let history = useHistory();

  const [room, setRoom] = useState({
    name: "",
    capacity: "",
    floor: "",
  });

  const handleInputChange = (event) => {
    setRoom({ ...room, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setRoom({
      ...room,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMeetingRoom(room);
    props.history.push("/meetingRooms");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="New">
      <Form onSubmit={handleSubmit} className="Form">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={room.name}
            onChange={handleInputChange}
            placeholder="Enter Name of Room"
            required
          />
          <Form.Text className="text-muted">Please enter Room Name</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Capacity</Form.Label>
          <Form.Control
            id="capacity"
            type="number"
            value={room.capacity}
            onChange={handleInputChange}
            placeholder="Enter Capacity"
            required
          />
          <Form.Text className="text-muted">
            Please enter Number of Occupants
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Floor</Form.Label>
          <Form.Control
            id="floor"
            type="number"
            value={room.floor}
            onChange={handleNumberChange}
            placeholder="Enter Floor Number"
            required
          />
          <Form.Text className="text-muted">
            Please enter Floor Number
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

export default withRouter(MeetingRoomNewForm);
