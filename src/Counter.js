import React, { Component } from "react";
import "./Counter.css";
import "./ButtonsPanel";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { counterValue: this.props.initValue, showClock: true };

    // this.changeValue = this.changeValue.bind(this); to trzeba dodac w przypadku ES5
  }

  changeValue = (action) => {
    /* <-- metoda strzałkowa to ES6 / ES5 to changeValue() {content} */
    // this.setState({counterValue: this.state.counterValue + 1})

    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return {
        counterValue: currentCounterValue,
      };
    });
  };

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  render() {
    let clockElement = "";

    if (this.state.showClock) {
    //   clockElement = <Clock toggleClockMethod={this.toggleClock} />;
    clockElement = <ClockFunctional toggleClockMethod={this.toggleClock}/>
    } else {
      clockElement = (
        <span onClick={this.toggleClock} className="show-clock">
          Show Clock{" "}
        </span>
      );
    }

    return (
      <div className="counter">
      <div>
         Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
        {clockElement}
      </div>
      </div>
    );
  }
}

export default Counter;
