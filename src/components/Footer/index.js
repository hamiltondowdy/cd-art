import React from "react";
import Socials from "../Socials";
import { Col, Row } from "react-bootstrap";
import "./style.css";

function Footer () {
    return (

        <div>
            <Row className="justify-content-md-center" id="ra">
    <Col xs lg="5">
        <div className="soc">
        <Socials />
        </div>
    </Col>
  </Row>
        

</div>


        
    )
}

export default Footer;