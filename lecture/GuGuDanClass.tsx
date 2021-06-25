import * as React from "react";
import { Component } from "react";

class GuGuDan extends React.Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: "정답: " + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
      if (this.input) {
        this.input.focus();
      }
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      if (this.input) {
        this.input.focus();
      }
    }
  };

  input: HTMLInputElement | null = null;

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  onRefInput = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>
          {this.state.first} 곱하기 {this.state.second} 는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default GuGuDan;