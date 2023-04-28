import React from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";

const JumbotronCarousel = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Slide+1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Slide+2"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Slide+3"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Jumbotron>
  );
};

export default JumbotronCarousel;
