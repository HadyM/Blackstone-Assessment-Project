import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import meetingRoomErrorTransparent from "../assets/meetingRoomErrorTransparent.png";

export default function NavBar() {
  return (
    <Nav className="NavBar Theme">
      <Nav.Item className="logo">
        <Link to="/">
          <img
            src={meetingRoomErrorTransparent}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <button>
          <h4>
            <Link to="/meetingRooms">Meeting Rooms</Link>
          </h4>
        </button>
      </Nav.Item>
      <Nav.Item>
        <button>
          <h4>
            <Link to="meetingRooms/new">New Room</Link>
          </h4>
        </button>
      </Nav.Item>
      <Nav.Item>
        <button>
          <h4>
            <Link to="/bookings">Bookings</Link>
          </h4>
        </button>
      </Nav.Item>
      <Nav.Item>
        <button>
          <h4>
            <Link to="/bookings/new">New Bookings</Link>
          </h4>
        </button>
      </Nav.Item>
    </Nav>
  );
}
