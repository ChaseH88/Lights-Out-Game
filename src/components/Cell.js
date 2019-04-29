import React, { Component } from "react";

// Styled Components
import { CellStyle } from "./styled-components";

// Main Component
class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.flipCellsAroundMe();
  }
  
  render() {
    let classes = "Cell" + (this.props.isLit ? " lit" : "");
  
    return(
      <CellStyle className={classes} onClick={this.handleClick} />
    )
  }
}

export default Cell;