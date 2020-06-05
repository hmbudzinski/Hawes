import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../src/components/Nav";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Home from "./pages/Home";
// import Activities from "./pages/Activities";

function App () {

    return (
        <Router>
            <div> 
              <Nav />
            </div>
        </Router>
    )
}

export default App;