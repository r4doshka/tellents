import React, { Component } from "react";
import MainMenuItem from "./MainMenuItem";

class TopMenu extends Component {
  render() {
    return (
      <div className="nav-list">
        <ul className="flexbox justify-space-between">
          <MainMenuItem link="/search" label="FIND" />
          <MainMenuItem link="/skills" label="YOUR OFFICE" />
          <MainMenuItem link="/how-it-works" label="HOW IT WORKS" />
          <MainMenuItem link="/ask-us" label="ASK US" />
        </ul>
      </div>
    );
  }
}

export default TopMenu;
