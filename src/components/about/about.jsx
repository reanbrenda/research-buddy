import React from "react";
import { BsAward, BsBook } from "react-icons/bs";
import "./about.css";
import { FaUserFriends } from "react-icons/fa";
import {
  BsQuestionDiamondFill,
  BsCaretRightFill,
  BsFillPinFill,
} from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import banner from "../../assets/images/Banner3.svg";
import banner2 from "../../assets/images/Banner1.svg";
import CircleBlink from "react-circle-blink";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div id="about" style={{ backgroundColor: "hsl(240, 100%, 99%)" }}>
      <div id="About" className="AboutSection">
        <>
          <Row>
            <Col>
              <div className="card">
                <div className="card-body">
                  <h3 style={{ color: "#008dc9", textAlign: "center" }}>
                    <BsAward />{" "}
                    <CountUp
                      style={{ fontSize: "18px" }}
                      start={0.4}
                      decimals={1}
                      duration={5}
                      end={9.8}
                    />
                    <span style={{ fontSize: "18px" }}>/10</span>
                  </h3>
                  <p style={{ textAlign: "center" }}> Average Quality Score</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
                <div className="card-body">
                  <h3 style={{ color: "#008dc9", textAlign: "center" }}>
                    <IoMdTrophy />
                    <CountUp
                      style={{ fontSize: "18px" }}
                      duration={5}
                      end={100}
                    />
                    %, <br />
                  </h3>
                  <center>
                    {" "}
                    <p>Ease of use</p>
                  </center>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
                <div className="card-body">
                  {" "}
                  <h3 style={{ color: "#008dc9", textAlign: "center" }}>
                    <FaUserFriends />{" "}
                    <CountUp
                      style={{ fontSize: "18px" }}
                      duration={5}
                      end={149}
                    />{" "}
                    <br />
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Our Clients{" "}
                    <CircleBlink
                      style={{ height: "15px", width: "15px" }}
                      color="green"
                    />
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
                <div className="card-body">
                  {" "}
                  <h3 style={{ color: "#008dc9", textAlign: "center" }}>
                    {" "}
                    <BsBook />
                    <span> </span>
                    <CountUp
                      style={{ fontSize: "18px" }}
                      duration={5}
                      end={651}
                    />
                  </h3>
                  <p style={{ textAlign: "center" }}> Past Research</p>
                </div>
              </div>
            </Col>
          </Row>
        </>
        <br /> <br />
        <section className="aboutSection">
          <h2 className="h2 section-title">About Us</h2>

          <p className="section-text">
            We are teams of innovators who believe in the potential of
            technology especially in the field of health. As a result we came up
            with the Research Buddy Innovation.
          </p>

          <div className="container1">
            <div className="about-content">
              <div className="about-icon">
                <BsQuestionDiamondFill />
              </div>

              <h2 className="h2 about-title">Why Choose Us ?</h2>

              <p className="about-text">
                We offer unlimited services to streamline your research process
                and give you an stepping stone in the process.
              </p>
            </div>

            <ul className="about-list">
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <img src={banner2} alt="svg" widht="34" height="34px" />
                  </div>

                  <h3 className="h3 card-title"> Collaboration Platform</h3>

                  <p className="card-text">
                    Collaborate with like minded individuals in your research
                    process to make the research that you are undertaking a
                    reality!.
                  </p>
                </div>
              </li>

              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <img src={banner2} alt="svg" widht="34" height="34px" />
                  </div>

                  <h3 className="h3 card-title"> Q&A Platform</h3>

                  <p className="card-text">
                    Get to ask and answer pressing questions regarding health
                    and drug discovery.
                  </p>
                </div>
              </li>

              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <img
                      src={banner2}
                      alt="svg"
                      widht="34"
                      height="34px"
                      className="rediish"
                    />
                  </div>

                  <h3 className="h3 card-title">Document Repository</h3>

                  <p className="card-text">
                    Get access to top past research that will aid in your
                    research process.
                  </p>
                </div>
              </li>

              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <img src={banner2} alt="svg" widht="34" height="34px" />
                  </div>

                  <h3 className="h3 card-title"> Mentorship</h3>

                  <p className="card-text">
                    {" "}
                    The junior researchers will get an opportunity to be mentored by senior researchers. 
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <br />
        {/* Why we are the best */}
        <section className="features2" id="products">
          <div className="container2">
            <h2 className="h2 section-title">Explore Features</h2>

            <p className="section-text">
              To develop the platform we worked closely with medical researchers
              to understand their challenges and we innovated around it.
            </p>
            <br />
            <div className="features2-wrapper">
              <figure className="features2-banner">
                <img src={banner2} width="80%" alt="svg" />
              </figure>

              <div className="features2-content">
                <p className="features2-content-subtitle">
                  <BsFillPinFill style={{ color: "#008dc9" }} />

                  <span>SEAMLESS PROCESS</span>
                </p>

                <h3 className="features2-content-title">
                  <strong>Every research has it's story</strong>
                </h3>

                <p className="features2-content-text">
                  Every research has it's story. The ups and the downs and we
                  understand that the roady in sometime bumby during the
                  research journey and that is why we want to be part of the
                  journey you are undertaking to ease the process. We tend to
                  achieve that through:
                </p>

                <ul className="features2-list">
                  <li className="features2-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#008dc9" }} />
                      Collaborate with like minded individuals in your research
                      process to make the research that you are undertaking a
                      reality!.
                    </p>
                  </li>

                  <li className="features2-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#008dc9" }} />
                      Collaborate with like minded individuals in your research
                      process to make the research that you are undertaking a
                      reality! .
                    </p>
                  </li>
                  <li className="features2-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#008dc9" }} />
                      Collaborate with like minded individuals in your research
                      process to make the research that you are undertaking a
                      reality!
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="features2-wrapper">
              <figure className="features2-banner">
                <img src={banner} width="80%" alt="svg" />
              </figure>

              <div className="features2-content">
                <p className="features2-content-subtitle">
                  <BsFillPinFill style={{ color: "#008dc9" }} />

                  <span>UNLIMITED MODULES</span>
                </p>

                <h3 className="features2-content-title">
                  <strong>
                  Every research has it's story.
                  </strong>
                </h3>

                <p className="features2-content-text">
                <p className="features2-content-text">
                  Every research has it's story. The ups and the downs and we
                  understand that the roady in sometime bumby during the
                  research journey and that is why we want to be part of the
                  journey you are undertaking to ease the process. We tend to
                  achieve that through:
                </p>
                </p>

                <ul className="features2-list">
                  <li className="features2-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#008dc9" }} />
                      Collaborate with like minded individuals in your research
                      process to make the research that you are undertaking a
                      reality!.
                    </p>
                  </li>

                  <li className="features2-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#008dc9" }} />
                      Collaborate with like minded individuals in your research
                      process to make the research that you are undertaking a
                      reality! .
                    </p>
                  </li>
                  <li className="features2-list-item">
                    <p>
                      <BsCaretRightFill style={{ color: "#008dc9" }} />
                      Collaborate with like minded individuals in your research
                      process to make the research that you are undertaking a
                      reality!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end */}
      </div>
    </div>
  );
}
