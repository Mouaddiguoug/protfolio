import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdatedActiveLink = (value) => {
    setActive();
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto height-full">
            <Nav.Link
              href="#home"
              className={
                active === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                active === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("skills")}>
              skills{" "}
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                active === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("projects")}>
              projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <a href="#contact">
              <button className="vvd" onClick={() => console.log("contact us")}>
                <span>contact us</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
