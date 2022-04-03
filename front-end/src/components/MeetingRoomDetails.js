import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function MeetingRoomDetails(props) {
  const [room, setRooms] = useState([]);

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.get(`${API_BASE}/meetingRooms/${index}`).then((response) => {
      const { payload } = response.data;
      setRooms(payload);
    });
  }, [index, history]);

  return (
    <div>
      <h2>
        Name:{" "}
        <span>
          <h4>{room.name}</h4>
        </span>
      </h2>
      <h2>
        Capacity:{" "}
        <span>
          <h4>{room.capacity}</h4>
        </span>
      </h2>
      <h2>
        Floor:{" "}
        <span>
          <h4>{room.floor}</h4>
        </span>
      </h2>

      <div className="showNavigation">
        <div>
          <Link to={`/meetingRooms`}>
            <button>Back</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to={`/meetinRooms/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}

export default withRouter(MeetingRoomDetails);
