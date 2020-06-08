import React, { useState } from "react";
import MainNav from "../components/Nav";
import Footer from "../components/Footer"
import "../styles/main.css"
import TreeImage from "../styles/tree.jpg"
import { Card, CardGroup } from "react-bootstrap";


function FirstBank() {

    function cardHover(event){
        // const [isHover, setIsHover] = useState(false);
        // event.target.style.background = 'red';
    }

    return (
        <div id="homeID">
        <MainNav />
        <CardGroup className="CardGroup">
            <Card
            // onMouseEnter={() => setIsHover(true)} 
            // onMouseLeave={() => setIsHover(false)}
            // onMouseOver={cardHover} 
            // onMouseLeave={() => setIsHover(false)}
            >
                <Card.Img variant="top" src={TreeImage} className="workimage"/>
            </Card>

            <Card>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/327310469" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </Card>

            <Card>
                <Card.Img variant="top" src={TreeImage} className="workimage" />
            </Card>

            <Card>
                <Card.Img variant="top" src={TreeImage} className="workimage"/>
            </Card>
            </CardGroup>


            <CardGroup className="CardGroup">
            <Card>
                <Card.Img variant="top" src={TreeImage} className="workimage"/>
            </Card>

            <Card>
                <Card.Img variant="top" src={TreeImage} className="workimage" />
            </Card>

            <Card>
                <Card.Img variant="top" src={TreeImage} className="workimage"/>
            </Card>
            </CardGroup>
            <Footer />    
        </div>
    )
}

export default FirstBank;