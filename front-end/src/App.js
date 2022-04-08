import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";

import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import BookingIndex from "./pages/BookingIndex";
import BookingShow from "./pages/BookingShow";
import BookingEdit from "./pages/BookingEdit";
import BookingNew from "./pages/BookingNew";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_BASE = apiURL();

function App() {
  const [room, setRooms] = useState([]);
  const [booking, setBooking] = useState([]);

  const addMeetingRoom = (newRoom) => {
    axios
      .post(`${API_BASE}/meetingRooms`, newRoom)
      .then((response) => {
        setRooms([...room, newRoom]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateMeetingRoom = (updatedMeetingRoom, id) => {
    axios.put(`${API_BASE}/meetingRooms/${id}`, updatedMeetingRoom).then(
      (response) => {
        const updateArray = [...room];
        updateArray[id] = updatedMeetingRoom;
        setRooms(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    axios.get(`${API_BASE}/meetingRooms`).then((response) => {
      const { payload } = response.data;
      setRooms(payload);
    });
  }, []);

  const addBooking = (newBooking) => {
    axios
      .post(`${API_BASE}/bookings`, newBooking)
      .then((response) => {
        setBooking([...booking, newBooking]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateBooking = (updatedBooking, id) => {
    axios.put(`${API_BASE}/bookings/${id}`, updatedBooking).then(
      (response) => {
        const updateArray = [...booking];
        updateArray[id] = updatedBooking;
        setBooking(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    axios.get(`${API_BASE}/bookings`).then((response) => {
      const { payload } = response.data;
      setBooking(payload);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/bookings/new">
              <BookingNew addBooking={addBooking} />
            </Route>
            <Route exact path="/bookings/:id/edit">
              <BookingEdit booking={booking} updateBooking={updateBooking} />
            </Route>
            <Route exact path="/meetingRooms">
              <Index room={room} />
            </Route>
            <Route path="/meetingRooms/new">
              <New addMeetingRoom={addMeetingRoom} />
            </Route>
            <Route exact path="/meetingRooms/:index">
              <Show room={room} />
            </Route>
            <Route path="/meetinRooms/:id/edit">
              <Edit room={room} updateMeetingRoom={updateMeetingRoom} />
            </Route>
            <Route exact path="/bookings">
              <BookingIndex booking={booking} />
            </Route>
            <Route path="/bookings/:index">
              <BookingShow booking={booking} />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
