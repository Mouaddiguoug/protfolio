import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mouad-diguoug-066105252">
                <img src={NavIcon1} />
              </a>
              <a href="https://www.facebook.com/van.mouad">
                <img src={NavIcon2} />
              </a>
              <a href="https://instagram.com/dev_mouad67?igshid=YmMyMTA2M2Y=">
                <img src={NavIcon3} />
              </a>
            </div>
            <p>CopyRight 2022. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
