import React, { Component } from "react";

class EvenPractice extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        value={this.state.message}
        onChange={this.handleChange}
      />
      <button onClick={this.handleClick}>확인!</button>
    </div>
  }
}

export default EvenPractice