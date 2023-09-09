import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  BarChart,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Notifications,
} from "@material-ui/icons";

import { FaVideo } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            <a href="/projects" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Projects
              </li>
            </a>
            <a href="/manageprojects" className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Track Progress
              </li>
            </a>
            <a href="/inbox" className="link">
              <li className="sidebarListItem">
                <Notifications className="sidebarIcon" />
                Inbox
              </li>
            </a>
            <a href="/inbox" className="link">
              <li className="sidebarListItem">
                <FaVideo className="sidebarIcon" />
                Schedule Meeting
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Q&A</h3>
          <ul className="sidebarList">
            <a href="/questions" className="link">
              <li className="sidebarListItem">
                <MdQuestionAnswer className="sidebarIcon" />
                Questions
              </li>
            </a>
            <a href="/reports" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Document Repository</h3>
          <ul className="sidebarList">
            <a href="/documents" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Past Research
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Mentorship</h3>
          <ul className="sidebarList">
            <a href="/mentorship" className="link">
              <li className="sidebarListItem">
                <MdQuestionAnswer className="sidebarIcon" />
                Mentorship Session
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Whats trending</h3>
          <ul className="sidebarList">
            <a href="/news" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                News Updates
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Your Communities</h3>
          <ul className="sidebarList">
            <a href="/community" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Explore Communities
              </li>
            </a>
            <a href="/community" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Chicago Meds
              </li>
            </a>
            <a href="/community" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Kijabe Meds
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
