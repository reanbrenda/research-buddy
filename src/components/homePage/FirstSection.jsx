import React from "react";
import "./firstsection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../../assets/images/Banner2.svg";
// images
import one from "../../assets/images/1.svg";
import two from "../../assets/images/2.svg";
import three from "../../assets/images/3.svg";
import four from "../../assets/images/4.svg";
import { RiDoubleQuotesL } from "react-icons/ri";
import bgImage from "../../assets/images/bg.png";
import Fade from "react-reveal/Fade";

export default function FirstSection() {
  return (
    <div style={{ backgroundColor: "hsl(240, 100%, 99%)" }}>
      <div className="FirstSection">
        <div className="row">
          {/* First Column */}
          <div className="col-6">
            <Fade top>
              <h2 className="bigtext">
                The
                <span style={{ color: "#008dc9" }}> FUTURE</span>
                <br />
                of medical research
              </h2>
            </Fade>
            <Fade top>
              <p className="smalltext">
                A platform that will enable Medical researchers and Medical
                research institutes to collaborate on their research on the
                various emerging issues in order to come to more informed
                conclusions. .{" "}
              </p>
            </Fade>
            <br />
            <Fade left>
              <a href="#" className="btn-letsgetstarted">
                Learn More
              </a>
              <br /> <br /> <br />
              <div className="row">
                <div className="col">
                  <img src={two} alt="logos" />
                </div>
                <div className="col">
                  <img src={one} alt="logos" />
                </div>
                <div className="col">
                  <img src={four} alt="logos" />
                </div>
                <div className="col">
                  <img src={three} alt="logos" />
                </div>
              </div>
            </Fade>
          </div>
          {/* Second Column */}
          <div className="col-6">
            <Fade right>
              <img className="bannerImg" src={banner} alt="banner" />
            </Fade>
            <Fade left>
              <div className="bottomSection" style={{ zIndex: "2" }}>
                <RiDoubleQuotesL className="quoteIcon" />

                <p className="quote">
                 No matter how good one organization is, we cannot solve the world's
                 problems in isolation. 
                </p>
                <p className="author">Kibet Brenda.</p>
                <p className="role">Software Developer </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
