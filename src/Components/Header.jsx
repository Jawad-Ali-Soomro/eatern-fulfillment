import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [bg, setbg] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    {
      scrolling == true ? setbg("#37517e") : setbg("#111");
    }
    };
  }, []);
  return (
    <div className="header flex" style={{ background: `${scrolling == true ? "rgba(40, 58, 90, 0.9)" : "#37517e"}` , color:"white" }}>
      <a href="/" className="logo">
        Eastern <span>Fulfillment</span>
      </a>
      <div className="navs flex">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fulfillment</a>
          </li>
          <li>
            <a href="">FBA Prep</a>
          </li>
          <li>
            <a href="">Software</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
