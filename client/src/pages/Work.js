import React from "react";
import MainNav from "../components/Nav";
import Footer from "../components/Footer"
import "../styles/main.css"
import TreeImage from "../styles/tree.jpg"
import { Card, CardGroup } from "react-bootstrap";


function Home() {
    return (
        <div id="homeID">
        <MainNav />
        <CardGroup className="CardGroup">
            <Card>
                <Card.Img variant="top" src={TreeImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={TreeImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={TreeImage} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>

            <Footer />    
        </div>
    )
}

export default Home;