import React, { Component } from "react";

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createBox(this.state);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="width">Width:</label>
            <input
              type="text"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </div>
          <button>Enter box!</button>
        </form>
      </div>
    );
  }
}
