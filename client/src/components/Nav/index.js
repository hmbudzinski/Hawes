import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "../../styles/main.css"

function MainNav({ page }) {

    return (

        <Navbar id="mainNav" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Dan Hawes Portfolio</Navbar.Brand>
            </Container>
                <Navbar.Toggle />

            <Container>
                    <Navbar.Collapse className="justify-content-end">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Home"
                                className={(page === "Home") ? "nav-link active" : "nav-link"}
                                >Home</Link>
                            </li>
                        </ul>
                    </div>

            
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Work"
                                className={(page === "Work") ? "nav-link active" : "nav-link"}
                                >My Work</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Contact"
                                className={(page === "Contact") ? "nav-link active" : "nav-link"}
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>

                </Navbar.Collapse>
            </Container>

        </Navbar>


        // <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
        //   <div>
        //     <Link className="navbar-brand" to="/home">
        //       Dan Hawes
        //     </Link>
        //   </div>
    
        //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //   <span className="navbar-toggler-icon"></span>
        //   </button>
    
        //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
        //   <div>
        //     <ul className="navbar-nav">
        //       <li className="nav-item">
        //         <Link to="/Scenic"
        //         className={(page === "Scenic") ? "nav-link active" : "nav-link"}
        //         >The Scenic Route</Link>
        //       </li>
        //     </ul>
        //   </div>
    
        //   <div>
        //     <ul className="navbar-nav">
        //       <li className="nav-item">
        //         <Link to="/Contact"
        //         className={(page === "Contact") ? "nav-link active" : "nav-link"}
        //           >
        //               Contact</Link>
        //       </li>
        //     </ul>
        //   </div>
    
        //   <div>
        //     <ul className="navbar-nav">
        //       <li className="nav-item">
        //         <Link to="/Work"
        //         className={(page === "Work") ? "nav-link active" : "nav-link"}
        //           >Just the F@#%ING Work</Link>
        //       </li>
        //     </ul>
        //   </div>
        //   </div>
        // </nav>
      )
    }
    
    export default MainNav;