import MeetingRoom from "./MeetingRoom";
import Table from "react-bootstrap/Table";

function MeetingRooms({ room }) {
  return (
    <div className="MeetingRooms">
      <section>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Capacity</th>
              <th>Floor</th>
            </tr>
          </thead>
          <tbody>
            {room.map((rooms) => {
              return <MeetingRoom rooms={rooms} key={rooms.id} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default MeetingRooms;
