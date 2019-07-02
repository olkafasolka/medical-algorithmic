import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuestCard from "./Components/QuestCard";
import "./App.css";
import StoppingHemo from "./Components/StoppingHemo";
import Walk from "./Components/Walk";

function AppRouter() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/quest/" component={QuestCard} />
          <Route path="/hemo/" component={StoppingHemo} />
          <Route path="/walk/" component={Walk} />
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;
