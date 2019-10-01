import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import WorkersInfo from "./workersSalary_ex1/WorkersInfo";
import MathTest from "./mathTest_ex2/MathTest";
import HistoryTest from "./historyTest_ex3/HistoryTest";

class App extends Component {
    handleChange(event, arr, index) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        if (arr) {
            const tempArr = this.state[arr].slice();
            tempArr[index][name] = value;
            this.setState({[arr]: tempArr});
        } else {
            this.setState({
                [name]: value,
            });
        }
    }

    render() {
    return (
      <div className="App">
        <h1> Lesson 11 </h1>
        <WorkersInfo handleChange={this.handleChange}/>
        <MathTest handleChange={this.handleChange}/>
        <HistoryTest/>
      </div>
    );
    }
}

export default hot(module)(App);
