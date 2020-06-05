import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App () {

    return (
        <Router>
              <div> 
                <Switch>
                    <Route exact path={["/","/Home"]} component={Home} />
                   
                    <Route exact path="/Contact" component={Contact} />
                     
                    <Route exact path="/Work" component={Work} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;