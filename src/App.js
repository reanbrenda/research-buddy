// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import "./App.css";
import DashboardEntry from "./pages/dashboard/DashboardEntry";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import ManageProjectsEntry from "./components/ManageProjects/ManageProjectsEntry";
import ProjectsEntry from "./components/Projects/ProjectsEntry";
import InboxProjectsEntry from "./components/inbox/inboxProjectsEntry";
import QuestionsProjectsEntry from "./components/questions/questionsProjectsEntry";
import ReportsProjectsEntry from "./components/reports/reportsProjectsEntry";
import DocumentsProjectsEntry from "./components/documents/documentsProjectsEntry";
import NewsProjectsEntry from "./components/news/newsProjectsEntry";
import CommunitysProjectsEntry from "./components/community/communitysProjectsEntry";
import LoginPage from "./components/login/login";
import MentorshipProjectsEntry from "./components/mentorship/mentorshipProjectsEntry";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardEntry />
        </Route>
        <Route path="/manageprojects">
          <ManageProjectsEntry />
        </Route>
        <Route path="/projects">
          <ProjectsEntry />
        </Route>
        <Route path="/inbox">
          <InboxProjectsEntry />
        </Route>
        <Route path="/questions">
          <QuestionsProjectsEntry />
        </Route>
        <Route path="/reports">
          <ReportsProjectsEntry />
        </Route>
        <Route path="/documents">
          <DocumentsProjectsEntry />
        </Route>
        <Route path="/news">
          <NewsProjectsEntry />
        </Route>
        <Route path="/mentorship">
          <MentorshipProjectsEntry />
        </Route>
        <Route path="/community">
          <CommunitysProjectsEntry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
