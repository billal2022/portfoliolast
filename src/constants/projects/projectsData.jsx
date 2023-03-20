import "./projectsData.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Data } from "../data.js/data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../button/Button";

export default function ProjectsData() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      {Data.map((b, i) => {
        return (
          <div className="Pdata__container" key={i}>
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              src={b.image}
              alt=""
            />
            <div className="Pdata__container-child">
              <h1
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-easing="ease-in-out"
                className="Pdata__container-title">
                {b.title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-easing="ease-in-out"
                className="Pdata__container-disc">
                {b.description}
              </p>
              <div className="Pdata__container-skills">
                {b.tags.map((t, i) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-out"
                      data-aos-anchor-placement="center-bottom"
                      className="Pdata__container-skills-childs"
                      key={i}>
                      {t}
                    </div>
                  );
                })}
              </div>
              <div className="Pdata__container-btns">
    
                  <Button  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="center-bottom"
                   Button="Code" href={b.visit} target="_blank" />
           
                <a className="noselect" href={b.source} target="_blank">
                  <button
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="800"
                    className="btntwo">
                    Source
                    <MdArrowForwardIos />
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
