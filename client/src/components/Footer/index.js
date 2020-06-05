import React from 'react';
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import "./style.css"

function Footer() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="bottom" id="footer" className="fluid"> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col>
                        <Nav className="mr-auto name">  
                            <h6>Hayley Budzinski</h6>         
                        </Nav>
                        <Row className="icon-row">
                            <Nav.Link className="github" href="https://github.com/hmbudzinski" target="blank"><i className="fa fa-github fa-x"></i>
                            </Nav.Link>
                            <Nav.Link className="linkedin" href="www.linkedin.com/in/hayley-budzinski" target="blank"><i className="fa fa-linkedin fa-x"></i>
                            </Nav.Link>
                        </Row>
                    </Col>

                </Navbar.Collapse>
            </Navbar> 
        </div>

    )
}
 export default Footer;