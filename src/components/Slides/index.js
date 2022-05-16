import React from "react";
import { Carousel } from "react-bootstrap";
import Boats from "../../img/boats.jpg";
import Marsh from "../../img/marsh.jpg";
import Flower from "../../img/flower.jpg";
import "./style.css";

function Slides() {

    return (
        <Carousel id="caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="pic"
      src={Boats}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Commissions</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="pic"
      src={Flower}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Still Life</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id="pic"
      src={Marsh}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Landscape</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slides;