import {
  BasicExample,
  Header,
  About,
  Projects,
  Contact,
  Footer,
} from "./components/index";
import "./App.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [scrollUp, setscrollUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setscrollUp(true);
      } else {
        setscrollUp(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {scrollUp && (
        <a href="#Home" className="arrow">
          <BsFillArrowUpCircleFill />
        </a>
      )}

      <BasicExample />
      <Header />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
