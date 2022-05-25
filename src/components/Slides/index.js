import React from "react";
import { Carousel } from "react-bootstrap";
import Boats from "../../img/boats.jpg";
import Marsh from "../../img/marsh.jpg";

import Abstract from "../../img/abstract.jpg";
import { Col, Row } from "react-bootstrap";
import "./style.css";

function Slides() {

    return (
      <div>
        <Row className="h-responsive w-responsive text-center mx-auto p-3 mt-2">

          <Col className="justify-content-md-center">
          <Carousel id="caro" className="mx-auto">
  <Carousel.Item>
    <img
      className="fluid justify-content-center"
      id="pic"
      src={Boats}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Boats</h3>
      <h7>View Collection</h7>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="responsive justify-content-center"
      id="pic"
      src={Abstract}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Abstracts</h3>
      <h7>View Collection</h7>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="responsive justify-content-center"
      id="pic"
      src={Marsh}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Landscape</h3>
      <h7>View Collection</h7>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
          </Col>
        </Row>

      </div>
        
    )
}

export default Slides;