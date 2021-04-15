import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import ResumeScreen from "./screens/ResumeScreen";
import TopBar from "./components/TopBar";

function App() {
  return (
    <main>
      <TopBar />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/curriculo" component={ResumeScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </main>
  );
}

export default App;
