import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import TrackYourShipment from "./Components/TrackYourShipment";


function App() {
  
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<TrackYourShipment/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
