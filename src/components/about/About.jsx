import "./About.css";
import Title from "../../constants/titles/Title";
import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import { FaSearchengin, FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiRedux,
} from "react-icons/si";
import {
  DiCss3,
  DiJavascript,
  DiReact,
  DiSass,
  DiGit,
  DiTerminal,
} from "react-icons/di";
import Aos from "aos";
import "aos/dist/aos.css";

import Icons from "../../constants/icons/Icons";

function About() {
  return (
    <section className="About__section" id="About">
      <div className="About__section-header">
        <Title Title="ABOUT ME" />
        <p className="About__section-sub">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="About__section-content">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="About__section-main">
          <h1>Learn about me!</h1>
          <p>
            Hello and welcome to my profile, I am a{" "}
            <strong>Front End Web Developer</strong> with a lot of experience in
            web design. if you are looking for an outstanding developer who can
            handle any task with honesty and professionalism then feel free to{" "}
            <a href="#Contact">contact me</a> anytime
          </p>
          <p>
            {" "}
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <a href="#Contact">contact me</a>.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="About__section-skills">
          <h1 className="About__section-skills-header"> My Skills</h1>
          <div
            data-aos="fade-laft"
            data-aos-anchor-placement="center-bottom"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
            className="About__section-skills-skills">
            <Icons
              icons={<AiFillHtml5 fill="#E96228" />}
              disc="HTML"
              className="icons"
            />
            <Icons
              icons={<DiCss3 fill="#2862E9" />}
              disc="CSS"
              className="icons"
            />
            <Icons
              icons={<DiJavascript fill="#F6D33A" />}
              disc="JavaScript"
              className="icons"
            />
            <Icons
              icons={<DiReact fill="#5ED3F3" />}
              disc="React"
              className="icons"
            />
            <Icons
              icons={<DiSass fill="#CF649B" />}
              disc="SASS"
              className="icons"
            />
            <Icons
              icons={<DiGit fill="#E84D31" />}
              disc="Git"
              className="icons"
            />
            <Icons
              icons={<AiOutlineGithub />}
              disc="GitHub"
              className="icons"
            />
            <Icons
              icons={<SiTypescript fill="#2F74C0" />}
              disc="Typescript"
              className="icons"
            />
            <Icons
              icons={<FaSearchengin fill="#364A5C" />}
              disc="SEO"
              className="icons"
            />
            <Icons
              icons={<FaBootstrap fill="#7510EC" />}
              disc="Bootstrap"
              className="icons"
            />
            <Icons
              icons={<SiTailwindcss fill="#35B3EB" />}
              style={{ color: "green" }}
              disc="Tailwind"
            />
            <Icons icons={<SiFlutter fill="#5BC2F0" />} disc="Flutter" />
            <Icons icons={<SiRedux fill="#7248B6" />} disc="Redux" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
