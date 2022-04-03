import { useState } from "react";
import { useParams } from "react-router-dom";
import MeetingRoomDetails from "../components/MeetingRoomDetails";

function Show({ room }) {
  let { id } = useParams();
  const [rooms] = useState(room[id]);
  return (
    <div className="Show">
      <h1>Meeting Room Details</h1>
      <section>
        <MeetingRoomDetails room={rooms} />
      </section>
    </div>
  );
}

export default Show;
