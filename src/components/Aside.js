import React from "react";
import logo from "../images/image 1.png";
import profile from "../images/Image.png";
import Monitoring from "./Monitoring.js";
const Aside = () => {
  return (
    <div className="container">
      <div className="first">
        <div className="menu">
          <img src={logo} alt="logo" />
          <ol className="navi">
            <li>Overview</li>
            <li>Onboarding</li>
            <li className="aside-active">Monitoring</li>
            <li>Flagging</li>
            <li>Source of Income</li>
            <li>UAR</li>
          </ol>
        </div>
        <div className="prof">
          <img src={profile} alt="profile" />
          <div className="profile-details">
            <p style={{ fontWeight: "500" }}>Elon Musk</p>
            <p style={{ color: "rgba(119, 118, 118, 1)", fontSize: "14px" }}>
              elon@twitter.com
            </p>
          </div>
        </div>
      </div>
      <div className="second">
        <Monitoring />
      </div>
    </div>
  );
};

export default Aside;
