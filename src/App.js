import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;