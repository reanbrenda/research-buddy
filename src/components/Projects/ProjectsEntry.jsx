import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ManageProjects from "./ManageProjects";
import Projects from "./Projects";

function ProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <Projects />
      </div>
    </>
  );
}

export default ProjectsEntry;
