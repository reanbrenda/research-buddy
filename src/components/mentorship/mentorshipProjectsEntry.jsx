import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import MentorshipPage from "./mentorshipPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function MentorshipProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <MentorshipPage />
      </div>
    </>
  );
}

export default MentorshipProjectsEntry;
