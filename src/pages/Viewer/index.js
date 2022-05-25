import React from "react";
import MeOnWater from "../../img/abstract2.jpg";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interact from "../../components/Interact";
import "./style.css";

function Viewer () {

    const Interact = require('../../components/Interact');

    return (
        <div>

<Header />
        <div className="text-center" id="about">
            <Row id="aboot" className="align-items-center">
                <Col className="col-md-5 text-center">
                    <a href="/viewer"><img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img></a>
                </Col>
                <Col sm={7} id="biolo">
                    <h4 id="abtitle">About the Art</h4>
                   <Interact />
                    
                </Col>
            </Row>
        </div>
        <Footer />
        </div>
       
    )
}

export default Viewer;
