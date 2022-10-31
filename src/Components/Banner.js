import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import bannerImg from "../assets/img/SVG/header-img.svg";

import { useEffect, useState } from "react";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={6}>
            <span className="tagline">
              This is where your thoughts can turn to software
            </span>
            <h1>
              {"hello, this is MOUAD and i am a "}
              <span className="text-gradient">{text}</span>
            </h1>
            <p>
              welcome to my portfolio, i do web developement and web design with
              the combination of these two things i can help you build your
              dream software
            </p>
            <a href="my latest cv.pdf" download="my latest cv.pdf">
              <button onClick={() => console.log("contact us")}>
                Download resume
                <AiOutlineDownload />
              </button>
            </a>
          </Col>
          <Col className="banner-3d" xs={12} md={6} xl={6}>
            <img src={bannerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
