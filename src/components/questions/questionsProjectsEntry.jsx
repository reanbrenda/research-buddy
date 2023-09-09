import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import QuestionsPage from "./questionsPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function QuestionsProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <QuestionsPage />
      </div>
    </>
  );
}

export default QuestionsProjectsEntry;
