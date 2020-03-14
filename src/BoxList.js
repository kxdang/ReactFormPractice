import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [{ width: 10, height: 40, color: "orange" }] };
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));
    return (
      <div>
        <NewBoxForm />
        {boxes}
      </div>
    );
  }
}
