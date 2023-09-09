import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import ReportsPage from "./reportsPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function ReportsProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <ReportsPage />
      </div>
    </>
  );
}

export default ReportsProjectsEntry;
