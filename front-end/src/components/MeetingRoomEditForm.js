import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function MeetingRoomEditForm(props) {
  let { id } = useParams();
  let history = useHistory();

  const [room, setRooms] = useState({
    name: "",
    capacityt: "",
    floor: "",
  });

  const handleInputChange = (event) => {
    setRooms({ ...room, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setRooms({
      ...room,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateMeetingRoom(room, id);
    history.push("/meetingRooms");
  };

  const handleCancel = () => {
    history.push(`/meetingRooms/${id}`);
  };

  useEffect(() => {
    axios.get(`${API_BASE}/meetingRooms/${id}`).then(
      (response) => {
        const { payload } = response.data;
        setRooms(payload);
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={room.name}
            onChange={handleInputChange}
            placeholder="Enter Name of Meeting Room"
            required
          />
          <Form.Text className="text-muted">
            Please enter Name of Meeting Room"
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Capacity</Form.Label>
          <Form.Control
            id="capacity"
            type="number"
            value={room.capacity}
            onChange={handleNumberChange}
            placeholder="Enter Number of People"
            required
          />
          <Form.Text className="text-muted">
            Please enter Number of People
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

export default MeetingRoomEditForm;
