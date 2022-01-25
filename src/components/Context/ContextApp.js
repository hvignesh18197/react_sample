import React from "react";

const Theme = React.createContext("light");

export default class ContextApp extends React.Component {
  render() {
    return (
      <Theme.Provider value="black">
        <Toolbar />
      </Theme.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return (
      <Theme.Consumer>
        {(value) => (
          <button style={{ backgroundColor: value }}>Toggle Theme</button>
        )}
      </Theme.Consumer>
    );
  }
}
