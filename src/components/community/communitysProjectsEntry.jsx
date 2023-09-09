import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import CommunitysPage from "./communitysPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function CommunityProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <CommunitysPage />
      </div>
    </>
  );
}

export default CommunityProjectsEntry;
