import React from "react";
import TopFooter from "./components/TopFooter";
import Navbar from "./components/Navbar";
import SmallContact from "./components/SmallContact";
import Contact from "./components/Contact";
import BottomFooter from "./components/BottomFooter";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <div className="w-full h-full ">
      <Router>
        <TopFooter />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/:id">
            <DetailPage />
          </Route>
        </Switch>
        <SmallContact />
        <Contact />
        <BottomFooter />
      </Router>
    </div>
  );
};

export default App;
