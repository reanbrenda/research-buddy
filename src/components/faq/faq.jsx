import React from "react";
import { Accordion } from "react-bootstrap";
import "./faq.css";
import Fade from "react-reveal/Fade";

export default function Faq() {
  return (
    <div style={{ backgroundColor: "hsl(240, 100%, 99%)" }}>
      <div id="FAQ" className="FaqSection">
        <Fade top>
          <center>
            <h3 className="FaqTopic">Frequenty Asked Question</h3>
          </center>
        </Fade>
        <hr className="FaqLine" />
        <br />
        <Fade bottom>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Is the subscription to the platform free?
              </Accordion.Header>
              <Accordion.Body>
                Yes, it is free for an individual but inorder to invite more
                that three collaborators you will have to pay the subscription
                fee.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Is the subscription to the platform free?
              </Accordion.Header>
              <Accordion.Body>
                Yes, it is free for an individual but inorder to invite more
                that three collaborators you will have to pay the subscription
                fee.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Is the subscription to the platform free?
              </Accordion.Header>
              <Accordion.Body>
                Yes, it is free for an individual but inorder to invite more
                that three collaborators you will have to pay the subscription
                fee.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Is the subscription to the platform free?
              </Accordion.Header>
              <Accordion.Body>
                Yes, it is free for an individual but inorder to invite more
                that three collaborators you will have to pay the subscription
                fee.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Is the subscription to the platform free?
              </Accordion.Header>
              <Accordion.Body>
                Yes, it is free for an individual but inorder to invite more
                that three collaborators you will have to pay the subscription
                fee.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Is the subscription to the platform free?
              </Accordion.Header>
              <Accordion.Body>
                Yes, it is free for an individual but inorder to invite more
                that three collaborators you will have to pay the subscription
                fee.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Fade>
      </div>
    </div>
  );
}
