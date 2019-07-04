import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ContainerMain from "./Components/ContainerMain";
import {
  bleed,
  resu,
  save,
  help,
  secure,
  que1,
  que2,
  que3,
  que4
} from "./config";
import posed, { PoseGroup } from "react-pose";

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

function AppRouter() {
  return (
    <Router
      render={({ location }) => (
        <div>
          <PoseGroup>
            <RoutesContainer key={location.key}>
              <Switch location={location}>
                <div>
                  <Route
                    path="/"
                    exact
                    render={() => <ContainerMain {...que1}
                    key="que1"/>}
                  />
                  <Route
                    path="/krok-2"
                    exact
                    render={() => <ContainerMain {...que2} />}
                  />
                  <Route
                    path="/krok-3"
                    exact
                    render={() => <ContainerMain {...que3} />}
                  />
                  <Route
                    path="/krok-4"
                    exact
                    render={() => <ContainerMain {...que4} />}
                  />
                  <Route
                    path="/sol-1"
                    exact
                    render={() => <ContainerMain {...resu} />}
                  />
                  <Route
                    path="/sol-2"
                    exact
                    render={() => <ContainerMain {...bleed} />}
                  />
                  <Route
                    path="/sol-3"
                    exact
                    render={() => <ContainerMain {...save} />}
                  />
                  <Route
                    path="/sol-4"
                    exact
                    render={() => <ContainerMain {...help} />}
                  />
                  <Route
                    path="/sol-5"
                    exact
                    render={() => <ContainerMain {...secure} />}
                  />
                </div>
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </div>
      )}
    />
  );
};
export default AppRouter;
