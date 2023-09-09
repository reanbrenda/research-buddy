import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManageProjects from "./ManageProjects";

function ManageProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <ManageProjects />
      </div>
    </>
  );
}

export default ManageProjectsEntry;
