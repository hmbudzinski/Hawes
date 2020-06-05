import React from "react";
import MainNav from "../components/Nav";
import Footer from "../components/Footer"
import { Container } from "react-bootstrap";


function Home() {
    return (
        <div id="homeID">
            <MainNav />
            <Container>
                <h1>Dan Hawes - Copywriter</h1>

                <h4>Contact</h4>
                <h6> Dhawes8989@gmail.com</h6>
                <h6> 719-649-2535</h6>

                
            </Container>
            <Footer />    
        </div>
    )
}

export default Home;