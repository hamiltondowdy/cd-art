import React from "react";
import Socials from "../Socials";
import { Row, Col } from "react-bootstrap";
import "./style.css";

function Footer () {
    return (
        <div>
            <Row className="justify-content-center">
                <Col className="colly">
                    <Socials />
                </Col>
            </Row>
        </div>
    )
}

export default Footer;