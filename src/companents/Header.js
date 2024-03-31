import React from "react";
import img from "../img/f1_logo.svg";
import formula from "../img/f1-tv-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { SlUserFollow } from "react-icons/sl";
const Header = () => {
  return (
    <div id="header">
      <div id="heed">
      <div className="container">
      <div className="heed-hed">
      <div className="text">
      <img src={"https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png"} className="hed-img" alt="img" />
        <h3>F1®</h3>
        <h3>F2™</h3>
        <h3>F3™</h3>
        <h3>F1® ACADEMY</h3>
        </div>
        <div className="heed-nav">
        <Link>AUTHENTICS</Link>
        <Link>STORE</Link>
        <Link>TICKETS</Link>
        <Link>HOSPITALITY</Link>
        <Link>EXPERIENCES</Link>
        </div>
        <img src={formula} className="img-for" alt="img" />
        <div className="btns">
            <button className="btn-in">
              <SlUserFollow className="icon" /> SIGN IN
            </button>
            <button className="btn-up">SUBSCRIBE</button>
          </div>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <img src={img} alt="img" />
          <div className="header-nav">
            <Link>Latest</Link>
            <Link>Video</Link>
            <Link>F1 Unlocked</Link>
            <Link>Schedule</Link>
            <NavLink to={"/results"} className={"res"}>
              Results
            </NavLink>
            <NavLink to={"/"} className={"dri"}>
              Drivers
            </NavLink>
            <NavLink to={"/teams"} className={"tea"}>
              Teams
            </NavLink>
            <Link>Gaming</Link>
            <Link>Live Timing</Link>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
