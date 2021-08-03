import React, { Component } from "react";
import "./Tile.css";

class SlideShow extends React.Component {

  constructor(props)
  {
      super(props);
      this.state =
      {
        error: null,
        isLoaded: false
      };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return(
        <p>Placeholder</p>
    );
  }
  
}
