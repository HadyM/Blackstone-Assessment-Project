import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function BookingDetails(props) {
  const [booking, setBookings] = useState([]);

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.get(`${API_BASE}/bookings/${index}`).then((response) => {
      const { payload } = response.data;
      setBookings(payload);
    });
  }, [index, history]);

  return (
    <div>
      <h2>
        Meeting Name:{" "}
        <span>
          <h4>{booking.meetingname}</h4>
        </span>
      </h2>
      <h2>
        Start Date:{" "}
        <span>
          <h4>{booking.startdate}</h4>
        </span>
      </h2>
      <h2>
        End Date:{" "}
        <span>
          <h4>{booking.enddate}</h4>
        </span>
      </h2>
      <h2>
        Attendees:{" "}
        <span>
          <h4>{booking.attendees}</h4>
        </span>
      </h2>

      <div className="showNavigation">
        <div>
          <Link to={`/bookings`}>
            <button>Back</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to={`/bookings/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}

export default withRouter(BookingDetails);
