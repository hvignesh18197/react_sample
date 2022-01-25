import React from "react";

export default function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Mounted')
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  };
}
