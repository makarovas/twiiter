import React, { Component } from "react";
import { fromNow } from "moment";
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
    console.log(this.props.time);
    // const { hours, min, sec } = this.state;
    return (
      <div>
        <span>
          {this.props.time.slice(0, 10)}
          {/* {hours}: {min}: {sec} */}
        </span>
      </div>
    );
  }
}
