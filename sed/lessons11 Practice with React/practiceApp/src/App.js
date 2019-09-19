import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import WorkersInfo from "./workersSalary_ex1/WorkersInfo";
import MathTest from "./mathTest_ex2/MathTest";
import HistoryTest from "./historyTest_ex3/HistoryTest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Lesson 11 </h1>
        <WorkersInfo/>
        <MathTest/>
        <HistoryTest/>
      </div>
    );
  }
}

export default hot(module)(App);
