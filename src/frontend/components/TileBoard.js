/* eslint-env jquery */
import React, { Component } from "react";
import "./TileBoard.css";

class TileBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      token: [],
      open: false
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
  }


  render() {
    const { error, isLoaded, token } = this.state;
      return (
        <div>
            Tile goes here
        </div>
      );
    }
}

export default TileBoard;