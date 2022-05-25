import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";

function ConForm () {
    return (
        <div>
            <Row md="justify-content-center-md-center" id='ror'>
                <h1>Reach out</h1>
            <Col md={{ span: 6, offset: 3 }}>
            <form>
        <ul>
            <li>
                <label for="name"><span>Name <span class="required-star">*</span></span></label>
                <input type="text" id="name" name="user_name" />
            </li>
            <li>
                <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email" />
            </li>
            <li>
                <label for="msg"><span>Message</span></label>
                <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
                <input type="submit" />
            </li>
        </ul>
    </form>
</Col>

            </Row>

            </div>
    )
}

export default ConForm;