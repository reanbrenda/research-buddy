import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import NewsPage from "./newsPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function NewsProjectsEntry() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <NewsPage />
      </div>
    </>
  );
}

export default NewsProjectsEntry;
