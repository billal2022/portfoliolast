import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const BasicExample = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [menu_class, setMenuClass] = useState("links hidden");
  const [checked, setopen] = useState(false);
  const [scrollEffect, setscrollEffect] = useState(false);
  const menuRef = useRef();
  //humburgar toggle
  const HandleChange = () => {
    setopen(!checked);
  };
  //Navbar change color
  useEffect(() => {
    const Changebg = () => {
      const COLOR_CHANGE_THRESHOLD = 90;

      if (window.scrollY >= COLOR_CHANGE_THRESHOLD && scrollEffect !== true) {
        setscrollEffect(true);
      }
      if (window.scrollY < COLOR_CHANGE_THRESHOLD && scrollEffect !== false) {
        setscrollEffect(false);
      }
    };

    window.addEventListener("scroll", Changebg);
  });
  //exit when clicked outside the navbar
  useEffect(() => {
    const handlemenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsMenuClicked(false);
        setMenuClass("links hidden");
        setopen(false);
      }
    };
    document.addEventListener("mousedown", handlemenu);
    return () => {
      document.removeEventListener("mousedown", handlemenu);
    };
  });

  //toggling function
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("links visible");
      setopen(checked);
    } else {
      setMenuClass("links hidden");
      setopen(!checked);
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav
      ref={menuRef}
      className={scrollEffect ? "app__navbar scroll" : "app__navbar"}>
      <div className="app__navbar-logo">
        <span className="icon-atom logo"></span>
        <a href="#Home" className="app__navbar-title">BILLAL TADJINE</a>
      </div>

      <label className="hamburger">
        <input
          type="checkbox"
          checked={checked}
          onChange={HandleChange}
          onClick={updateMenu}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>

      <ul ref={menuRef} className={menu_class}>
        <li className="p__opensans">
          <Link  spy={true} onClick={updateMenu} to="Home">
            Home
          </Link>
        </li>
        <li className="p__opensans">
          <Link offset={-30} spy={true} onClick={updateMenu} to="About">
            About
          </Link>
        </li>
        <li className="p__opensans">
          <Link offset={-30} spy={true} onClick={updateMenu} to="Projects">
            Projects
          </Link>
        </li>
        <li className="p__opensans">
          <Link offset={-30} spy={true} onClick={updateMenu} to="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BasicExample;
