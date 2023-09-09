import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import DocumentsPage from "./documentsPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function DocumentsProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <DocumentsPage />
      </div>
    </>
  );
}

export default DocumentsProjectsEntry;
