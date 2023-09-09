import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./footer.css";
import { SocialIcon } from "react-social-icons";
import { FaArrowUp } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="FooterSection">
      <footer className="footer">
        <ScrollToTop
          component={<FaArrowUp />}
          style={{
            color: "#008dc9",
            fontSize: "30px",
            width: "0px",
            boxShadow: 'none',
            height: "0px",
            paddingBottom: "1em",
            paddingRight: "0.6em",
            backgroundColor: "transparent",
          }}
          smooth
        />
        <div className="container">
          {/* Assuming the footer section starts here */}
          <Fade bottom>
            <div className="footer-section">
              <div className="footer-col">
                <h4>Get Started</h4>
                <ul>
                <li>
                    <a href="#">Collaboration Platform</a>
                  </li>
                  <li>
                    <a href="#">Q&A Platform</a>
                  </li>
                  <li>
                    <a href="#">Document Repository</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Solutions</h4>
                <ul>
                <li>
                    <a href="#">Collaboration Platform</a>
                  </li>
                  <li>
                    <a href="#">Q&A Platform</a>
                  </li>
                  <li>
                    <a href="#">Document Repository</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#">Collaboration Platform</a>
                  </li>
                  <li>
                    <a href="#">Q&A Platform</a>
                  </li>
                  <li>
                    <a href="#">Document Repository</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Reach out to us</h4>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="google"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="linkedin"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="twitter"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    {" "}
                    <SocialIcon
                      network="instagram"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Fade>

          {/* Footer section ends here */}
          <Fade bottom>
            <div className="SubLandingPageFooter">
              <hr />
              <p className="textOne">
                COLLABORATION | Q&A | NEWS | COMMUNITY |
              </p>
              <p className="textTwo">
                © 2022 Copyright Research Buddy. All Rights Reserved.
              </p>
            </div>
          </Fade>
        </div>
      </footer>
    </div>
  );
}
