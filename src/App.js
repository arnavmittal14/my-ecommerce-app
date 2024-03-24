import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
    </Router>
  );
};

export default App;
