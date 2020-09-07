import React, { Component } from "react";

class Tugas11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), time: 100, showTime: true };
  }

  timer() {
    this.setState({
      time: this.state.time - 1,
    });
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    if (this.timer !== undefined) {
      this.hitungMundur = setInterval(() => this.timer(), 1000);
    }
    if (this.tick !== undefined) {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  }
  componentDidUpdate() {
    if (this.state.showTime === true) {
      if (this.state.time < 1) {
        this.setState({ showTime: false });
      }
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "white",
          width: "80%",
          alignItems: "center",
        }}
      >
        {this.state.showTime && (
          <>
            <div style={{}}>
              <h1 style={{ display: "block" }}>
                Sekarang Jam: {this.state.date.toLocaleTimeString()}
              </h1>
            </div>
            <div>
              <h1 style={{ display: "block", marginLeft: "90px" }}>
                Hitung Mundur: {this.state.time}
              </h1>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Tugas11;
