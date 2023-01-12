import React, { Component } from "react";

class EvenPractice extends Component {

  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>이벤트 핸들링</h1>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={
            (e) => {
              this.setState(
                {
                  message: e.target.value
                }
              )
            }
          }
        />
        <button
          onClick={
            () => {
              alert(this.state.message)
              this.setState({
                message: ''
              })
            }
          }
        >클릭!</button>
      </div>
    )
  }
}

export default EvenPractice