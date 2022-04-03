import meetingRoomErrorTransparent from "../assets/meetingRoomErrorTransparent.png";

export default function Error() {
  return (
    <div className="error">
      <h1>Sorry, this page is not found! Please try again!</h1>
      <img
        src={meetingRoomErrorTransparent}
        alt="error"
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
}
