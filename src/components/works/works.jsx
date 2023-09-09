import React from "react";
import { Row, Col } from "react-bootstrap";
import "./works.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BsFillPersonPlusFill,
  BsFillPeopleFill,
  BsLaptop,
  BsCheckAll,
} from "react-icons/bs";
import Fade from "react-reveal/Fade";

export default function Works() {
  return (
    <div style={{ backgroundColor: "hsl(240, 100%, 99%)" }}>
    <div id="works" className="WorkSection">
      <Fade top>
        <h3 className="WorkSectionTitle">How it works</h3>
        <hr className="worksection-line" />
      </Fade>
      <VerticalTimeline lineColor="#005987">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            color: "#000",
            lineColor: "black",
            border: "2px solid  rgb(0,141,201)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,141,201)" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(0,141,201)" }}
          iconStyle={{ background: "rgb(0,141,201)", color: "#fff" }}
          icon={<BsFillPersonPlusFill />}
        >
          <h5 className="vertical-timeline-element-title">Authentication</h5>

          <p className="extraInfo">
            Researcher who is the Project owner, registers/logins in the system.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          lineColor="black"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0,141,201)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,141,201)" }}
          iconStyle={{ background: "rgb(0,141,201)", color: "#fff" }}
          icon={<BsFillPeopleFill />}
        >
          <h5 className="vertical-timeline-element-title">Project SetUp</h5>

          <p className="extraInfo">
            Creates a new project with information such as the name of the
            project( Innovative approaches for cancer treatment), chooses
            whether it is private or public project and initializes the project
            with a readme file.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          lineColor="black"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0,141,201)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,141,201)" }}
          iconStyle={{ background: "rgb(0,141,201)", color: "#fff" }}
          icon={<BsLaptop />}
        >
          <h5 className="vertical-timeline-element-title">Set Up the team</h5>

          <p className="extraInfo">
            Project owner invites the collaborators and set ups different
            working directories for each contributor and the cards that will be
            moved depending on the progress on the assigned task (Progress
            tracking tool).{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          lineColor="black"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0,141,201)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,141,201)" }}
          iconStyle={{ background: "rgb(0,141,201)", color: "#fff" }}
          icon={<BsCheckAll />}
        >
          <h5 className="vertical-timeline-element-title">
            Merging of work done
          </h5>

          <p className="extraInfo">
            Every team member works on each of their branches and there after
            reviewed and merged with the main project. It will be a continuous
            integration process between the branches and the main project. ( It
            is an iterative process).
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
  );
}
