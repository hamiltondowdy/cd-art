import React from "react";
import MeOnWater from "../../img/flower.jpg";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function About() {

    return (
        <div>

<Header />
        <div className="viewThree" id="about">
            <Row id="aboot">
                <Col id="pio">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </Col>
                <Col id="biolo">
                    <h3 className="viewTitle" id="aboutTitle">About the Artist</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">Celebrating vibrant color, contrast and form, Christina explores all types of subject matter. She is drawn to compositions highlighting depth, color, and dramatic highlights. Never content to remain unchallenged, her body of work has evolved to span the range of styles from abstraction to traditionally representational.

Christina grew up in Chapel Hill, NC and now resides in Charlotte, NC with her husband and family. A graduate of the University of North Carolina at Chapel Hill, Christina took many art history and studio art classes as an undergraduate. After continuing on to earn an MBA, Christina worked in the field of Marketing until taking the leap to become a full time artist in 1994. Christina has studied with Rita Alred, Andy Braitman, Stephen Early, Miriam Durkin and attended numerous artists' workshops and seminars. She also enjoys the tradition and challenge of ongoing life drawing classes.</p>
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </Col>
            </Row>
        </div>
        <Footer />
        </div>
       
    )
}

export default About;
