import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import docgest from "../assets/img/Projects/docgest.png";
import webdocgest from "../assets/img/Projects/webdocgest.png";
import web3 from "../assets/img/Projects/web3.png";
import locgest from "../assets/img/Projects/locgest.png";
import corunner from "../assets/img/Projects/Corunner.png";
import webmovies from "../assets/img/Projects/webmovies.png";
import colorShape from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsCont = [
    {
      title: "Gestion domainecar",
      description:
        "windows desktop application that manage cars in a car rent company",
      imgUrl: locgest,
    },
    {
      title: "Getwell",
      description:
        "web application that help patients take appointements in a doctor's office",
      imgUrl: webdocgest,
    },
    {
      title: "Corunner",
      description: "a desktop game developed using c#",
      imgUrl: corunner,
    },
    {
      title: "getwell desktop",
      description:
        "a desktop windows application that manage patients inside a doctor's office",
      imgUrl: docgest,
    },
    {
      title: "etherium sender",
      description:
        "a web 3.0 application that provide ethrium owners to recieve and send etherium",
      imgUrl: web3,
    },
    {
      title: "MovisLand",
      description: "a movies and series review web appliction",
      imgUrl: webmovies,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              these are the projects i have built since my programming journey
              started
            </p>
            <Row>
              {projectsCont.map((project, i) => {
                return <ProjectCard key={i} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img src={colorShape} alt="" className="background-image-right" />
    </section>
  );
};
