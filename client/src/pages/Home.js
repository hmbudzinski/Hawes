import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"
import MainNav from "../components/Nav";
import Footer from "../components/Footer"


function Home({page}) {

    return (
        <div>
        {/* <MainNav /> */}
            <div className="jumbotron jumbotron-fluid" id="landing">
            <div className="container">
                <h1 className="display-4 text-center">Hello, I'm Dan,</h1>
                <h1 className="display-4 text-center">I'm a full time Asian Vampires player.</h1>
                <h1 className="display-6 text-center text-white" id="thirdline">and sometimes I write things.</h1>
                <div id="btn-container">
                <Link id="linktowork" to="/Work"
                className={(page === "Work") ? "nav-link active" : "nav-link"}
                >Checkout My Work</Link>
                </div>
            </div>
            </div>
            {/* <Footer />     */}
        </div>
    )
}

export default Home;