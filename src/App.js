import logo from "./logo.svg";
import "./App.css";
import { Skills } from "./Components/Skills";
import { NavBar } from "./Components/NavBar.js";
import { Banner } from "./Components/Banner.js";
import "bootstrap/dist/css/bootstrap.min.css";
import reactIcon from "./assets/img/skills-icons/reactIcon.svg";
import sassIcon from "./assets/img/skills-icons/sassIcon.svg";
import cssIcon from "./assets/img/skills-icons/cssIcon.svg";
import htmlIcon from "./assets/img/skills-icons/htmlIcon.svg";
import bootstrapIcon from "./assets/img/skills-icons/bootstrapIcon.png";
import tailwindIcon from "./assets/img/skills-icons/tailwindIcon.svg";
import nodejsIcon from "./assets/img/skills-icons/nodejsIcon.svg";
import expressIcon from "./assets/img/skills-icons/expressIcon.svg";
import netIcon from "./assets/img/skills-icons/netIcon.svg";
import mongodbIcon from "./assets/img/skills-icons/mongodbIcon.svg";
import neo4jIcon from "./assets/img/skills-icons/neo4jIcon.svg";
import sqlserverIcon from "./assets/img/skills-icons/sqlserverIcon.svg";
import { Projects } from "./Components/Projects";
import { SkillsContext } from "./Contexts/SkillsConext";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  const titles = ["Front End", "Back End", "Databases"];

  const frontItems = [
    { name: "ReactJS", src: reactIcon },
    { name: "Sass", src: sassIcon },
    { name: "Css", src: cssIcon },
    { name: "Html", src: htmlIcon },
    { name: "Tailwind", src: tailwindIcon },
    { name: "Bootstrap", src: bootstrapIcon },
  ];

  const backItems = [
    { name: "NodeJs", src: nodejsIcon },
    { name: "Express", src: expressIcon },
    { name: "ASP.net mvc", src: netIcon },
  ];

  const databaseItems = [
    { name: "MongoDb", src: mongodbIcon },
    { name: "Neo4j", src: neo4jIcon },
    { name: "sql Server", src: sqlserverIcon },
  ];

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills items={frontItems} showTitle={true} title={titles[0]} />
      <Skills items={backItems} showTitle={false} title={titles[1]} />
      <Skills items={databaseItems} showTitle={false} title={titles[2]} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
