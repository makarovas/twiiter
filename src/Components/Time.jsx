import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { hours: 0, min: 0, sec: 0 };
  }

  // componentDidMount() {
  //   this.interval = setInterval(
  //     () =>
  //       this.setState({
  //         hours: Date().getHours(),
  //         min: Date().getMinutes(),
  //         sec: Date().getSeconds()
  //       }),
  //     1000
  //   );
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    const { hours, min, sec } = this.state;
    return (
      <div>
        <span>
          {20} {20} {20}
          {/* {hours}: {min}: {sec} */}
        </span>
      </div>
    );
  }
}
