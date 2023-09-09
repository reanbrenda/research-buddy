import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import InboxPage from "./inboxPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function InboxProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <InboxPage />
      </div>
    </>
  );
}

export default InboxProjectsEntry;
