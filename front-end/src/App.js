import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";

import Home from "./pages/Home";
import Error from "./pages/Error";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_BASE = apiURL();

function App() {
  const [room, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/meetingRooms`)
      .then(
        (response) => {
          const { payload } = response.data;
          setRooms(payload);
        },
        (error) => console.log("get", error),
      )
      .catch((c) => console.warn("catch", c));
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
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
      {/* <h1>Hello World</h1>
      <ul>
        {room.map((booking) => (
          <li key={booking.id}>{booking.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
