import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <Link className="navbar-brand" to="/home">
              Dan Hawes
            </Link>
          </div>
    
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                //   to="/home"
                //   className={
                //     (window.location.pathname === "/home")
                //       ? "nav-link active"
                //       : "nav-link"
                //   }
                >
                  Home
                  </Link>
              </li>
            </ul>
          </div>
    
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                // className={(page === "Cooking") ? "nav-link active" : "nav-link"}
                //   to={{
                //     pathname: "/activities",
                //     state: {
                //       category: 'Cooking'
                //     }
                //   }}
                >The Scenic Route</Link>
              </li>
            </ul>
          </div>
    
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                // className={(page === "Fitness") ? "nav-link active" : "nav-link"}
                //   to={{
                //     pathname: '/activities',
                //     state: {
                //       category: 'Fitness'
                //     }
                //   }}
                  >
                      Contact</Link>
              </li>
            </ul>
          </div>
    
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                // className={(page === "Random") ? "nav-link active" : "nav-link"}
                //   to={{
                //     pathname: '/activities',
                //     state: {
                //       category: 'Random'
                //     }
                //   }}
                  >Just the F@#%ING Work</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      )
    }
    
    export default Nav;