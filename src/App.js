import React from "react";

import FilterYear from "./FilterYear";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 0
    };
  }

  handleYear = (value)  => {
    this.setState({ years: value });
  }

  render() {
    return (
      <div className="App">
        <FilterYear
          onHandleYear={this.handleYear}
          stateYear={this.state.years}
        />
      </div>
    );
  }
}


// https://vc.ru/dev/133379-5-otlichiy-mezhdu-obychnymi-i-strelochnymi-funkciyami