import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById('modal');

export default class Modal extends React.Component {
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        modalRoot,
      );
    }
  }