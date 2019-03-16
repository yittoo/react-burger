import React, { Component } from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliari/Auxiliari";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const currentClass = this.props.show
      ? classes.Modal + " " + classes["Modal-Visible"]
      : classes.Modal;
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={currentClass}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
