import React from "react";
import MainNav from "../components/Nav";
import Footer from "../components/Footer"
import "../styles/main.css"
import TreeImage from "../styles/tree.jpg"
// import NerdImage from "../../styles/two.PNG"
// import WeatherImage from "../../styles/three.PNG"
// import BudgetImage from "../../styles/four.PNG"


function Home() {
    return (
        <div id="homeID">
            <MainNav />
        <hr id="breakline"></hr>
        <div className="jumbotron">
        <div className="row" id="workcontainer">
        <div className="card shadow-drop-2-center">
            <img src={TreeImage} className="card-img-top workimages" alt="quarantivities"></img>
            <div className="card-body">
                <h5 className="card-title">Quarantivities</h5>
            </div>
        </div>
        <div className="card shadow-drop-2-center">
            <img src={TreeImage} className="card-img-top workimages" alt="Weather"></img>
            <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
            </div>
        </div>

        <div className="card shadow-drop-2-center">
            <img src={TreeImage} className="card-img-top workimages" alt="Budget"></img>
            <div className="card-body">
                <h5 className="card-title">Budget-Tracker</h5>
            </div>
        </div>
        <div className="card shadow-drop-2-center">
            <img src={TreeImage} className="card-img-top workimages" alt="Nerdify"></img>
            <div className="card-body">
                <h5 className="card-title">Nerdify</h5>
            </div>
        </div>
        </div>
        </div>

            <Footer />    
        </div>
    )
}

export default Home;