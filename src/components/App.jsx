import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Users from "./Users";
import Tasks from "./Tasks";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch className="margin">
          <Route exact path="/" component={Users} />
          <Route exact path="/tasks" component={Tasks} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
