import React from "react";
import ProjectsData from "../../constants/projects/projectsData";
import Title from "../../constants/titles/Title";
import { SiFrontendmentor } from "react-icons/si";

import "./Projects.css";

export default function Projects() {
  return (
    <section className="App__Projects" id="Projects">
      <div className="App__Projects-title">
        <div className="App__Projects-h">
          <Title Title={"PROJECTS"} />
        </div>
        <p className="App__Projects-p">
          Here you will find some of the personal and Frontend mentor projects
          that I created with each project containing its own case study.
        </p>
      </div>
      <ProjectsData />
      <a
        className="App__Projects-link"
        rel="noreferrer"
        target={"_blank"}
        href="https://www.frontendmentor.io/profile/billal2022">
        <button>
          SEE MORE IN FRONTENDMENTOR
          <SiFrontendmentor className="icon" />
        </button>
      </a>
    </section>
  );
}
