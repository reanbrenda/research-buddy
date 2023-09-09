import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "../../App.css";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function DashboardEntry() {
  return (
    <Router>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <Switch>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default DashboardEntry;