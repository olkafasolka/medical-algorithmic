import React from "react";
import GridMain from "./Components/GridMain";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container";
import FooterTest from "./Components/FooterTest";
import { bleed, resu, save, help, secure, que1, que2, que3, que4 } from "./config";

function AppRouter() {
  return (
    <div>
      <GridMain />
      <Router>
        <div>
          <Route path="/" exact render={() => <Container {...que1} />} />
          <Route path="/krok-2" exact render={() => <Container {...que2} />} />
          <Route path="/krok-3" exact render={() => <Container {...que3} />} />
          <Route path="/krok-4" exact render={() => <Container {...que4} />} />
          <Route path="/sol-1" exact render={() => <Container {...resu} />} />
          <Route path="/sol-2" exact render={() => <Container {...bleed} />} />
          <Route path="/sol-3" exact render={() => <Container {...save} />} />
          <Route path="/sol-4" exact render={() => <Container {...help} />} />
          <Route path="/sol-5" exact render={() => <Container {...secure} />} />
        </div>
      </Router>
      <FooterTest />
    </div>
  );
}

export default AppRouter;
