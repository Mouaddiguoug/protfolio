import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = ({ items, showTitle, title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className={showTitle ? "" : "d-none"}>skills</h2>
              <p className={showTitle ? "" : "d-none"}>
                these are the skills i have learnt over 3 years of web
                development education and a year of experience
              </p>
              <h4>{title}</h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-banner">
                {items.slice(0).map((item, itemsLength) => {
                  return (
                    <div className="item">
                      <img src={item.src} alt="" />
                      <h5>{item.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="" />
    </section>
  );
};
