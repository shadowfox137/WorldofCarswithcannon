import React from "react";

class Mainmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GameStarted: false,
    };
  }

  render() {
    return (
      <div id="startingScreen">
        <div>WorldofCarswithcannon</div>
        <button id="start" onClick={this.Start}>
          Start
        </button>
        <button id="help" onClick={this.Help}>
          Help
        </button>
      </div>
    );
  }
}

export default Mainmenu;
