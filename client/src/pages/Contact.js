import React from "react";
import MainNav from "../components/Nav";
import Footer from "../components/Footer"
import { Container } from "react-bootstrap";
import "../styles/main.css"

function Home() {
    return (
        <div id="homeID">
            <MainNav />
            <Container id="contactDiv">
                <h1>Dan Hawes - Copywriter</h1>
                <hr></hr>
                <h4>Contact</h4>
                <h6><a href="mailto:Dhawes8989@gmail.com" id="email">Dhawes8989@gmail.com</a></h6>
                <h6>(719) 649-2535</h6>

                <h4>Experience</h4>
                <h6>Copywriter at TDA_Boulder: 2017-Current</h6>
                <h6>A bunch of other random jobs </h6>

                <h4>Education</h4>
                <h6>Portfolio Studio at San Diego</h6>
                <h6>Copywriting Summer Internship at TDA_Boulder</h6>
                <h6>Bachelors in Advertising from the University of Colorado</h6>
                <h6>Graphic Design Summer Internship at BBDS Endurance Sports</h6>
                
                <h4>Awards</h4>
                <h6>Gold Addy - National</h6>
                <h6>Gold Addy - Divisional</h6>
                <h6>Bronze Addy - Local, San Diego</h6>
                <h6>Denver One Show - Silver</h6>
                <h6>Denver One Show - Bronze</h6>
                <h6>Denver One Show - Bronze</h6>
                <h6>Denver One Show - Silver</h6>
                <h6>Denver One Show - Silver</h6>

            </Container>
            <Footer />    
        </div>
    )
}

export default Home;